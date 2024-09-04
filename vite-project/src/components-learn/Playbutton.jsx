import { useState } from "react";

const Playbutton = ({ children }) => {
    const [playing, setPlaying] = useState(true);
    const handleVideoBtnClick = (e) => {
        e.stopPropagation();
        setPlaying(!playing)
    }
    return (
        <>
            <button onClick={handleVideoBtnClick}>{children} {playing ? '||' : '>'}</button>
        </>
    )
}

export default Playbutton
