import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Visibility from "@/components/Sidebar/Visibilty";
import PageSwitchLoader from "@/components/Loaders/PageSwitchLoader";
import { ViewerProvider } from "@/components/Context/ViewerProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomiwa Jinadu's Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inline script: applies dark/light class before first paint — eliminates white flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ViewerProvider>
          <PageSwitchLoader />
          <Visibility>{children}</Visibility>
          <Analytics />
          <SpeedInsights />
        </ViewerProvider>
      </body>
    </html>
  );
}
