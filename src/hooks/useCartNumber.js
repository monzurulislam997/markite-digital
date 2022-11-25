
import { useState } from 'react';
import { useEffect } from 'react';
const useCartNumber = () => {
    const [cartProductNumber, setCartProductNumber] = useState([])

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem('product'))
        setCartProductNumber(product)

    }, [])

    return [cartProductNumber, setCartProductNumber]

}

export default useCartNumber;