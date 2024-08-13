import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import { getProduct } from '../../services/api'
import { IProduct } from '../../types/servers'
import { useShopingCartContext } from '../../context/ShopingCartContext'

function Product() {

    const params = useParams<{id: string}>()
    const [productData , setProductData ] = useState<IProduct>()

    const {handleIncreaseProductQty,cartItems,
        handleDecreasProductQty,getProductQty,handleRemoveProduct} = useShopingCartContext()

    useEffect(()=>{
        getProduct(params.id as string).then((data)=>{
            setProductData(data)
        })
    },[])


    console.log(cartItems)
    
  return (
    <div>
        <Container>
            <div className="h-96 shadow mt-4 grid grid-cols-12 text-right">
                <div className=' col-span-10 text-right'>
                    <h1>{productData?.title}</h1>
                    <div className='p-4'>
                        <p>{productData?.price}</p>
                        <p>
                            {productData?.description}
                        </p>
                    </div>
                </div>   
                <div className='col-span-2 p-4 bg-sky-200'>
                    <img 
                    className='rounded'
                    src={productData?.image}
                     alt="" />

                     {
                        getProductQty(parseInt(params.id as string)) === 0 ? 

                    <Button onClick={()=> handleIncreaseProductQty(parseInt(params.id as string))}
                      className="mt-2 w-full" variant='primary'>
                            خرید  
                     </Button>

                      :
                      <div>
                      <div className='grid grid-cols-3'>

                        <Button onClick={()=> handleIncreaseProductQty(parseInt(params.id as string))}
                         className="mt-2 w-full" variant='primary'>
                            اضافه کردن
                        </Button>

                        <span className='flex justify-center items-center'>{getProductQty(parseInt(params.id as string))}</span>

                        <Button onClick={()=> handleDecreasProductQty(parseInt(params.id as string))}
                        className="mt-2 w-full" variant='primary'>
                        کم کردن 
                        </Button>
                      </div>

                    <Button onClick={()=> handleRemoveProduct(parseInt(params.id as string))}
                    className="mt-2 w-full" variant='danger'>
                    حذف از سبد
                    </Button>
                    </div>
                     }

                     

                </div> 
            </div>
        </Container>
    </div>
  )
}

export default Product