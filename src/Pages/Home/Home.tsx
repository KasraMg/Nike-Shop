import Shoes3d from '../../Components/Shoes3d/Shoes3d'
import { useEffect } from 'react';
import { Virtual, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { SiJordan, SiNike } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardSlider from '../../Components/SliderCard/Card';
import Card from '../../Components/TrendsCard/Card';
import ParticlesComponent from '../../Components/Particles/Particles';
import { getProductsFromServer } from '../../Redux/Slice/Product';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
 
const Home = () => { 
  
  const products = useAppSelector(state => state.product)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getProductsFromServer())
    console.log(products);
    
  }, [])
  

  return (
    <>
      <section className='h-full relative'>
        <Shoes3d />
        <main className='absolute md:relative left-0 top-0 z-[9997]' >
          <div className=' w-[600px] md:!w-full lg:w-[400px] pt-40 bg-[#024742] left-1 md:h-[300px]   h-[100vh] homeShape'>
            <div className='text-white sm:pl-0 pl-8 space-y-6 font-[cursive] relative md:flex justify-center'>
              <SiJordan style={{ transform: ' rotate(185deg)' }} className=' md:hidden text-center absolute lg:left-[180px] left-[279px] text-[6rem] top-[116px] font-[20rem] text-[#fffffff6]' />

              <p className=' sm-x2:!text-[20px] text-7xl md:text-3xl'>Step into </p>
              <p className='sm-x2:!text-[20px] text-9xl md:flex md:text-3xl lg:ml-3 ml-28' id="code"> S<span>t</span> <SiJordan style={{ transform: ' rotate(185deg)' }} className=' sm-x2:mt-2 md:block hidden font-[20rem] text-[#fffffff6]' />   <span className=' sm-x2:ml-5 ml-10 md:ml-1'>   l</span><span>e</span></p>
              <p className='sm-x2:!text-[20px] text-7xl md:text-3xl md:ml-2'>With Nike</p>
            </div>
          </div>
        </main>
        <a href='#gallery' className="scrollDown sm:hidden text-[#10753A] absolute right-1 bottom-32  "> <span className='relative left-3'>scroll down</span>  <img width={'2rem'} className=" absolute z-50 cursor-pointer w-8 top-[-2px]  " src="/images/download-removebg-preview.png" alt="" /></a>
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1370: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className=' px-4 z-[9998] sm-x2:bottom-52 md:!mb-0 relative bottom-16 sm:!w-full lg:w-[88%] md:pb-20  w-[80%]  pb-20   '
      >
        {products.length > 0 && products.slice(0,6).map(data=> (
          <SwiperSlide className='text-center  font-[18px]   flex justify-center items-center'>
            <CardSlider {...data} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='relative'>

        <ParticlesComponent color='#024742' />

        <section className=' mt-32'>
          <div className='flex justify-between lg:mx-10 sm-x2:!mx-5 mx-40'>
            <p className='text-left  font-[cursive] sm-x2:text-[16px] text-[#024742] text-4xl mb-16'>Why choose Nike shoes? </p>
            <SiNike className='text-5xl bg-[#2a6e6a] text-white px-3 py-1 rounded-full' />
          </div>

          <main className='flex flex-wrap lg:mx-10 sm-x2:!mx-5 justify-center gap-12'>
            <div style={{ boxShadow: '12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)' }} className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] rounded-3xl p-8 bg-[#ecf0f3] ">
              <span className='text-center block mx-auto font-bold'>Beauty</span>
              <p className=' text-[13px] mt-8 tracking-tight font-[cursive]'>Nike has tried to make its name synonymous with fashion and beauty, so every pair of Nike sneakers or sneakers can mean a new season in fashion.</p>

            </div>
            <div style={{ boxShadow: '12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)' }} className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] rounded-3xl p-8 bg-[#ecf0f3] ">
              <span className='text-center block mx-auto font-bold'>comfortable</span>
              <p className=' text-[13px] mt-8 tracking-tight font-[cursive]'>Nike is not only a sports brand, but this brand also has the best offers for daily walks and a long working day. Give comfort to your feet.</p>

            </div>
            <div style={{ boxShadow: '12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)' }} className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] rounded-3xl p-8 bg-[#ecf0f3] ">
              <span className='text-center block mx-auto font-bold'>diverse</span>
              <p className=' text-[13px] mt-8 tracking-tight font-[cursive]'>You can use Nike shoes for walking on flat surfaces, climbing, running or specialized sports such as basketball, tennis or volleyball.</p>

            </div>
          </main>

        </section>

        <div className='mt-64'>
          <div className='flex justify-between lg:mx-10 sm-x2:!mx-5 mx-40'>
            <p className='text-left  font-[cursive] sm-x2:text-[19px] text-[#024742] text-4xl mb-16'>Trends </p>
            <SiNike className='text-5xl bg-[#2a6e6a] text-white px-3 py-1 rounded-full' />
          </div>

          <Swiper
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,

            }}
            modules={[Autoplay]}
            rewind={true} className='w-full  sm-x2:block hidden'> 
            {products && products.map(data=>( 
              <SwiperSlide className='overflow-hidden'>
               <Card {...data}/>
            </SwiperSlide>
            ))} 
         

          </Swiper>

          <main className=' sm-x2:hidden grid gap-20 lg:justify-evenly sm:!grid-cols-[auto] lg:grid-cols-[auto,auto] lg:mx-10 sm-x2:!mx-5 grid-cols-[auto,auto,auto] justify-between mx-40'>


            {products && products.map(data=>(
              <Card {...data}/>
            ))} 
          </main>

        </div>

      </div>

      <div className="mt-64 pt-10 bg-[#024742] pb-6 " id='gallery'>
        <div className='flex justify-between sm:flex-wrap  sm:flex-col-reverse sm:justify-center sm:gap-3  lg:mx-10 sm-x2:!mx-5 mx-40'>
          <p className='text-left sm:text-center font-[cursive] text-[#ffffff] sm:text-[1rem] text-4xl mb-16'>Shoes suitable for any type of work </p>
          <SiNike className='text-5xl bg-[#ffffff] text-[#2a6e6a] sm:mx-auto px-3 py-1 rounded-full' />
        </div>


        <Swiper
          modules={[Pagination, Navigation]}
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
          className='z-[9999]  relative slider2  sm:!w-full lg:w-[88%] sm:mt-4   w-[80%] mt-10 pb-32   '
        >

          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/3aef76c8-46c5-4f2a-a18c-3e9bdc148433/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/5027a28c-3984-4287-94d1-ee6198238ce9/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/be13cfe4-b5a9-4c26-bee0-b716e98b099d/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/b4722f0f-c0e4-4a1b-8050-9f026ef947e9/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/5f432ab0-7ed1-48b9-b8c8-9eb3f5dcb63d/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/11550514-c82b-46b2-afd8-e5dd62698371/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/ed6efa3d-bb62-4d41-89f1-49d01418fe49/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/1d2fd0c4-a7dd-4159-84c0-a0364c0990e3/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className=' flex justify-center items-center'  >
            <img className='w-[200px] rounded-full' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/3aef76c8-46c5-4f2a-a18c-3e9bdc148433/nike-offizielle-website.jpg" alt="" />
          </SwiperSlide>



        </Swiper>

      </div>



    </>
  )
}

export default Home
