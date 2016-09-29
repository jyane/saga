import { compose, createStore, applyMiddleware } from 'redux'
import { createSagaMiddleware } from 'redux-saga'

import saga from '../sagas'
import reducer from '../reducers'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware(saga)
  const middlewares = applyMiddleware(sagaMiddleware)
  const enhancer = window.devToolsExtension ? window.devToolsExtension() : f => f

  sagaMiddleware.run()
  return createStore(reducer, compose(middlewares, enhancer))
}

export default configureStore
