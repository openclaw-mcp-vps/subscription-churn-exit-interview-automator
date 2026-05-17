import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnIQ – Automated Exit Interview Surveys",
  description: "Automatically conduct exit interviews for churning subscribers and get AI-powered insights to reduce churn."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="263e49aa-d323-4c8d-bcaf-aef5375ca7e1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
