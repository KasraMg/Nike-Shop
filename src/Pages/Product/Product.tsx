import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { product as ProductType } from '../../Types/Project.types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { SiNike } from 'react-icons/si'
import ParticlesComponent from '../../Components/Particles/Particles';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { getProductsFromServer } from '../../Redux/Slice/Product';
import Card from '../../Components/TrendsCard/Card';
import ProductMain from '../../Components/ProductMain/ProductMain';
import Loader from '../../Components/Loader/Loader'
const Product = () => {
    const [productInfo, setProductInfo] = useState<ProductType>()
    const param = useParams()
    const products = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductsFromServer())

    }, [])

    useEffect(() => {
        fetch(`https://nikeapi.iran.liara.run/products?id=${param.id}`)
            .then(res => res.json())
            .then(data => {
                setProductInfo(data[0])
                window.scrollTo(0, 0)
            })
    }, [param])

    return (
        <div style={{ boxShadow: ' 0px 15px 50px 10px rgba(0, 0, 0, 0.4' }} className="  relative md:mt-0 mt-12 bg-[#024742] items-center w-full m-auto md:h-[unset] productPage">
            {productInfo ? (
                <>
                    <main className=' relative mx-auto md:mt-0 md:pt-20 w-max pt-28 mt-8 md:w-full  z-[9998]'>
                        <ProductMain {...productInfo} />

                    </main>

                    <hr className=' absolute top-[380px] w-full' />
                    <section className='bg-white mt-32 py-20 sm-x2:mt-10 '>
                        <div className='flex justify-between lg:mx-10 sm-x2:!mx-5 mx-40'>
                            <p className='text-left    sm-x2:text-[16px] text-[#2a6e6a] text-4xl mb-16'>Good to know </p>
                            <SiNike className='text-5xl bg-[#2a6e6a] text-[#fff] px-3 py-1 rounded-full' />
                        </div>

                        <main className='flex flex-wrap lg:mx-10 sm-x2:!mx-5 justify-center gap-12'>

                            <div style={{ boxShadow: '12px 12px 6px rgba(0, 0, 0, 0.2),-12px -12px 6px rgba(255, 255, 255, 0.6)' }} className="relative z-[9999]  w-[300px] text-[rgb(0,59,8)]  rounded-3xl p-8 bg-[#ecf0f3] ">
                                <span className='text-center block mx-auto font-bold'>SHIPPING</span>
                                <p className=' text-[13px] mt-8 tracking-tight  '>We always aim to ship out your order within a few business days.

                                    You can check the estimated shipping time in the 'Shipping Information' tab (above the Add To Cart button).</p>

                            </div>

                            <div style={{ boxShadow: '12px 12px 6px rgba(0, 0, 0, 0.2),-12px -12px 6px rgba(255, 255, 255, 0.6)' }} className="relative z-[9999] bg-[#2a6e6a]   w-[300px] text-[rgb(255,255,255)]  rounded-3xl p-8   ">
                                <span className='text-center block mx-auto font-bold'>AUTHENTICITY</span>
                                <p className=' text-[13px] mt-8 tracking-tight  '>All products are 100% authentic & brand new.

                                    We do not sell nor support the sale of fake products. All our products are authenticated & thoroughly checked before they're shipped out.</p>

                            </div>

                            <div style={{ boxShadow: '12px 12px 6px rgba(0, 0, 0, 0.2),-12px -12px 6px rgba(255, 255, 255, 0.6)' }} className="relative z-[9999]  w-[300px] text-[rgb(0,59,8)]  rounded-3xl p-8 bg-[#ecf0f3] ">
                                <span className='text-center block mx-auto font-bold'>CANCELLATIONS & RETURNS</span>
                                <p className=' text-[13px] mt-8 tracking-tight  '> Unfortunately you can not cancel your order once it's placed. However, if we have not fulfilled your order yet, you may request a different size/color or model.</p>

                            </div>
                        </main>

                    </section>

                    <section className=' pt-16 lg:mx-10 sm-x2:!mx-5 mx-40'>

                        <div className='flex justify-between  '>
                            <p className='text-left    sm-x2:text-[16px] text-[#ffffff] text-4xl mb-16'>  Other Products </p>
                            <SiNike className='text-5xl bg-[#fafafa] text-[#2a6e6a] px-3 py-1 rounded-full' />
                        </div>
                        <Swiper
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,

                            }} breakpoints={{
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
                                }
                            }}
                            modules={[Autoplay]}
                            rewind={true} className='w-full z-[9998]  mt-6 pb-12'>
                            {products && products.map(data => (
                                <SwiperSlide key={crypto.randomUUID()} className='overflow-hidden'>
                                    <Card {...data} />
                                </SwiperSlide>
                            ))}


                        </Swiper>
                    </section>
                </>
            ) : (
                <Loader />
            )}
            <ParticlesComponent color='#fff' />

        </div>
    )
}

export default Product
