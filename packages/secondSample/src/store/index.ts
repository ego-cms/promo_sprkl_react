import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import RootReducer from './RootReducer'

const store = configureStore({
  reducer: RootReducer,
  middleware: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  ],
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export * from './useTypedSelector'
export * from './useActions'

export default store
