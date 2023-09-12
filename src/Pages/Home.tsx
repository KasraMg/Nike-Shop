import Shoes3d from '../Shoes3d'
import { useState } from 'react';
import { Virtual, Pagination, Navigation } from 'swiper/modules';
import { SiJordan } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardSlider from '../Components/SliderCard/Card';
const Home = () => {
  const [sliderData, setSliderData] = useState(
    [
      {
        id: 10626850,
        bg: 'red',
        title_fa: "Air.jordan.koo.me  ",
        status: "marketable",
        image: "/a3a62194837f1ba391316da6ae1de5d6a48d275f_1675779303-removebg-preview.png",
        price: {
          current_price: 150,
          prev_price: 180,
          is_off: true,
        },
        star:4,
        colors: 4
      },
      {
        id: 10626850,
        bg: 'red',
        title_fa: "Air.jordan.koo.me  ",
        status: "marketable",
        image: "/a3a62194837f1ba391316da6ae1de5d6a48d275f_1675779303-removebg-preview.png",
        price: {
          current_price: 120,
          prev_price: 180,
          is_off: true,
        },
        colors: 4,
         star:3,
      },
      {
        id: 10626850,
        bg: 'orange',
        title_fa: "Air.jordan.koo.me  ",
        status: "marketable",
        image: "/a3a62194837f1ba391316da6ae1de5d6a48d275f_1675779303-removebg-preview.png",
        price: {
          current_price: 150,
          prev_price: 180,
          is_off: true,
        },
        colors: 4,
         star:2,
      },
      {
        id: 10626850,
        bg: 'orange',
        title_fa: "Air.jordan.koo.me  ",
        status: "marketable",
        image: "/a3a62194837f1ba391316da6ae1de5d6a48d275f_1675779303-removebg-preview.png",
        price: {
          current_price: 120,
          prev_price: 180,
          is_off: true,
        },
        colors: 4,
         star:3,
      },
      {
        id: 10626850,
        bg: 'blue',
        title_fa: "Air.jordan.koo.me  ",
        status: "marketable",
        image: "/a3a62194837f1ba391316da6ae1de5d6a48d275f_1675779303-removebg-preview.png",
        price: {
          current_price: 150,
          prev_price: 180,
          is_off: true,
        },
        colors: 4,
         star:3,
      },
      {
        id: 10626850,
        bg: 'blue',
        title_fa: "Air.jordan.koo.me  ",
        status: "marketable",
        image: "/a3a62194837f1ba391316da6ae1de5d6a48d275f_1675779303-removebg-preview.png",
        price: {
          current_price: 120,
          prev_price: 180,
          is_off: true,
        },
        colors: 4,
         star:3,
      },

    ]
  );


  return (
    <>
      <section className='h-full relative'>
        <Shoes3d />
        <main className='absolute left-0 top-0'>
          <div className='w-[600px] pt-40 bg-[#024742] left-1 h-[100vh] homeShape'>
            <div className='text-white pl-8 space-y-6 font-[cursive] relative'>
              <SiJordan style={{  transform:' rotate(185deg)'}} className=' absolute left-[279px] text-[6rem] top-[116px] font-[20rem] text-[#fffffff6]'/> 
 
  
              <p className='text-7xl'>Step into </p>
              <p className='text-9xl ml-28' id="code"> S<span>t</span>    <span className='ml-10'>   l</span><span>e</span></p>
              <p className='text-7xl'>With Nike</p>
            </div> 
          </div> 
        </main>
        <p className="scrollDown text-[#10753A] absolute right-1 bottom-32  "> <span className='relative left-3'>scroll down</span>  <img width={'2rem'} className=" absolute z-50 cursor-pointer w-8 top-[-2px]  " src="/images/download-removebg-preview.png" alt="" /></p>
      </section>

      <Swiper
        modules={[Virtual, Pagination, Navigation]}
        slidesPerView={4}
        rewind={true}
        spaceBetween={30}
        navigation={true}
        className=' relative bottom-20  w-[80%]  pb-60  !mb-40'
      >
        {sliderData.map((data, index) => (
          <SwiperSlide className='text-center  font-[18px]   flex justify-center items-center' virtualIndex={index}>
            <CardSlider {...data} />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  )
}

export default Home
