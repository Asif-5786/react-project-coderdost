import React, { useContext, useEffect } from 'react'
import Videodispatchcontext from '../context/Videodispatchcontext';

const Videolist = ({ img, title, channel, time, verified, views, children, id, handleEditVideoBtn }) => {

    console.log('i am video');
    // const handleDelete = (id) => {
    //     handleDelVideoBtn(id);
    // }


    const dispatch = useContext(Videodispatchcontext);

    const handleEdit = (id) => {
        handleEditVideoBtn(id);
    }

    useEffect(() => {
        console.log('i am useeffect of videolist')
        const idx = setInterval(() => {
            // console.log('video playing', id)
        }, 1000)
        return () => {
            clearInterval(idx);
        }
    }, [id])
    return (
        <>
            <div className='video-details'>
                <img src={img} alt="" />
                <small>{title}</small>
                <small style={{ marginLeft: '65px' }}>{channel}</small>
                <p>{time}</p>
                <small style={{ verticalAlign: 'middle' }}>{
                    verified ?
                        <svg width="21" height="31" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="35.5" cy="35.5" r="35.5" fill="#D2CAC9" />
                            <path d="M50.1698 17.0402L29.349 42.5298L17.0394 31.1077L11.3594 36.382L30.2898 53.9602L56.7994 22.3144L50.1698 17.0402Z" fill="white" />
                        </svg> : ''
                }
                </small>
                <small style={{ marginLeft: '10px' }}>{views}views</small>
                <button className='close' onClick={() => dispatch({ type: 'DELETE', payload: id })}>X</button>
                <button className='edit' onClick={() => handleEdit(id)}>EDIT</button>
                {children}
            </div >
        </>
    )
}

export default Videolist
