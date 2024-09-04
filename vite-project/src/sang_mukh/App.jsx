import { useState } from "react";
import Products from "./Products/index"
import Index from './users/index'
import ContextButtonComponent from "./context-concepts/button";
import ContextTextComponent from "./context-concepts/text";
import UseReducerExample from "./usereducer-example";

// const dummyProductsData = ["Product 1", "Product 2", "Product 3"];

const App = () => {
    // const [x, setX] = useState(true);
    // const handleComponent = () => {
    //     setX(prev => !prev);
    // }
    return (
        <>
            <h1>React JS concepts 2024</h1>
            {/* <button onClick={handleComponent}>Toggle Component</button>
            <h1>React JS concepts 2024</h1>
            {x && <Products name='sar' city='Hyderabad' listOfProducts={dummyProductsData} />} */}
            {/* <Index></Index> */}
            {/* <ContextButtonComponent />
            <ContextTextComponent /> */}
            <UseReducerExample></UseReducerExample>
        </>
    )
}

export default App
