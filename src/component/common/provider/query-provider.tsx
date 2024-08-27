"use client";
import GlobalStyle from "@/styles/global";
import {
  QueryClient,
  QueryClientProvider as MaruQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            throwOnError: true,
          },
          mutations: {
            throwOnError: true,
          },
        },
      })
  );

  return (
    <MaruQueryClientProvider client={queryClient}>
      <GlobalStyle />
      {children}
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </MaruQueryClientProvider>
  );
};

export default QueryClientProvider;
