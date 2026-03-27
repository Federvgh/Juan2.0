import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/analytics/Analytics";
import {
  StructuredData,
  personSchema,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Juan Pablo Tazzioli — Industrial Designer",
    template: "%s | Juan Pablo Tazzioli",
  },
  description:
    "Industrial designer focused on premium interiors, automotive detail and functional innovation. Based in Valencia, Spain.",
  metadataBase: new URL("https://juanpablotazzioli.com"),
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Juan Pablo Tazzioli",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={personSchema()} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
