import React from 'react'
import { FaCartArrowDown, FaEye } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";


function Product({ id, title, images, price }) {
    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6">
            <div className='product'>
                <img src={images[0]} alt={title} />
                <p className='title' title={title}>{title}</p>
                <p className='price'>{price} AZN</p>
                <div className="controls">
                    <FaCartArrowDown />
                    <MdFavoriteBorder />
                    <FaEye />
                </div>
            </div>
        </div>
    )
}

export default Product