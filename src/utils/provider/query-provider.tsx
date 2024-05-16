// 'use client';
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import GlobalStyle from "@/styles/global";
// export default function ReactQueryProviders({
//   children,
// }: React.PropsWithChildren) {
//   const client = new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: false,
//         retryOnMount: false,
//         refetchOnWindowFocus: false,
//         refetchOnReconnect: false,
//         staleTime: 1000,
//       },
//     },
//   });
  
  
//   return (
//     <QueryClientProvider client={client}>
//         <GlobalStyle/>
//       {children}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// }
