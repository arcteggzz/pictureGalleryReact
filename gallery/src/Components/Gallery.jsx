import Image5 from "../images/20200621_101101.jpg"
import Image6 from "../images/20200621_101153.jpg"
import Image7 from "../images/20200621_101204.jpg"
import Image8 from "../images/20200621_101236.jpg"
import Image9 from "../images/20200621_101406.jpg"
import Image10 from "../images/20200625_102124.jpg"

import "../styles/Gallery.css"

const Gallery = ({setDisplayPicture}) => {
    const galleryData = [
        Image5, Image6, Image7, Image8, Image9, Image10,
    ]

    const displayPictureHandler = (e)=>{
        setDisplayPicture(e.target.src)
    }

    return(
        <div className="gallery">
            {galleryData.map((img, index)=>{
                return(
                    <div className="image" key={index}>
                        <img src={img} id={index} alt="" key={index} onClick={(e)=>{displayPictureHandler(e)}}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery;