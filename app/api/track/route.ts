import { NextRequest, NextResponse } from "next/server";

const eventConfig: Record<string, { emoji: string; title: string; color: number }> = {
  "viewer:stalker":   { emoji: "🕵️", title: "Stalker Mode Activated",       color: 0x9333ea },
  "viewer:developer": { emoji: "👨‍💻", title: "Developer View Selected",      color: 0x6366f1 },
  "viewer:recruiter": { emoji: "🧑‍💼", title: "Recruiter View Selected",      color: 0x22c55e },
  "audio:play":       { emoji: "🔊", title: "Name Pronunciation Played",     color: 0xf59e0b },
  "email:copy":       { emoji: "📬", title: "Email Copied to Clipboard",     color: 0x3b82f6 },
  "chess:challenge":  { emoji: "♟️", title: "Chess Challenge Clicked",       color: 0x4f46e5 },
  "contact:linkedin": { emoji: "💼", title: "LinkedIn Clicked",              color: 0x0077b5 },
  "contact:github":   { emoji: "🐙", title: "GitHub Clicked",                color: 0x333333 },
  "project:demo":     { emoji: "🚀", title: "Project Demo Clicked",          color: 0x10b981 },
};

export async function POST(req: NextRequest) {
  try {
    const { event, metadata } = await req.json();
    const webhookUrl = process.env.DISCORD_RESUME_WEBHOOK;
    if (!webhookUrl) return NextResponse.json({ ok: true });

    const ua = req.headers.get("user-agent") ?? "Unknown";
    const device = /mobile/i.test(ua) ? "📱 Mobile" : "🖥️ Desktop";
    const time = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "medium",
      timeStyle: "short",
    });
    const rawRef = req.headers.get("referer") ?? "";
    let source = "direct";
    try {
      if (rawRef) source = new URL(rawRef).hostname.replace("www.", "");
    } catch { source = rawRef; }

    const config = eventConfig[event] ?? { emoji: "📊", title: event, color: 0x6b7280 };

    const extraFields = metadata
      ? Object.entries(metadata).map(([k, v]) => ({ name: k, value: String(v), inline: true }))
      : [];

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          title: `${config.emoji} ${config.title}`,
          color: config.color,
          fields: [
            { name: "Device", value: device, inline: true },
            { name: "Time (ET)", value: time, inline: true },
            { name: "Source", value: source, inline: true },
            ...extraFields,
          ],
          footer: { text: "tomiwajinadu.com · Analytics" },
        }],
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true });
  }
}
