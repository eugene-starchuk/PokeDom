import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/PokeStore'
import './index.scss'
import App from './App'

ReactDOM.render(<App store={store} />, document.getElementById('root'))
