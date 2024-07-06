import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../models/IProduct'

interface ProductState {
  products: IProduct[]
}

const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'productList',
  initialState: initialState,
  reducers: {},
})
