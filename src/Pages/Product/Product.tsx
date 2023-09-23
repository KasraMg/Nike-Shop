import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { product as ProductType } from '../../Types/Cart.types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { SiJordan } from 'react-icons/si'
import ParticlesComponent from '../../Components/Particles/Particles';

const Product = () => {
    const [productInfo, setProductInfo] = useState<ProductType>()
    const param = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/products?id=${param.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProductInfo(data[0])
            })
    }, [])

    return (
        <div style={{ boxShadow: ' 0px 15px 50px 10px rgba(0, 0, 0, 0.4' }} className="card md:mt-0 mt-12 bg-[#024742] items-center h-full w-full m-auto md:h-[unset] productPage">

            <main className=' relative mx-auto md:mt-0 md:pt-20 w-max pt-28 mt-8 md:w-full  z-[9999]'>
                {productInfo && (
                    <>
                        <div style={{ background: `linear-gradient(135deg, ${productInfo.bg} 8%, #2a6e6a 83%)`, content: '', borderRadius: ' 0% 50% 50% 0%' }} className="h-[500px] sm:h-[300px] md:w-full md:!rounded-none md:relative w-[400px] flex items-center absolute z-[5] bg-[#ff6d39] mr-[93px]">

                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                rewind={true}
                                modules={[Pagination]}
                                className="mySwiper sm:pb-4 md:!w-full lg:w-[416px] w-[500px] md:relative md:bottom-0 absolute bottom-24"
                            >
                                <SwiperSlide className=' product-Slide  lg:pl-3'>  <img src={productInfo.image} className='-ml-[65px] w-[576px]  lg:w-[490px] md:!w-[100%]     md:mx-auto mt-[60px] md:mt-0' alt="shoe" /></SwiperSlide>
                                <SwiperSlide className=' product-Slide  lg:pl-3'>  <img src={productInfo.image2} className='-ml-[65px] w-[576px]  lg:w-[490px] md:!w-[100%]     md:mx-auto mt-[60px] md:mt-0' alt="shoe" /></SwiperSlide>
                                <SwiperSlide className=' product-Slide  lg:pl-3'>  <img src={productInfo.image3} className='-ml-[65px] w-[576px]  lg:w-[490px] md:!w-[100%]     md:mx-auto mt-[60px] md:mt-0' alt="shoe" /></SwiperSlide>

                            </Swiper>
                        </div>
                        <div style={{ content: '' }} className="h-[500px] relative sm-x2:!h-full bg-[#ffffff] lg:w-[700px] md:!w-full md:ml-0 w-[800px] z-[3] ml-[200px] content">
                            <div className=" absolute md:relative sm-x2:!h-full sm-x2:pb-10 md:right-0 sm-x2:!px-4 md:px-8 md:w-full top-1 right-[64px] h-[500px]   w-[400px] z-10">
                                <div className="flex justify-between pt-5">
                                    <h1 className='text-[#024742] font-[cursive] text-3xl'>Nike</h1>
                                    <SiJordan className='text-[#024742] relative md:left-0 left-8 text-2xl cursor-pointer' />
                                </div>

                                <div className=" font-[cursive] uppercase ">
                                    <h3 className='mt-16'>disiend by {productInfo.Designed_by}</h3>
                                    <p className='my-4 sm-x2:whitespace-break-spaces text-3xl whitespace-nowrap'>{productInfo.title}</p>

                                    <section className='flex justify-between sm-x2:flex-col sm-x2:gap-5'>

                                        <div className='flex gap-5'>
                                            <h4> ${productInfo.price.current_price}</h4>
                                            {productInfo.price.prev_price &&
                                                <h4 className=' line-through'>${productInfo.price.prev_price}</h4>}
                                        </div>

                                        <div className='flex gap-2'>
                                            {Array(productInfo.star)
                                                .fill(0)
                                                .map(() => <AiFillStar className='text-[orange]' />
                                                )}
                                            {Array(5 - productInfo.star)
                                                .fill(0)
                                                .map(() => <AiOutlineStar className='text-[orange]' />
                                                )}
                                        </div>

                                    </section>

                                </div>
                                <div className='flex sm-x2:mt-5  gap-9 justify-between my-3'>
                                    <p>SIZE</p>
                                    <ul className='flex gap-2'>
                                        {productInfo.size.map(data => (
                                            <li className='text-[14px]'>{data}</li>
                                        ))}
                                    </ul>
                                </div>

                                <p className='mt-4 text-[#7d7777]'>{productInfo.description}</p>

                                <button className='bg-[#024742] mt-14 w-full rounded-lg py-2 text-white'>Add To Cart</button>
                            </div>
                        </div>

                    </>
                )}

            </main>

            <ParticlesComponent color='#fff' />

        </div>
    )
}

export default Product
