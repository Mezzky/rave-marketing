import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rave Tech | AI Travel Operations Platform",
  description:
    "Rave Tech helps travel agencies scale bookings, automate operations, and modernise accounting, ecommerce, inventory, and workflows without scaling headcount.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
