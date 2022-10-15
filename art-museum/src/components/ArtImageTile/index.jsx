
const ArtImageTile = ({art}) => {
    return (
        art.map(imageArray => {
            return (
                imageArray.map( image => {
                    return <img src={`${image.baseimageurl}`} key={image.imageid}/>
                })
            )
        })
    )
}

export default ArtImageTile