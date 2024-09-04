
import styles from './product-item.module.css';

const ButtonComponent = () => {
    console.log('i am rendered')
    return <button className={styles.buttonStyle}>Click</button>
}

const ProductItem = ({ item, productID }) => {
    return (
        <>
            <li key={productID} style={{ padding: "20px", border: "1px solid black" }}>
                <p className={styles.productTitle}>{item}</p>
                <ButtonComponent />

            </li>

        </>
    )
}

export default ProductItem
