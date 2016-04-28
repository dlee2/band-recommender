import axios from 'axios'


export function getArtist (artist) {
	const url = "https://api.spotify.com/v1/search"
	console.log(encodeURIComponent(artist))
	return axios.get(url, {
		params : {
			q: artist,
			type: "artist",
			limit: 5
		}
	}).then((artistData) => {
		const artistId = artistData.data.artists.items[0].id
		return artistId


	}).catch((response) => {
		console.log(response)
	})
}


export function getRelatedArtists (artistId) {
	const url = "https://api.spotify.com/v1/artists/" + artistId + "/related-artists"
	
	return axios.get(url)
		.then((relatedArtists) => {

			return relatedArtists.data.artists

		}).catch((response) => {
			console.log(response)
		})
}