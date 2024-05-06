import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Sumit Kumar Chalotra - Sr Software Engineer (MEAN/MERN Stack)",
  description: "Portfolio Website for Sumit Kumar Chalotra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
