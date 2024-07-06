//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const categoryAPI = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (build) => ({
    fetchAllCategories: build.query<string[], number>({
      query: () => ({
        url: 'products/categories',
      }),
    }),
  }),
})
