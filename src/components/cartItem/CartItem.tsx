import { useEffect, useState } from "react"
import Button from "../button/Button" 
import { getProduct } from "../../services/api"
import { IProduct } from "../../types/servers"
import { useShopingCartContext } from "../../context/ShopingCartContext"
import { Link } from "react-router-dom"
import './CartItem.css'

interface ICartItem{
  id: number
  qty: number
}

function CartItem({id,qty}:ICartItem) {

  const {handleIncreaseProductQty,handleDecreasProductQty ,handleRemoveProduct} = useShopingCartContext()

   const [product , setProduct] = useState<IProduct>()

  useEffect(()=>{
    getProduct(id).then((data)=>{
      setProduct(data)
    })
},[])

  return (
    <div className="bg-stone-900 w-64 flex flex-wrap text-white items-center justify-center rounded-lg mt-2 mx-4" >
      <Link to={`/product/${id}`}>
        <img className="w-60 mt-2 "
        src={product?.image}
         alt="" />
         </Link>

         <div className="flex-wrap">
            <h2 className="text-right">{product?.title}</h2>

            <div className="flex my-5">
            <Button onClick={()=> handleIncreaseProductQty(id)} className="bg-red-600 ml-3 ">+</Button>
            <span className="ml-20 mr-20">{qty}</span>
            <Button onClick={()=> handleDecreasProductQty(id)} className="bg-red-600" >-</Button>
            </div>

            <Button onClick={()=> handleRemoveProduct(id)} className="bg-red-950 w-60 mb-3">انصراف</Button> 
         </div>
         
    </div>
  )
}

export default CartItem