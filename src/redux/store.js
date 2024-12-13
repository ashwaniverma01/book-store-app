import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/features/cart/cartSlice"

import ordersApi from './features/orders/ordersApi'
import booksApi from './features/books/booksApi'



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})