import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { product, productCart } from '../../Types/Project.types'  
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { addToCart, minusCount, plusCount, removeProduct } from '../../Redux/Slice/Cart'
import { useEffect, useState } from 'react'
import { BiSolidTrashAlt } from 'react-icons/bi'
import { WavyLink } from 'react-wavy-transitions'
const Card = (props: product) => {

  const [isExists, setIsExists] = useState<productCart[] | null>(null)

  const cart = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

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

  }, [cart])


  return (
    <div style={{ boxShadow: '-11px 11px 1px rgba(0, 0, 0, 0.3)' }} className="z-[999] rounded-3xl sm-x2:mx-auto  sm-x2:w-[280px]  w-[300px]">
      <WavyLink duration={1000} color="#024742" to={`/Product/${props.id}`}>
        <section style={{ background: `linear-gradient(135deg, #2a6e6a 8%, ${props.bg} 83%)`, borderRadius: '25px 25px 0 0' }} className="relative h-[252px]   pt-10">
          <p className="py-0 px-5  text-white text-1xl  font-[cursive] relative top-2">
            {props.title}
          </p>
          <img className='w-[253px] h-[200px] object-cover relative -top-[15px] bottom-6 ml-4 z-[99]' style={{ transform: ' rotate3d(-13, 1000, 104, 563deg)' }} src={props.image} />

          <span className=" absolute top-10 -right-5 inline-block text-[125px] font-black -ml-2 -mt-3 opacity-[0.1]">
            NIKE
          </span>
        </section>
      </WavyLink>
      <section style={{ borderRadius: '0 0 25px 25px' }} className="h-[225px] p-3 bg-white">
        <p className=''>   {props.title} <span className='bg-red-600 relative bottom-[2px] ml-2 p-2 rounded-md text-white text-[13px]'>news</span></p>
        <div className='flex mb-4 mt-2'>
          {Array(props.star)
            .fill(0)
            .map(() => <AiFillStar className='text-[orange]' />
            )}
          {Array(5 - props.star)
            .fill(0)
            .map(() => <AiOutlineStar className='text-[orange]' />
            )}

        </div>

        <div className='flex justify-between'>
          <span className=''>Designed by:</span>
          {props.Designed_by}
        </div>
        <div className='flex justify-between mt-3'>
          <span className=''>price:</span>
          <p>{props.price && props.price.current_price}$</p>
        </div>
        {isExists?.length ? (
          <>
            {isExists.map(data => (
              <>
                {data.id == props.id ? (
                  <div className='flex justify-between items-baseline '>

                    <div className='bg-[#32958e] transition-colors block hover:bg-[#305f5c] w-[100px] text-center rounded-md py-2 text-white mt-8'>
                      <WavyLink duration={1000} color="#024742" to='/basket' >Go to cart</WavyLink>
                    </div>
                    <section className='flex gap-5'>
                      <div className='flex justify-between items-center gap-2 w-[60px]'>
                        <span onClick={minusCountHandler} className='cursor-pointer px-[1px]'> -</span>
                        <p className='bg-[#17604e66] px-2 text-[14px] rounded-md'>{data.count}</p>
                        <span onClick={plusCountHandler} className='cursor-pointer'> +</span>

                      </div>
                      <BiSolidTrashAlt className=' text-1xl text-red-600 relative top-[2px] cursor-pointer' onClick={removeProductHandler} />
                    </section>

                  </div>

                ) : (
                  <button onClick={addToCartHandler} className='bg-[#024742] transition-colors hover:bg-[#305f5c] w-full rounded-md py-2 text-white mt-8'>add to cart</button>
                )}
              </>
            ))}
          </>

        ) : (
          <button onClick={addToCartHandler} className='bg-[#024742] transition-colors hover:bg-[#305f5c] w-full rounded-md py-2 text-white mt-8'>add to cart</button>
        )}



      </section>
    </div>

  )
}

export default Card
