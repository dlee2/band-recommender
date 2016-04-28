import React, { Component } from 'react'
import Header from './Header'
import ArtistSearchContainer from '../containers/ArtistSearchContainer'
import RelatedArtistListContainer from '../containers/RelatedArtistListContainer'



const styles = {
  container: {
    width: '100%',
    height: '92%'
	}
}

class Main extends Component{
	render() {
		return(

			<div className = "container" >
				<Header />
				<ArtistSearchContainer />
				{this.props.children}
			</div>
		)
	}
}

export default Main