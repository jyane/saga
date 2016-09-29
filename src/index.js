// flow

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const add = (a: number, b: number): number => a + b
console.log(add(1 + ''))


// https://api.github.com/users/${userName}/repos
ReactDOM.render(<App />, document.getElementById('root'))

