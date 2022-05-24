import "../styles/Screen.css"

const Screen = ({displayPicture})=>{
    return(
        <div className="screen">
            <img src={displayPicture} alt="" />
        </div>
    )
}

export default Screen;