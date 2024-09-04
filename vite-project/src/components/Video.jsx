
import { useContext } from 'react'
import ThemeContext from '../context/Themecontext'
import './Video.css'
import useVideoDispatch from '../hooks/VideoDispatch';

const Video = ({ title, channel = 'dosti', views, time, verified, id, children, editVideo }) => {
    const theme = useContext(ThemeContext);
    const dispatch = useVideoDispatch();
    return (
        <>
            <div className={`container ${theme}`}>
                <div style={{ position: 'relative' }}>
                    <button className='close' onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
                    <button className='edit' onClick={() => editVideo(id)}>Edit</button>
                </div>
                <div className="pic">
                    <img src={`../../public/papachu.jpeg`} alt="logo" />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel}{verified ? ' tick' : null}</div>
                <div className="views">
                    {views}views. {time}
                </div>
                {children}
            </div>
        </>
    )
}

export default Video

