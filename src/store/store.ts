import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productAPI } from '../services/ProductService'
import { productDetailAPI } from '../services/ProductDetailService'
import { categoryAPI } from '../services/CategoryAPIService'

const rootReducer = combineReducers({
  [productAPI.reducerPath]: productAPI.reducer,
  [productDetailAPI.reducerPath]: productDetailAPI.reducer,
  [categoryAPI.reducerPath]: categoryAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productAPI.middleware,
        productDetailAPI.middleware,
        categoryAPI.middleware
      ),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
