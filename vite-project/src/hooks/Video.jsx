import { useContext } from "react";
import Videoscontext from "../context/Videoscontext";

const useVideos = () => {
    const videos = useContext(Videoscontext);
    return videos;
}

export default useVideos;