import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Card = () => {
  return (
    <div style={{ boxShadow: '-11px 11px 1px rgba(0, 0, 0, 0.3)' }} className="z-[999] rounded-3xl sm-x2:mx-auto  sm-x2:w-[280px]  w-[300px]">

      <section className="relative h-[252px] bg-[#fa782e] card-head pt-10">
        <img width={'253px'} style={{ transform: ' rotate3d(-13, 1000, 104, 563deg)' }} src="/images/a3a62194837f1ba391316da6ae1de5d6a48d275f_1675779303-removebg-preview.png" alt="Shoe" className="absolute z-50 sm-x2:ml-[17px] left-0 ml-[24px]  mt-[4px] " />
        <div className="py-0 px-5  text-white text-3xl relative top-2">
          Air jordan nike
        </div>
        <span className=" relative right-5 inline-block text-[125px] font-black -ml-2 -mt-3 opacity-[0.1]">
          NIKE
        </span>
      </section>

      <section style={{ borderRadius: '0 0 25px 25px' }} className="h-[225px] p-3 bg-white">
        <p className=''>Air jordan nike  <span className='bg-red-600 relative bottom-[2px] ml-2 p-2 rounded-md text-white text-[13px]'>news</span></p>
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
          <p>120$</p>
        </div>
        <button className='bg-[#024742] w-full rounded-md py-2 text-white mt-8'>add to cart</button>

      </section>
    </div>

  )
}

export default Card
