import { applyMiddleware, createStore, StoreEnhancer } from "redux"
import thunk from "redux-thunk"

import reducers from "./reducers"

const middlewares = [thunk]

const enhancer: StoreEnhancer = applyMiddleware(...middlewares)  

const store = createStore(reducers, {}, enhancer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store