import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Page1 from './components/page1/page1'
import Page2 from './components/page2'

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Page1} />
					<Route eaxct path='/page2' component={Page2} />
				</Switch>
			</BrowserRouter>
		</>
	)
}

export default App
