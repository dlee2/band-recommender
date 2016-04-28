import React, { Component,PropTypes } from 'react'
import RelatedArtist from './RelatedArtist'
import Loading from './Loading'



function RelatedArtistListUI (props) {

	return (
		<div> 
			<div>
			  {props.relatedArtists.map(function (listItem) {
	          return <RelatedArtist key = {listItem.id} artist={listItem} />
	      			})}
			</div>
		</div>
	)
}




function RelatedArtistList (props) {
	return (
		<div> 
		{	
			props.isLoading === true
			? <Loading />
			: <RelatedArtistListUI 
	          	  relatedArtists = {props.relatedArtists} />
      	}
			
		</div>
	)
}

RelatedArtistList.PropTypes = {
	relatedArtists: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
}

export default RelatedArtistList