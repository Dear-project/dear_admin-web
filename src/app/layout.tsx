import type { Metadata } from "next";
import GlobalStyle from "@/styles/global";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Dear",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStyle />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}