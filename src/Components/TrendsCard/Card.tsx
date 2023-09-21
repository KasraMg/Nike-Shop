import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { product } from '../../Types/Cart.types'
import { Link } from 'react-router-dom'
const Card = (props: product) => {
  return (
    <Link to={`Product/${props.id}`} style={{ boxShadow: '-11px 11px 1px rgba(0, 0, 0, 0.3)' }} className="z-[999] rounded-3xl sm-x2:mx-auto  sm-x2:w-[280px]  w-[300px]">

      <section style={{ background: `linear-gradient(135deg, ${props.bg} 8%, #2a6e6a 83%)`, borderRadius: '25px 25px 0 0' }} className="relative h-[252px]   pt-10">
        <p className="py-0 px-5  text-white text-1xl  font-[cursive] relative top-2">
          {props.title}
        </p>
        <img className='w-[253px] h-[200px] object-cover relative -top-[15px] bottom-6 ml-4 z-[99]' style={{ transform: ' rotate3d(-13, 1000, 104, 563deg)' }} src={props.image} />

        <span className=" absolute top-10 -right-5 inline-block text-[125px] font-black -ml-2 -mt-3 opacity-[0.1]">
          NIKE
        </span>
      </section>

      <section style={{ borderRadius: '0 0 25px 25px' }} className="h-[225px] p-3 bg-white">
        <p className=''>   {props.title} <span className='bg-red-600 relative bottom-[2px] ml-2 p-2 rounded-md text-white text-[13px]'>news</span></p>
        <div className='flex mb-4 mt-2'>
          <AiFillStar className='text-[orange]' />
          <AiFillStar className='text-[orange]' />
          <AiFillStar className='text-[orange]' />
          <AiFillStar className='text-[orange]' />
          <AiFillStar className='text-[orange]' />
        </div>

        <div className='flex justify-between'>
          <span className=''>colors:</span>
          <div className='flex gap-3 mt-2'>
            <div className='w-5 h-5 rounded-full bg-red-600'></div>
            <div className='w-5 h-5 rounded-full bg-red-600'></div>
            <div className='w-5 h-5 rounded-full bg-red-600'></div>
          </div>
        </div>
        <div className='flex justify-between mt-3'>
          <span className=''>price:</span>
          <p>{props.price && props.price.current_price}$</p>
        </div>
        <button className='bg-[#024742] w-full rounded-md py-2 text-white mt-8'>add to cart</button>

      </section>
    </Link>

  )
}

export default Card
