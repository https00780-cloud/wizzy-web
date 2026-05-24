import { DOWNLOAD_FILENAME } from "./site";

/** POST a download alert to Discord (webhook URL from env secret). */
export async function notifyDiscordDownload(
  webhookUrl: string | undefined,
  totalCount: number,
  request: Request,
): Promise<void> {
  if (!webhookUrl) return;

  const when = new Date().toISOString();
  const country = request.headers.get("cf-ipcountry") ?? "—";
  const userAgent = request.headers.get("user-agent") ?? "—";

  const body = {
    embeds: [
      {
        title: "Wizzy Addon — new download",
        description: `**${DOWNLOAD_FILENAME}** was downloaded from wizzyaddon.com.\n\n**Wizzy Addon** · full deepslate bypass · Meteor Client addon for DonutSMP`,
        color: 0x3b82f6,
        fields: [
          { name: "Total downloads", value: String(totalCount), inline: true },
          { name: "Country", value: country, inline: true },
          { name: "Time (UTC)", value: when, inline: false },
          {
            name: "User-Agent",
            value: userAgent.length > 256 ? `${userAgent.slice(0, 253)}…` : userAgent,
            inline: false,
          },
        ],
        footer: { text: "Wizzy Addon · full deepslate bypass" },
        timestamp: when,
      },
    ],
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error(`[discord] webhook failed: ${res.status} ${await res.text()}`);
    }
  } catch (error) {
    console.error("[discord] webhook error", error);
  }
}
