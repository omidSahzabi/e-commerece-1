import { IProduct } from "../../types/servers"

type TProductProps = {
  product: IProduct;
}


function ProductItem({product}: TProductProps ) {
  const {title , price , image , description} = product
  return (
    <div className="shadow border rounded-2xl pb-2 bg-neutral-900 h-96 w-56 text-white">
        <img className="rounded-2xl px-1 mt-1" src={image} alt="" />
        <div className="flex justify-between flex-row-reverse px-4 mt-2">
            <h3>{title}</h3>
            <span className="text-red">{price}$</span>
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