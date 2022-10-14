import React from "react"
import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"


const GalleryNavigation = ({galleries}) => {
	return (
			<nav>
				<NavLink to="/">Home</NavLink>
				<h1>Galleries:</h1>
				{galleries.map((gallery) => {
					return (
						<NavLink to={`/galleries/${gallery.id}`} key={gallery.id}>
							{gallery.name}
						</NavLink>
					)
				})}
			</nav>
	);
}

export default GalleryNavigation;