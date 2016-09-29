import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'
import UserSearch from './containers/UserSearch'

const App = () => (
  <Provider store={configureStore()}>
    <div>
      <UserSearch />
    </div>
  </Provider>
)

export default App

