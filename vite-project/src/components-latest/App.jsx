import React, { useState, useReducer, useContext } from 'react'
import './App.css'
import data from '../data/data.js'
import PlayButton from './PlayButton.jsx'
import Videolist from './Videolist.jsx'
import Addvideo from './Addvideo.jsx'
import ThemeContext from '../context/Themecontext.jsx'
import Videodispatchcontext from '../context/Videodispatchcontext.jsx'
import Counter from './Counter.jsx'
import axios from 'axios'
const App = () => {
    console.log('i am app');
    const [editableVideo, setEditableVideo] = useState(null);
    const [mode, setMode] = useState('dark');

    const url = "https://my.api.mockaroo.com/video.json?key=2a12c4d0";
    async function handleClickAPI() {
        const res = await axios.get(url);
        console.log(res.data);
    }

    const videoReducer = (video, action) => {
        switch (action.type) {
            case 'ADD':
                return [...video, { ...action.payload, id: video.length + 1 }]
            case 'DELETE':
                return video.filter((obj) => obj.id !== action.payload);
            case 'UPDATE':
                const index = video.findIndex((obj) => obj.id == action.payload.id);
                const newVideo = [...video];
                newVideo.splice(index, 1, action.payload);
                setEditableVideo(null);
                return newVideo;
            default:
                return video
        }
    }

    const [video, dispatch] = useReducer(videoReducer, data);
    // When dispatch is called with an action(object), the reducer function is executed. The reducer receives the current state and the action object as arguments. It uses the action's type and payload to determine how to update the state.

    // const handleAddVideoBtn = (newVideo) => {
    //     dispatch({ type: 'ADD', payload: newVideo });       //calling dispatch function with action object
    // __________________________________________________________________________________________

    //             setVideo([...video, { ...newVideo, id: video.length + 1 }]);
    // __________________________________________________________________________________________         
    // }

    // const handleDelVideoBtn = (id) => {
    //     dispatch({ type: 'DELETE', payload: id });
    // _________________________________________________________________________________________

    //             setVideo(video.filter((obj) => obj.id !== id));
    // _________________________________________________________________________________________
    // }

    const handleEditVideoBtn = (id) => {
        setEditableVideo(video.find((obj) => obj.id == id));
    }
    // const updateVideo = (editedVideo) => {
    // ____________________________________________________________________________________________________
    // const index = video.findIndex((obj) => obj.id == editedVideo.id);
    // const newVideo = [...video];
    // newVideo.splice(index, 1, editedVideo);
    // setVideo(newVideo);
    // setEditableVideo(null);
    // ____________________________________________________________________________________________________
    //     dispatch({ type: 'UPDATE', payload: editedVideo })
    // }
    return <>
        <ThemeContext.Provider value={mode}>
            <Videodispatchcontext.Provider value={dispatch}>
                <Counter></Counter>
                <button onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>{mode} mode</button>
                <Addvideo
                    // dispatch={dispatch}
                    editableVideo={editableVideo}>
                </Addvideo>
                <div className={`container ${mode}`} >
                    {
                        video.map((video, index) => {
                            return (
                                <>
                                    <Videolist
                                        id={video.id}
                                        img={video.image}
                                        title={video.title}
                                        channel={video.channel}
                                        time={video.time}
                                        verified={video.verified}
                                        views={video.views}
                                        // dispatch={dispatch}
                                        handleEditVideoBtn={handleEditVideoBtn}
                                    >
                                        <PlayButton
                                            key={index}
                                        ></PlayButton>
                                    </Videolist>
                                </>
                            )
                        }
                        )
                    }
                    <button onClick={handleClickAPI}>Get Video</button>
                </div >
            </Videodispatchcontext.Provider>
        </ThemeContext.Provider >
    </>
}

export default App
