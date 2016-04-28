import React from 'react'


const styles = {
	form: {
	    width: "300px",
	    margin: "0 auto"
	},

	input: {
		width: "100px",
	}
}

function Button (props) {
	return (
		<button type = "button"
		className = "btn btn-md btn-success"
		onClick = {props.onSubmitArtist}>
		Submit
		</button>
	)
}

function InputField (props) {
	return (
		<input type = "text"
		placeholder = "Enter an artist"
		value = {props.artist}
		onChange = {props.onUpdateArtist}>
		</input>
	)
}

function ArtistSearch (props) {
	return (
		<form style = {styles.form}>
			<InputField artist = {props.artist} style = {styles.input} onUpdateArtist = {props.onUpdateArtist}/>
			<Button onSubmitArtist = {props.onSubmitArtist} />
		</form>
	)
}


export default ArtistSearch