import React, { Component } from 'react'

const styles = {
	image: {
		height: '100px',
		width: '100%'
	}
}


class Header extends Component {
	render () {
		return (
			<div> 
				<img style = {styles.image} src = "http://orchardmusicstudios.com/wp-content/uploads/2014/08/Music-Tree1.jpg" />
			</div>
		)
	}
}

export default Header