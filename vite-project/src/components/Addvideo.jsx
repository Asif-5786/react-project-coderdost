
import { useEffect, useState, useRef } from 'react'
import './Addvideo.css'
import useVideoDispatch from '../hooks/VideoDispatch';

let initialValue = {
    time: '3 month ago',
    channel: 'coder dost',
    verified: false,
    title: '',
    views: ''
};
console.log('before add video');
const Addvideo = ({ editableVideo }) => {
    const [video, setVideo] = useState({
        time: '3 month ago',
        channel: 'coder dost',
        verified: false,
        title: '',
        views: ''
    })
    const dispatch = useVideoDispatch();
    const inputRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (editableVideo) {
            dispatch({ type: 'UPDATE', payload: video })
        }
        else {
            dispatch({ type: 'ADD', payload: video })
        }

        setVideo(initialValue);

    }
    const handleChange = (e) => {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }
    console.log('outside use effect');
    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo);
        }
        inputRef.current.placeholder = '';
        "Type Here".split('').forEach((char, i) => {
            setTimeout(() => {
                inputRef.current.placeholder += char;
            }, 300 * i)
        })
        inputRef.current.focus();
    }, [editableVideo]);
    console.log('add video before return');
    return (
        <form>
            <input type="text" placeholder='Title' onChange={handleChange} name='title' value={video.title} ref={inputRef} />
            <input type="text" placeholder='Views' onChange={handleChange} name='views' value={video.views} />
            <button onClick={handleSubmit}>{editableVideo ? 'Edit' : 'Add'} Video</button>
        </form>
    )
}

export default Addvideo
