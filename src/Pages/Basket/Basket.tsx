import { useAppSelector } from '../../Redux/hooks'
import Card from '../../Components/CartCard/Card'
import { WavyLink } from 'react-wavy-transitions'
import { useEffect, useState } from 'react'
import swal from 'sweetalert'

const Basket = () => {
  const cart = useAppSelector(state => state.cart)
  const [total, setTotal] = useState<any>(0)
  let totalPrice: any;

  useEffect(() => {
    totalPrice = 0
    cart.map(product => {
      totalPrice += product.count * product.price.current_price
    })
    setTotal(totalPrice);

  }, [cart])

const purchaseHandler=()=>{
  swal({
    title:'Coming Soon...',
    icon:'warning',
    buttons:'ok' as any
  })
}
  return (
    <div className='bg-[#024742] mt-20 px-8 sm-x2:px-4 '>

      {cart.length ? (

        <main className='h-[100vh] md:h-full md:pb-20 md:gap-5 flex lg:gap-20 md:flex-col gap-10'>

          <section className='pt-12 w-1/2 md:w-full '>
            <p className='text-5xl text-white sm-x2:text-2xl   my-8'>Products:</p>
            <hr className='w-full' />
            {cart.map(product => (
              <Card {...product} />
            ))}
          </section>



          <section className='pt-12 w-1/2 md:w-full md:pt-6 sm-x2:!pt-0'>
            <p className='text-5xl text-white sm-x2:text-2xl   my-8'>Check out</p>
            <hr className='w-full' />
            <div className="relative mt-8 lg:w-full w-[400px] text-[rgb(0,59,8)] z-[999] rounded-3xl sm-x2:px-6 p-8 bg-[#ecf0f3] ">
              <div className='text-left sm-x2:text-[20px] text-2xl   gap-5 mx-auto font-bold flex'>
                <p>Total :</p>
                <p>$ {total}</p>
              </div>
              <p className=' text-[15px] mt-4 tracking-tight  '>Taxes and shipping calculated at checkout</p>
              <button onClick={purchaseHandler} className='text-1xl w-full py-2 rounded-md transition-colors hover:bg-[rgb(0,59,8)] text-white mt-6 bg-[#024742]'>purchase</button>
            </div>
          </section>


        </main>

      ) : (
        <main className='mx-auto block w-max text-center pt-48 pb-56'>
          <img src="/images/icons8-basket-100.png" className='mx-auto' alt="" />
          <p className='  sm-x2:text-[22px] my-4 text-white text-3xl'>Your Cart Is Empty :((</p>
          <WavyLink duration={1000} color="#024742" to='/'><button className='border border-solid border-white text-white px-3 hover:text-[#024742] hover:bg-white transition-colors py-2 mt-6  rounded-md'>Go shopping</button></WavyLink>
        </main>
      )}


    </div>
  )
}

export default Basket
