import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { createLogger } from "redux-logger"
import rootReducer from './Reducer/index'

const middleware = applyMiddleware(promise(), thunk, createLogger())

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer,{}, middleware)
  let persistor = persistStore(store)
  return { store, persistor }
}