import type { Metadata } from "next";
import QueryClientProvider from "../component/common/provider/query-provider";
import Layout from "../component/common/layout/index";
import StyledComponentsRegistry from "@/libs/registry";
import "@/styles/font.css"
export const metadata: Metadata = {
  title: "Dear",
  description: "dear어드민입니다",
  icons: {
		icon: "/vercel.svg",
	},
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <QueryClientProvider>
            <Layout>{children}</Layout>
          </QueryClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
