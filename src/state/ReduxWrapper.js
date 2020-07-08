import React from 'react'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '.'

/*
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default ({ element }) => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)

    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {element}
        </PersistGate>
    </Provider>
*/

export default ({ element }) => {
    let basic_store = createStore(rootReducer)

    return <Provider store={basic_store}>{element}</Provider>
}
