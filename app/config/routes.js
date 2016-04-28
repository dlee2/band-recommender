import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../components/Main'
import RelatedArtistListContainer from '../containers/RelatedArtistListContainer'


const routes = (
	<Router history = {hashHistory}>
		<Route path = '/' component = {Main}/>
		<Route path = 'artist/:artist' component = {RelatedArtistListContainer}/>
	</Router>

);

export default routes