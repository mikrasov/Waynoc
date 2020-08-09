import React from 'react'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import DataLoader from "./data_loader"

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '.'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const persistentStore = ({ element }) => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)

    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <DataLoader/>
            {element}
        </PersistGate>
    </Provider>
}

export const temporaryStore = ({ element }) => {
    let store = createStore(rootReducer)

    return <Provider store={store}>
        <DataLoader/>
        {element}
    </Provider>
}
