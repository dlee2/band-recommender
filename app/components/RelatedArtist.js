import React from 'react'


const styles = {
	spotify: {
		color: "#00b33c",
		fontSize: "2em",
		textDecoration: "none",
		float: "right",
		marginRight: "10px",
		marginTop: "7px"
	},

	youtube: {
		color: "#ff3333",
		fontSize: "2em",
		textDecoration: "none",
		float: "right",
		marginRight: "5px",
		marginTop: "7px"
		
	},

	row: {
		marginTop: "10px",
		marginBottom: "10px",

	},

	image: {
	    float: "left",
	    height: "40px",
	    width: "40px",
	    borderRadius: "40px",
	    marginRight: "15px"
  }
}




function RelatedArtist (props) {
	const name = props.artist.name
	const spotifyUrl = props.artist.external_urls.spotify
	const youtubeUrl = `https://www.youtube.com/results?search_query=${name}`

	const image = props.artist.images.length > 0 ?
                          props.artist.images[props.artist.images.length - 1].url :
                          '#283593';

	console.log(name)
		return (
			<div className = "container"> 
				<div style = {styles.row}>
					<img src = {image} style = {styles.image} alt = {name} />
						{name}
					<a href = {youtubeUrl}><i className="fa fa-youtube" style = {styles.youtube} aria-hidden="true"></i> </a>
					<a href = {spotifyUrl}><i className="fa fa-spotify" style = {styles.spotify} aria-hidden="true"></i> </a>
					
				</div>
			</div>
		)
	
}


export default RelatedArtist