import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const referer = request.headers.get("referer") ?? "direct";
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  });

  // Parse a human-readable source from the referer
  let source = "direct";
  try {
    if (referer !== "direct") {
      source = new URL(referer).hostname.replace("www.", "");
    }
  } catch {
    source = referer;
  }

  // Detect device type from user agent
  const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);
  const device = isMobile ? "Mobile" : "Desktop";

  const webhookUrl = process.env.DISCORD_RESUME_WEBHOOK;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "📄 Resume Viewed",
              color: 0x6366f1,
              fields: [
                { name: "🕐 Time", value: timestamp, inline: true },
                { name: "💻 Device", value: device, inline: true },
                { name: "🔗 Source", value: source, inline: false },
              ],
            },
          ],
        }),
      });
    } catch {
      // Don't block the redirect if the webhook fails
    }
  }

  return NextResponse.redirect(new URL("/TomiwaJinaduResume.pdf", request.url));
}
