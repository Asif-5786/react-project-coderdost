import React, { useContext, useEffect, useRef, useState } from 'react'
import Videodispatchcontext from '../context/Videodispatchcontext';

const Addvideo = (
    { // dispatch,
        editableVideo
    }
) => {
    console.log('i am add video')
    const [addVideo, setAddVideo] = useState(
        {
            title: '',
            channel: '',
            time: '4 months ago',
            views: '1M',
            verified: true,
            image: 'bhai.jpeg'
        }
    )
    const inputRef = useRef(null);

    const dispatch = useContext(Videodispatchcontext);

    const handleInputChange = (e) => {
        setAddVideo({ ...addVideo, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editableVideo) {
            dispatch({ type: 'UPDATE', payload: addVideo })
        }
        else {
            dispatch({ type: 'ADD', payload: addVideo });
        }
        setAddVideo({
            title: '',
            channel: '',
            time: '2 months ago',
            views: '1M',
            verified: true,
            image: 'papachu.jpg'
        })
    }

    useEffect(() => {
        console.log('i am useeffect of add video component');
        if (editableVideo) {
            setAddVideo(editableVideo);
        }
        inputRef.current.focus();
        "Type here".split('').forEach((char, i) => {
            setTimeout(() => {
                inputRef.current.placeholder += char;
            }, 1000 * i)
        })
    }, [editableVideo])

    return (
        <div style={{ textAlign: 'center' }}>
            <form action="">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" ref={inputRef} value={addVideo.title} onChange={handleInputChange} name='title' />
                <label htmlFor="channel">Channel:</label>
                <input type="text" id='channel' value={addVideo.channel} onChange={handleInputChange} name='channel' /><br />
                <button className='add' onClick={handleSubmit}>Add Video</button>
            </form>
        </div>
    )
}

export default Addvideo
