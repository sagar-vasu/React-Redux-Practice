import {createStore,applyMiddleware} from 'redux'
import Reducer from "./Reducer"
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, Reducer)

const store =  createStore(persistedReducer,applyMiddleware(thunk))
let persistor = persistStore(store)

export {
    store,
    persistor
} 