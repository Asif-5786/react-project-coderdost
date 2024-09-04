import { useEffect } from "react";
import Playbutton from "./Playbutton"

const Video = ({ title, channel, views, time, id, deleteVideo, editVideo }) => {

    const handleDelClick = (id) => {
        deleteVideo(id);
    }
    const handleEditVideo = (id) => {
        editVideo(id);
    }
    useEffect(() => {
        console.log('video playing ', id);
    }, [id])
    return (
        <>
            <div className='video'>
                <div className='videobtn'>
                    <button onClick={() => handleDelClick(id)}>X</button>
                    <button onClick={() => handleEditVideo(id)}>Edit</button>
                </div>
                <div className='pic'>
                    <img src="../../public/hero_img.png" alt="logo" />
                </div>
                <div className='details'>
                    <div>{title}</div>
                    <div>{channel}</div>
                    <div><span>{views}views</span> {time}</div>
                </div>
                <Playbutton>{title}</Playbutton>
            </div>
        </>
    )
}

export default Video
