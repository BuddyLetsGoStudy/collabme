import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({ subsets: ["cyrillic"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "Collabme.AI",
  description: "collabme.ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
