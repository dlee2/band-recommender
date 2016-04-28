import React, { Component, PropTypes } from 'react'
import ArtistSearch from '../components/ArtistSearch'
import { getArtist, getRelatedArtists } from '../utils/ArtistTools'


class ArtistSearchContainer extends Component {
	constructor () {
		super()
		this.state = {
			artist: ""
		}
	}

	handleUpdateArtist (event) {
		this.setState({
			artist: event.target.value
		})
	}

	handleSubmitArtist (event) {
		event.preventDefault()	
		this.context.router.push('/artist/' + encodeURIComponent(this.state.artist).replace(/%20/g,'+'))
		


		
	}

	render () {
		return (

			<ArtistSearch
				onUpdateArtist = {(event) => this.handleUpdateArtist(event)}
				onSubmitArtist = {(event) => this.handleSubmitArtist(event)}
				artist = {this.state.artist} />
		)
	}
}


ArtistSearchContainer.contextTypes = {
	router: React.PropTypes.object.isRequired
}


export default ArtistSearchContainer