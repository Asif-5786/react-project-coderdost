
import { useState, useContext } from 'react';
import './playbutton.css'
import ThemeContext from '../context/Themecontext';

const Playbutton = ({ children, onPlay, onPause }) => {
    // let playing = false;            //dont use this approach
    const [playing, setPlaying] = useState(false);

    const theme = useContext(ThemeContext);

    const handleClick = (e) => {
        e.stopPropagation();
        if (playing) {
            onPause();
        }
        else {
            onPlay();
        }
        setPlaying(!playing);
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <button className={theme} onClick={handleClick}>{children}:{playing ? '||' : '>'}</button>
        </div>
    )
}

export default Playbutton
