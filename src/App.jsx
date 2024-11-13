import React from 'react'
import { Provider } from 'react-redux'
import { Tables } from './components'
import { store } from './store'

const App = () => {
	return (
		<Provider store={store}>
			<Tables />
		</Provider>
	)
}

export default App
