import React from 'react'
import {render} from 'react-dom'

import css  from './styles/style.styl'

import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const router = (
	<Router history={browserHistory}>
		<Route path='/' components={Main}>
			<IndexRoute components={PhotoGrid} />
			<Route path='/view/:postId' components={Single} />
		</Route>
	</Router>
)

render(router, document.getElementById('root'))