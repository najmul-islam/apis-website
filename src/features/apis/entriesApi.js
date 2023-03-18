import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.publicapis.org/",
  }),

  endpoints: (builder) => ({
    getEntries: builder.query({
      query: () => ({
        method: "GET",
        url: "/entries",
      }),
    }),
  }),
});

export const { useGetEntriesQuery } = apiSlice;
