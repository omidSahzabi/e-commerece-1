import React from 'react'
import { IProduct } from '../../types/servers'
import { Link } from 'react-router-dom'



type TPromotedProductProps ={
    product : IProduct
}

const PromotedItem:React.FC<TPromotedProductProps>= ({product})=>{
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-neutral-950 text-white text-right  rounded-lg shadow-md' >
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl mb-4 font-bold'>
                    {product.title}
                </h2>
                <p className='text-gray-700 mb-4'>{product.description}</p>
                <div className='flex p-2 items-center justify-center'>
                <p className='text-dark line-through'>${product.oldprice}</p>
                <p className='text-red-700 text-lg font-semibold ml-4'>${product.price}</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img className='rounded-lg max-w-full h-full'
                 src={product.image}
                  alt="" />
            </div>

        </div>
    )
}
export default PromotedItem
