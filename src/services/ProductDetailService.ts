import { IProduct } from '../models/IProduct'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const productDetailAPI = createApi({
  reducerPath: 'productDetailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    getProductById: build.query<IProduct, string>({
      query: (productId: string) => ({
        url: `/products/${productId}`,
      }),
    }),
  }),
})
