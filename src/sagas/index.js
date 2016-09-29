import userSearchSaga from './userSearchSaga'

export default function* saga() {
  yield [
    userSearchSaga()
  ]
}

