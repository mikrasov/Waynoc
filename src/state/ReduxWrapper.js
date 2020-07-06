import React from 'react'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import rootReducer from '.'

import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
LogRocket.init('ewoekj/waynoc')
setupLogRocketReact(LogRocket)


const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(LogRocket.reduxMiddleware()) )


export default ({ element }) => (
    <Provider store={createStore()}>{element}</Provider>
)
