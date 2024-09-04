//{
// import ProductItem from "./Component/Product-item";
// import './style.css'

// const Products = ({ name, city, listOfProducts }) => {

//     const flag = true;

//     const renderBlockText = (getFlag) => {
//         return (
//             getFlag ? (<h4>Name is {name} lives in {city}</h4>) : (<h4>Hello World</h4>)
//         )
//     }
//     let result = flag ? <p>Congratulations! your loan is approved</p> : <p>Sorry! Your loan is rejected</p>
//     return (
//         <>
//             <h3 className="title">E-Commerce Website</h3>
//             {renderBlockText(flag)}{result}
//             <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
//                 {/* {listOfProducts.map((item, index) => <li key={index}>{item}</li>)} */}
//                 {listOfProducts.map((product, index) => {
//                     return (
//                         <ProductItem key={index} item={product} />
//                     )
//                 })}
//             </ul>
//         </>
//     )
// }

// export default Products
//}
// __________________________________________________________________________________________________________

import { useEffect, useState } from "react";
import ProductItem from "./Component/Product-item";
import './style.css'

const initialState = false;

const Products = ({ name, city, listOfProducts }) => {

    console.log('i am product list page');

    const [flag, setFlag] = useState(initialState);

    const [count, setCount] = useState(0);

    const [changeStyle, setChangleStyle] = useState(false);
    console.log(changeStyle);

    const renderBlockText = (getFlag) => {
        return (
            getFlag ? (<h4>Name is {name} lives in {city}</h4>) : (<h4>Hello World</h4>)
        )
    }
    let result = flag ? <p>Congratulations! your loan is approved</p> : <p>Sorry! Your loan is rejected</p>

    const handleToggleText = () => {
        setFlag(c => !c);
    }

    const handleIncreaseCount = () => {
        setCount(c => c + 1);
    }

    useEffect(() => {
        setFlag(c => !c);
        return () => {
            console.log('component is unmounted')
        }
    }, []);

    useEffect(() => {
        console.log('count changes');
        if (count === 10) {
            setChangleStyle(c => !c);
        }
    }, [count])

    return (
        <>
            <h3 className="title">E-Commerce Website</h3>
            <button onClick={handleToggleText}>ToggleText</button>
            {renderBlockText(flag)}{result}
            <div>
                <p>Count is {count}</p>
                <button style={{ backgroundColor: changeStyle ? "red" : "blue", padding: '5px 10px' }} onClick={handleIncreaseCount}>Increase Count</button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {/* {listOfProducts.map((item, index) => <li key={index}>{item}</li>)} */}
                {listOfProducts.map((product, index) => {
                    return (
                        <ProductItem key={index} productID={index} item={product} />
                    )
                })}
            </ul>
        </>
    )
}

export default Products
