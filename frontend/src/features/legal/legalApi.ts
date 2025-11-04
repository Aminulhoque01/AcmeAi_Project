import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const legalApi = createApi({
  reducerPath: "legalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://acme-ai-project.vercel.app/api/v1/generate",  
  }),
  endpoints: (builder) => ({
    searchLegalDocs: builder.query({
      query: (query: string) => ({
        url: `/search?query=${query}`,
        method: "GET",
      }),
      
    }),
    getLegalDocById: builder.query({
      query: (id: string) => `/generate/${id}`,
    }),
  }),
});

export const { useSearchLegalDocsQuery, useGetLegalDocByIdQuery } = legalApi;
