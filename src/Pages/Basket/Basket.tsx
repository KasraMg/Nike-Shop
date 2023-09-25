import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../Redux/hooks'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiSolidTrashAlt } from 'react-icons/bi'

const Basket = () => {
  const cart = useAppSelector(state => state.cart)

  return (
    <div className='bg-[#024742] mt-20 px-8 sm-x2:px-4 '>

      {cart.length ? (

        <main className='h-[100vh] flex gap-10'>

          <section className='pt-12 w-1/2'>
            <p className='text-5xl text-white font-[cursive] my-8'>Products:</p>
            <hr className='w-full' />
            {cart.map(product => (

              <section className='flex mt-10 relative w-max'>
                <div className='rounded-l' style={{ background: `linear-gradient(135deg, #2a6e6a 8%, ${product.bg} 83%)` }}>
                  <img src={product.image} className='w-36' alt="" />
                </div>
                <div className='bg-white rounded-r  flex items-center justify-between px-4 py-4  w-80'>
                  <div>
                    <p>{product.title}</p>
                    <p className='mt-4'>{product.price.current_price}</p>

                  </div>
                  <div>
                    <div className='flex justify-between items-center gap-2'>
                      <span className='cursor-pointer px-[1px]'> -</span>
                      <p className='bg-[#17604e66] px-2 text-[14px] rounded-md'>{product.count}</p>
                      <span className='cursor-pointer'> +</span>
                    </div>
                    <div className='flex mt-4'>
                      {Array(product.star)
                      .fill(0)
                      .map(() => <AiFillStar className='text-[orange]' />
                      )}
                    {Array(5 - product.star)
                      .fill(0)
                      .map(() => <AiOutlineStar className='text-[orange]' />
                      )}
                    </div>
                    


                  </div>

                </div> 

                <div className='absolute -right-3 cursor-pointer bg-white rounded-full -top-4 p-2'>
                  <BiSolidTrashAlt className='text-red-600    ' />
                  </div>
              </section>
               
            ))}
          </section>



          <section className='pt-12 w-1/2'>
            <p className='text-5xl text-white font-[cursive] my-8'>Products:</p>
            <hr className='w-full' />
            {cart.map(product => (

              <div className='flex mt-10'>
                <div style={{ background: `linear-gradient(135deg, #2a6e6a 8%, ${product.bg} 83%)` }}>
                  <img src={product.image} className='w-36' alt="" />
                </div>
                <div className='bg-white flex items-center justify-between px-4 py-2  w-80'>
                  <div>
                    <p>{product.title}</p>
                    <p>{product.price.current_price}</p>
                    <p>{product.count}</p>
                  </div>
                  <p>remover</p>
                </div>
              </div>

            ))}
          </section>


        </main>

      ) : (
        <main className='mx-auto block w-max text-center pt-48 pb-56'>
          <img src="/images/icons8-basket-100.png" className='mx-auto' alt="" />
          <p className='font-[cursive] my-4 text-white text-3xl'>Your Cart Is Empty :((</p>
          <Link to='/'><button className='border border-solid border-white text-white px-3 hover:text-[#024742] hover:bg-white transition-colors py-2 mt-6  rounded-md'>Go shopping</button></Link>
        </main>
      )}


    </div>
  )
}

export default Basket
