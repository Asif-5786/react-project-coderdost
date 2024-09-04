import { useContext } from "react"
import { GlobalContext } from "../../sangContext"


const ContextButtonComponent = () => {

    // const getSetterFromGlobalContext = useContext(GlobalContext);

    const { updateTheme } = useContext(GlobalContext);


    return <button onClick={updateTheme}>Change Theme</button>
}

export default ContextButtonComponent