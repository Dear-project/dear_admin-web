import type { Metadata } from "next";
import GlobalStyle from "@/styles/global";
import QueryClientProvider from "@/components/common/provider/query-provider";
import Layout from "@/components/common/layout";

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
    <html lang="en">
      <body>
        <GlobalStyle />
        <QueryClientProvider>
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </body>
    </html>
  );
}
