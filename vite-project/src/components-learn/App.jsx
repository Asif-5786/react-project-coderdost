// import { useState } from 'react'
// import DB from '../data/data.js'
// import Video from './Video.jsx'
// import Addvideo from './Addvideo.jsx'


// const App = () => {
//     const [videos, setVideos] = useState(DB);
//     const [editableVideo, setEditableVideo] = useState(null);


//     const addNewVideo = (newVideo) => {
//         setVideos([...videos, { ...newVideo, id: videos.length + 1 }]);
//     }

//     const deleteVideo = (id) => {
//         const filteredVideos = videos.filter((video) => video.id !== id);
//         setVideos(filteredVideos);
//     }

//     const editVideo = (id) => {
//         setEditableVideo(videos.find(video => video.id === id));
//     }

//     const updateVideo = (video) => {
//         const index = videos.findIndex(v => v.id === video.id);
//         const newVideos = [...videos];
//         newVideos.splice(index, 1, video);
//         setVideos(newVideos);
//     }


//     return (
//         <div className='App-container'>
//             <Addvideo addNewVideo={addNewVideo} editableVideo={editableVideo} updateVideo={updateVideo}></Addvideo>
//             {
//                 videos.map(obj =>
//                     <Video
//                         id={obj.id}
//                         title={obj.title}
//                         channel={obj.channel}
//                         views={obj.views}
//                         time={obj.time}
//                         deleteVideo={deleteVideo}
//                         editVideo={editVideo}
//                     >
//                     </Video>
//                 )
//             }
//         </div>
//     )
// }
// export default App

import { useEffect, useState } from 'react'
import DB from '../data/data.js'
import Video from './Video.jsx'
import Addvideo from './Addvideo.jsx'


const App = () => {
    const [videos, setVideos] = useState(DB);
    const [editableVideo, setEditableVideo] = useState(null);


    const addNewVideo = (newVideo) => {
        setVideos([...videos, { ...newVideo, id: videos.length + 1 }]);
    }

    const deleteVideo = (id) => {
        const filteredVideos = videos.filter((video) => video.id !== id);
        setVideos(filteredVideos);
    }

    const editVideo = (id) => {
        setEditableVideo(videos.find(video => video.id === id));
    }

    const updateVideo = (video) => {
        const index = videos.findIndex(v => v.id === video.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, video);
        setVideos(newVideos);
    }

    useEffect(() => {
        console.log('mount')
    }, [videos])
    return (
        <div className='App-container'>
            <Addvideo addNewVideo={addNewVideo} editableVideo={editableVideo} updateVideo={updateVideo}></Addvideo>
            {
                videos.map((obj, index) =>
                    <Video
                        id={obj.id}
                        title={obj.title}
                        channel={obj.channel}
                        views={obj.views}
                        time={obj.time}
                        deleteVideo={deleteVideo}
                        editVideo={editVideo}
                    >
                    </Video>
                )
            }
        </div>
    )
}

export default App
