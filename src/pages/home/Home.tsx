import './Home.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import ProductItem from '../../components/productitem/ProductItem'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProducts } from "../../services/api"
import { IProduct } from "../../types/servers"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result)=>{
      setProducts(result)
    })

  }, [])
  return (
    <>
    {/* // hero starts */}
    <Swiper
      style={{"--swiper-pagination-color": "rgba(255, 0, 0, 0.952)",
              "--swiper-pagination-bullet-inactive-color": "#000",
              "--swiper-pagination-bullet-inactive-opacity": "0.8",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "4px",
              "--swiper-navigation-color": "rgba(255, 0, 0, 0.952)"
      }}
      // install Swiper modules
      className='hero'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='hero-parent'>
        <img 
        src="https://dailytrust.com/wp-content/uploads/2021/10/custom-tailoring.jpeg"
         alt="" 
         />
         <span className='hero-child text-right'>خیاطی</span>
         <span className='hero-child-2 text-right btn-danger-'>یاد بگیر</span>
         <span className='hero-child-3 text-right btn-danger-'>!</span>

        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='hero-parent'>
        <img 
        src="https://www.hijabfashioninspiration.com/wp-content/uploads/2020/06/summer-dresses.jpg"
         alt="" 
         />
         </div>
      </SwiperSlide>
    </Swiper>
    {/* // hero ends */}

    {/* // short story starts */}
    <div className='short-story'>
      <h1 className='text-right'>چرا مزون شیک پیک <span className='short-story-red text-right'>بهترین</span> انتخاب است؟</h1>
     <p className='text-right'>
     لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

     </p>
     <button className='text-left btn-danger'>جدید ترین دوره ها</button>
    </div>
    {/* // short story neds */}

    {/* newest cards start */}
    {/* newest cards ends */}
    </>
  );
}

export default Home
