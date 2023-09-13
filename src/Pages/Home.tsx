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
        <main className='absolute md:relative left-0 top-0'>
          <div className='w-[600px] md:!w-full lg:w-[400px] pt-40 bg-[#024742] left-1 md:h-[300px]   h-[100vh] homeShape'>
            <div className='text-white sm:pl-0 pl-8 space-y-6 font-[cursive] relative md:flex justify-center'>
              <SiJordan style={{  transform:' rotate(185deg)'}} className=' md:hidden text-center absolute lg:left-[180px] left-[279px] text-[6rem] top-[116px] font-[20rem] text-[#fffffff6]'/> 
  
              <p className=' sm-x2:!text-[20px] text-7xl md:text-3xl'>Step into </p>
              <p className='sm-x2:!text-[20px] text-9xl md:flex md:text-3xl lg:ml-3 ml-28' id="code"> S<span>t</span> <SiJordan style={{  transform:' rotate(185deg)'}} className=' sm-x2:mt-2 md:block hidden font-[20rem] text-[#fffffff6]' />   <span className=' sm-x2:ml-5 ml-10 md:ml-1'>   l</span><span>e</span></p>
              <p className='sm-x2:!text-[20px] text-7xl md:text-3xl md:ml-2'>With Nike</p>
            </div> 
          </div> 
        </main>
        <p className="scrollDown sm:hidden text-[#10753A] absolute right-1 bottom-32  "> <span className='relative left-3'>scroll down</span>  <img width={'2rem'} className=" absolute z-50 cursor-pointer w-8 top-[-2px]  " src="/images/download-removebg-preview.png" alt="" /></p>
      </section>

      <Swiper
        modules={[Virtual, Pagination, Navigation]}
        
        rewind={true}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className=' sm-x2:bottom-52 md:!mb-0 relative bottom-16 sm:!w-full lg:w-[88%] md:pb-20  w-[80%]  pb-60  !mb-40'
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
