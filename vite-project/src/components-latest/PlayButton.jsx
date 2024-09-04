import React, { useState } from 'react'

const PlayButton = () => {
    const [value, setValue] = useState(true);

    const handlePlaybtnClick = () => {
        setValue(!value);
    }
    return (
        <>
            <button style={{ width: '100%' }} onClick={handlePlaybtnClick}>{value ? 'playing ||' : 'Paused >'}</button>
        </>
    )
}

export default PlayButton
