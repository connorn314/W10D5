import { useParams } from "react-router-dom";


const GalleryView = ({galleries}) => {
	const {galleryId} = useParams();
	const correctGallery = galleries.find(gallery => gallery.id === parseInt(galleryId));

	return (
		<h2>{correctGallery.name}</h2>
	)
}

export default GalleryView;