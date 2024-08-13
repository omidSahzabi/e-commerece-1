import { IProduct } from "../../types/servers"

type TProducItem = IProduct


function ProductItem({title,price,description,image}: TProducItem ) {
  return (
    <div className="shadow border rounded pb-2">
        <img className="rounded-t" src={image} alt="" />
        <div className="flex justify-between flex-row-reverse px-4 mt-2">
            <h3>{title}</h3>
            <span>{price}$</span>
        </div>
        <div className="px-4 mt-1">
            <p className="text-right line-clamp-2">
              {description}
            </p>
        </div>
    </div>
  )
}

export default ProductItem