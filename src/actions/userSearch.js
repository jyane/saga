import * as ActionTypes from './ActionTypes'

const searchUser = () => ({
  type: ActionTypes.SEARCH_USER
})

const updateQuery = (query) => ({
  type: ActionTypes.UPDATE_QUERY,
  query
})

export {
  searchUser,
  updateQuery
}

