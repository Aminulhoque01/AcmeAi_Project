import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const legalApi = createApi({
  reducerPath: "legalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/generate",  
  }),
  endpoints: (builder) => ({
    searchLegalDocs: builder.query({
      query: (query: string) => ({
        url: `/search?query=${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSearchLegalDocsQuery } = legalApi;
