import React from 'react'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore, compose} from 'redux'
import persistState from 'redux-localstorage'

import rootReducer from '.'

const enhancer = compose(
    /* [middlewares], */
    persistState(/*paths, config*/),
)


const createStore = () => reduxCreateStore(rootReducer, enhancer)


export default ({ element }) => (
    <Provider store={createStore()}>{element}</Provider>
)
