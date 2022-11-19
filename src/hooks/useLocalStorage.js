
import { useState } from 'react';
const useLocalStorage = () => {
    const [cartProducts, setCartProducts] = useState([])
    const getProducts = JSON.parse(localStorage.getItem('product'))
    setCartProducts(getProducts)


    return [cartProducts, setCartProducts]
}


export default useLocalStorage;