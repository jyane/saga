import Immutable from 'immutable'

import * as ActionTypes from '../actions/ActionTypes'

class UserSearchRecord extends Immutable.Record({ query: '' }) {}

const initialState = new UserSearchRecord()

const userSearch = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_USER:
      return state
    case ActionTypes.UPDATE_QUERY:
      return state.set('query', action.query)
    default:
      return state
  }
}

export default userSearch

