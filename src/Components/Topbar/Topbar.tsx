import { SiNike } from 'react-icons/si'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Topbar = () => {
  return (
    <header className='relative'>
       <div className='flex justify-between items-center  px-8 py-4 absolute w-[99%] z-50 top-0 left-0'>
      <SiNike className='text-5xl text-white'/>

      <ul className='flex gap-6 ' >
        <li className='cursor-pointer font-bold font-[cursive] text-black'>Home</li>
        <li className='cursor-pointer font-bold font-[cursive] text-gray-600'>Contact us</li>
        <li className='cursor-pointer font-bold font-[cursive] text-gray-600'>Accont</li>
      </ul>

      <div className='bg-white rounded-md px-2 py-2 cursor-pointer relative'>
        <AiOutlineShoppingCart  />
        <span className='bg-[#024742] rounded-3xl p-[5px] text-white text-[6px] -right-1 absolute'>0</span>
      </div>
    </div>
    </header>
   
  )
}

export default Topbar
