import { QueryClient } from "@tanstack/react-query";

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const BASE_URL = "/";
export const restFetcher = async ({
  path,
  method,
  body,
  params,
}: {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: { [key: string]: any };
  params?: { [key: string]: any };
}) => {
  try {
    let url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += "?" + searchParams.toString();
    }
    if (body) fetchOptions.body = JSON.stringify(body);
    const res = await fetch(url, fetchOptions);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};