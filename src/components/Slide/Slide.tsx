import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProductItem from '../../components/productitem/ProductItem'
import Container from '../../components/container/Container'
import { useEffect, useState } from 'react'
import { getProducts} from "../../services/api"
import { IProduct } from "../../types/servers"
import {Link} from "react-router-dom"
















function Slide() {
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
    <>

     <Swiper
      style={{"--swiper-pagination-color": "rgba(255, 0, 0, 0.9)",
              "--swiper-pagination-bullet-inactive-color": "#000",
              "--swiper-pagination-bullet-inactive-opacity": "0.8",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "4px",
              "--swiper-navigation-color": "rgba(255, 0, 0, 0.952)"
      }}
      // install Swiper modules
      className='m-10'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={4}
      navigation
      pagination={{clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
    
    {filteredProducts.map(product => (
        <SwiperSlide className='w-auto h-auto'>
          <Link to="/store" >
          {product.category == "men" && <ProductItem key={product.id} product={product} />}
          </Link>
        </SwiperSlide>
        ))}
    </Swiper>
    </>
  )
}

export default Slide
