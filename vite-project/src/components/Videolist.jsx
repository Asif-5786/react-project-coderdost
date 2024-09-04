
import Playbutton from './Playbutton'
import Video from './Video'
import useVideos from '../hooks/Video'
const Videolist = ({ editVideo }) => {
    const url = 'https://my.api.mockaroo.com/video.json?key=2a12c4do'
    const videos = useVideos();
    const handleClick = () => {

    }
    return (
        <>
            {videos.map(video => <Video
                id={video.id}
                title={video.title}
                channel={video.channel}
                views={video.views}
                time={video.time}
                verified={video.verified}
                editVideo={editVideo}
            >
                <Playbutton
                    onPlay={() => { console.log('playing...', video.title) }}
                    onPause={() => { console.log('paused...', video.title) }}>
                    {video.title}
                </Playbutton>
            </Video>
            )
            }
            <button onclick={handleClick}>Get Video</button>
        </>
    )
}

export default Videolist
