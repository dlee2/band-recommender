import React, { Component, PropTypes } from 'react'
import RelatedArtistList from '../components/RelatedArtistList'
import { getArtist, getRelatedArtists } from '../utils/ArtistTools'

class RelatedArtistListContainer extends Component {
	constructor () {
		super()
		this.state = {
			relatedArtists: [],
			isLoading: true
		}
	}

	componentDidMount () {
		this.makeRequest(this.props.routeParams.artist)
		.then((relatedArtists) => {
				 	this.setState({
				 		relatedArtists,
				 		isLoading: false
				 	});
			 	console.log(this.state)
		 	})
	}

	componentWillReceiveProps (nextProps) {
		this.makeRequest(nextProps.routeParams.artist)
	}

	componentWillMount () {
		this.makeRequest(this.props.routeParams.artist)
	}
	makeRequest (artist) {
		console.log('dan')
		return getArtist(artist)
		 .then((id) => {

		 	return getRelatedArtists(id)
		 })
		 

	}
	render() {
		console.log(this.state)
		return (
			<RelatedArtistList 
				relatedArtists = {this.state.relatedArtists}
				isLoading = {this.state.isLoading} />
		)
	}
}


RelatedArtistListContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}

export default RelatedArtistListContainer