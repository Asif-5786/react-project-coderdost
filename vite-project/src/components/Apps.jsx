
import videoDB from '../data/data.js'
import { useReducer, useState } from 'react'
import Addvideo from './Addvideo'
import Videolist from './Videolist.jsx'
import ThemeContext from '../context/Themecontext.jsx'
import Videoscontext from '../context/Videoscontext.jsx'
import Videodispatchcontext from '../context/Videodispatchcontext.jsx'
import Counter from './Counter.jsx';
const Apps = () => {

    const [editableVideo, setEditableVideo] = useState(null);
    const [mode, setMode] = useState('lightMode');
    const videoReducer = (videos, action) => {              //videoReducer returns state
        switch (action.type) {
            case 'ADD':
                return [...videos, { ...action.payload, id: videos.length + 1 }]
            case 'DELETE':
                return videos.filter((video) => video.id !== action.payload);
            case 'UPDATE':
                const index = videos.findIndex(v => v.id === action.payload.id);
                const newVideos = [...videos]
                newVideos.splice(index, 1, action.payload);
                setEditableVideo(null);
                return newVideos;
            default:
                return videos
        }
    }

    const [videos, dispatch] = useReducer(videoReducer, videoDB);          //VIDEOS IS AN ARRAY OF OBJECTS


    const editVideo = (id) => {
        setEditableVideo(videos.find(video => video.id == id))
    }

    return (
        <ThemeContext.Provider value={mode}>
            <Videoscontext.Provider value={videos}>
                <Videodispatchcontext.Provider value={dispatch}>
                    <div className={`App ${mode}`}>
                        <Counter></Counter>
                        <button onClick={() => setMode(mode == 'darkMode' ? 'lightMode' : 'darkMode')}>Toggle mode</button>
                        <Addvideo editableVideo={editableVideo}></Addvideo>
                        <Videolist editVideo={editVideo} ></Videolist>
                    </div>
                </Videodispatchcontext.Provider>
            </Videoscontext.Provider>
        </ThemeContext.Provider>
    )
}

export default Apps










































{/* <div className='button_container'>
                <Playbutton message='play-msg' onPlay={() => { console.log('play') }} onPause={() => { console.log('pause') }}>Play</Playbutton> */}
{/* <Playbutton message='pause-msg' onClick={() => { console.log('pauseeee') }}>Pause</Playbutton> */ }
{/* </div> */ }