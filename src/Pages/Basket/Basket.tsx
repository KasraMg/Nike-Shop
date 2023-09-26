import { Link } from 'react-router-dom'
import {  useAppSelector } from '../../Redux/hooks' 
import Card from '../../Components/CartCard/Card'

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

            <Card {...product}/>
               
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
