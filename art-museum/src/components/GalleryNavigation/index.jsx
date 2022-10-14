import React from "react"


const GalleryNavigation = props => {
	return (
		<div>
			<h1>Galleries:</h1>
			{props.galleries.map((gallery) => {
				return (
					<p key={gallery.id}>{gallery.name}</p>
				)
			})}
		</div>
	);
}

export default GalleryNavigation;