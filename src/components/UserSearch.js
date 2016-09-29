import React from 'react'

const UserSearch = ({ query, search }) => (
  <div>
    <input type="text" />
    <p>
      Current query you are typing is: {query}
    </p>
    <button type="button">
      Search
    </button>
    <div>
      Results:
    </div>
  </div>
)

export default UserSearch

