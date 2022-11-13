import { useEffect, useState } from "react"

const useSignlnProduct = (id) => {
    const [productDetails, setProductDetails] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/template/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [id])
    return { productDetails }
}


export default useSignlnProduct

