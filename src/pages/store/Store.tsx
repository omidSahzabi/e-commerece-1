import ProductItem from '../../components/productitem/ProductItem'
import Container from '../../components/container/Container'
import { useEffect, useState } from 'react'
import { getProducts} from "../../services/api"
import { IProduct } from "../../types/servers"
import {Link} from "react-router-dom"
import './Store.css'


function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts , setFilteredProducts] = useState<IProduct[]>([])
  const [category , setCategory ] = useState<string>('all')

  useEffect( () => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data)
    }
    fetchData()
  },[])

  useEffect(()=>{
    if(category === 'all'){
      setFilteredProducts(products)
    }else{
      setFilteredProducts(products.filter(
        product => product.category === category
      ))
    }
  },[ category, products])

  const handleCategoryChange=(newCategory:string) => {
    setCategory(newCategory)
  }
  
  console.log(products)

  return (
    <div>
      <Container>
      <div className='flex flex-row-reverse  justify-between mt-2'>
      <h1 className='text-right mt-5 title flex '>جدید ترین محصولات</h1>
      <div className='flex text-center'>
      <button className='category-btn' onClick={()=> handleCategoryChange('all')}>همه</button>
      <button className='category-btn' onClick={()=> handleCategoryChange('men')}>الگو</button>
      <button className='category-btn' onClick={()=> handleCategoryChange('women')}>دوره</button>
      </div>
      </div>
      <div className='grid grid-cols-4 gap-4 mt-4 products-desck'>
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`} >
          <ProductItem key={product.id} product={product} />
          </Link>
        ))}
      </div>
      </Container>
    </div>
  )
}

export default Store