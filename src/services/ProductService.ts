//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { INewProduct, IProduct } from '../models/IProduct'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const productAPI = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], number>({
      query: (limit: number = 50) => ({
        url: '/products',
        params: {
          limit: limit,
        },
      }),
      providesTags: (result) => ['Product'],
    }),
    createProduct: build.mutation<INewProduct, INewProduct>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: build.mutation<INewProduct, INewProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: 'PUT',
        body: product,
      }),
      // invalidatesTags: ['Product'],
    }),
    deleteProduct: build.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
})
