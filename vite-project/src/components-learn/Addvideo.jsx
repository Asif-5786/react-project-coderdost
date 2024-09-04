import { useEffect, useState } from "react";


const Addvideo = ({ addNewVideo, editableVideo, updateVideo }) => {

    let initialValue = {
        title: '',
        views: '',
        channel: '',
        time: '',
    }
    const [newVideo, setNewVideo] = useState({
        title: '',
        views: '',
        channel: '',
        time: '',
    })

    const handleFormChange = (e) => {
        setNewVideo({
            ...newVideo,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (editableVideo) {
            updateVideo(newVideo);
        }
        else {
            addNewVideo(newVideo);
        }
        setNewVideo(initialValue);
    }


    useEffect(() => {
        if (editableVideo) {
            setNewVideo(editableVideo);
        }
    }, [editableVideo])
    return (
        <div className="Addvideocomp">
            <form>
                <h4>Enter the fields given below</h4>
                <input type="text" placeholder="Title" onChange={handleFormChange} name='title' value={newVideo.title} />
                <input type="text" placeholder="Views" onChange={handleFormChange} name='views' value={newVideo.views} />
                <input type="text" placeholder="channel" onChange={handleFormChange} name='channel' value={newVideo.channel} />
                <input type="text" placeholder="time" onChange={handleFormChange} name='time' value={newVideo.time} />
                <button onClick={handleFormSubmit}>Add video</button>
            </form>
        </div>
    )
}

export default Addvideo
