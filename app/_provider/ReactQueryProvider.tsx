"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getClient } from "@/app/_provider/queryClient";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  )
}