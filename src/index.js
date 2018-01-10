import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index.js'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const middleware = [ thunk ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const shoppingCartStore = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))

ReactDOM.render(
	<Provider store={shoppingCartStore}>
		<App />
	</Provider>
, document.getElementById('root'))
registerServiceWorker()
