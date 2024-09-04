import { useContext } from "react"
import { GlobalContext } from "../../sangContext";


const ContextTextComponent = () => {

    // const getStateFromGlobalContext = useContext(GlobalContext);

    // const { theme } = getStateFromGlobalContext;

    const { theme } = useContext(GlobalContext);


    return <h1 style={{ fontSize: theme === 'light' ? '50px' : '100px', backgroundColor: theme === 'light' ? '#f1f2f3' : '#d1d2d3' }}>Syed Asif Rehman</h1>
}

export default ContextTextComponent