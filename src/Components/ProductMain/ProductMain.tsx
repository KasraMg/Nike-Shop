import { product, productCart } from '../../Types/Project.types'
import { Pagination } from 'swiper/modules';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { SiJordan } from 'react-icons/si'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { addToCart, minusCount, plusCount, removeProduct } from '../../Redux/Slice/Cart';
import { WavyLink } from 'react-wavy-transitions';
const ProductMain = (props: product) => {


    const [isExists, setIsExists] = useState<productCart[] | null>(null)
    const param = useParams()
    const cart = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const plusCountHandler = () => {
        dispatch(plusCount(props.id))
      }
      const minusCountHandler = () => {
        dispatch(minusCount(props.id))
      }
      const removeProductHandler = () => {
        dispatch(removeProduct(props.id))
      }

    useEffect(() => { 
        const data = cart.filter(product => {
            return product.id == props.id
        })

        if (data.length) {
            setIsExists(data)
        } else {
            setIsExists(null)
        }

    }, [cart, param])

    const addToCartHandler = () => {
        const product: productCart = {
            id: props.id,
            title: props.title,
            image: props.image,
            price: {
                current_price: props.price.current_price,
                prev_price: props.price.prev_price
            },
            bg: props.bg,
            count: 1,
            star: props.star
        }


        dispatch(addToCart(product))
    }
    return (
        <>
            <div style={{ background: `linear-gradient(135deg, ${props.bg} 8%, #2a6e6a 83%)`, content: '', borderRadius: ' 0% 50% 50% 0%' }} className="h-[500px] sm:h-[300px] md:w-full md:!rounded-none md:relative w-[400px] flex items-center absolute z-[5] bg-[#ff6d39] mr-[93px]">

                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    rewind={true}
                    modules={[Pagination]}
                    className="mySwiper sm:pb-4 md:!w-full lg:w-[416px] w-[500px] md:relative md:bottom-0 absolute bottom-24"
                >
                    <SwiperSlide className=' product-Slide  lg:pl-3'>  <img src={props.image} className='-ml-[65px] w-[576px]  lg:w-[490px] md:!w-[100%]     md:mx-auto mt-[60px] md:mt-0' alt="shoe" /></SwiperSlide>
                    <SwiperSlide className=' product-Slide  lg:pl-3'>  <img src={props.image2} className='-ml-[65px] w-[576px]  lg:w-[490px] md:!w-[100%]     md:mx-auto mt-[60px] md:mt-0' alt="shoe" /></SwiperSlide>
                    <SwiperSlide className=' product-Slide  lg:pl-3'>  <img src={props.image3} className='-ml-[65px] w-[576px]  lg:w-[490px] md:!w-[100%]     md:mx-auto mt-[60px] md:mt-0' alt="shoe" /></SwiperSlide>

                </Swiper>
            </div>
            <div style={{ content: '' }} className="h-[500px] relative sm-x2:!h-full bg-[#ffffff] lg:w-[700px] md:!w-full md:ml-0 w-[800px] z-[3] ml-[200px] content">
                <div className=" absolute md:relative sm-x2:!h-full sm-x2:pb-10 md:right-0 sm-x2:!px-4 md:px-8 md:w-full top-1 right-[64px] h-[500px]   w-[400px] z-10">
                    <div className="flex justify-between pt-5">
                        <h1 className='text-[#024742]   text-3xl'>Nike</h1>
                        <SiJordan className='text-[#024742] relative md:left-0 left-8 text-2xl cursor-pointer' />
                    </div>

                    <div className="   uppercase ">
                        <h3 className='mt-16'>disiend by {props.Designed_by}</h3>
                        <p className='my-4 sm-x2:whitespace-break-spaces text-3xl whitespace-nowrap'>{props.title}</p>

                        <section className='flex justify-between sm-x2:flex-col sm-x2:gap-5'>

                            <div className='flex gap-5'>
                                <h4> ${props.price.current_price}</h4>
                                {props.price.prev_price &&
                                    <h4 className=' line-through'>${props.price.prev_price}</h4>}
                            </div>

                            <div className='flex gap-2'>
                                {Array(props.star)
                                    .fill(0)
                                    .map(() => <AiFillStar key={crypto.randomUUID()} className='text-[orange]' />
                                    )}
                                {Array(5 - props.star)
                                    .fill(0)
                                    .map(() => <AiOutlineStar key={crypto.randomUUID()} className='text-[orange]' />
                                    )}
                            </div>

                        </section>

                    </div>
                    <div className='flex sm-x2:mt-5  gap-9 justify-between my-3'>
                        <p>SIZE</p>
                        <ul className='flex gap-2'>
                            {props.size.map(data => (
                                <li key={crypto.randomUUID()} className='text-[14px]'>{data}</li>
                            ))}
                        </ul>
                    </div>

                    <p className='mt-4 text-[#7d7777]'>{props.description}</p>
                    {isExists?.length ? (
                        <>
                            {isExists.map(data => (
                                <>
                                    {data.id == props.id ? (
                                        <div key={crypto.randomUUID()} className='flex justify-between items-baseline '>
                                            <div  className='bg-[#32958e] transition-colors block hover:bg-[#305f5c] w-[100px] text-center rounded-md py-2 text-white mt-8'>
                                                        <WavyLink duration={1000} color="#eee" to='/basket'>Go to cart</WavyLink>
                                            </div>
                                    
                                            <section className='flex gap-8'>
                                                <div className='flex justify-between items-center gap-3 w-[60px]'>
                                                    <span onClick={minusCountHandler} className='cursor-pointer px-[1px] text-[20px]'> -</span>
                                                    <p className='bg-[#17604e66] px-2 text-[14px] rounded-md'>{data.count}</p>
                                                    <span onClick={plusCountHandler} className='cursor-pointer text-[20px]'> +</span>

                                                </div>
                                                <BiSolidTrashAlt onClick={removeProductHandler} className='text-[20px] cursor-pointer text-1xl text-red-600 relative top-[2px]' />
                                            </section>

                                        </div>

                                    ) : (
                                        <button onClick={addToCartHandler} className='bg-[#024742] mt-14 w-full rounded-lg py-2 text-white'>Add To Cart</button>
                                    )}
                                </>
                            ))}
                        </>

                    ) : (
                        <button onClick={addToCartHandler} className='bg-[#024742] mt-14 w-full rounded-lg py-2 text-white'>Add To Cart</button>
                    )}

                </div>
            </div>


        </>

    )
}

export default ProductMain
