import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "6a2aa3c93emsh4b0ed6e9aaf1821p1236bejsn1ab5d0fb2d55");

      return headers;
    },
  }),
  endpoints:(builder)=>({
    getTopCharts:builder.query({query: () => '/charts/world'})
  })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi