import { useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({galleries}) => {
	const {galleryId} = useParams();
	const correctGallery = galleries.find(gallery => gallery.id === parseInt(galleryId));
	console.log(galleries)
	
	const art =	correctGallery.objects.map(obj => {
			return obj.images
		})
	
	return (
		<>
			<h2>{correctGallery.name}</h2>
			<ArtImageTile art={art}/>
		</>
	)
}

export default GalleryView;