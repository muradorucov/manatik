import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../product'

function Products() {
    let products_api = import.meta.env.VITE_PHONES_API
    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        axios(products_api).then(res => setProductsData(res.data))
    }, [])

    return (
        <div className='row'>
            {
                productsData.map(item => <Product product={item} key={item.id} />)
            }
        </div>
    )
}

export default Products