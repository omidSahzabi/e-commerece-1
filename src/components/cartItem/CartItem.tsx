import { useEffect, useState } from "react"
import Button from "../button/Button" 
import { getProduct } from "../../services/api"
import { IProduct } from "../../types/servers"
import { useShopingCartContext } from "../../context/ShopingCartContext"
import { Link } from "react-router-dom"

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
    <div className="flex flex-row-reverse mt-4 ">
      <Link to={`/product/${id}`}>
        <img className="rounded w-28"
        src={product?.image}
         alt="" />
         </Link>

         <div className="mr-4">
            <h2 className="text-right">{product?.title}</h2>
            <div className="mt-2">
            <Button onClick={()=> handleRemoveProduct(id)} variant="danger">REMOVE</Button> 
            <Button onClick={()=> handleIncreaseProductQty(id)} variant="primary">+</Button>
            <span className="mx-2">{qty}</span>
            <Button onClick={()=> handleDecreasProductQty(id)} variant="primary">-</Button>
            </div>
         </div>
         
    </div>
  )
}

export default CartItem