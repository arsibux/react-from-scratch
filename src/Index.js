import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ConsfigurStore from './Store'
import App from './App'

ReactDOM.render(
  <Provider store={ConsfigurStore()}>
    <App />
  </Provider>,

  document.getElementById('root'),
)
