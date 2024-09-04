import { useContext } from "react";
import Videodispatchcontext from "../context/Videodispatchcontext";

const useVideoDispatch = () => {
    const dispatch = useContext(Videodispatchcontext);
    return dispatch;
}

export default useVideoDispatch;