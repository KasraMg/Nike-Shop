import { SiJordan, SiNike } from 'react-icons/si'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiMenu5Fill } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../Redux/hooks'
import { WavyLink } from 'react-wavy-transitions'
const Topbar = () => {
  const [url, setUrl] = useState<string>('')
  const cart = useAppSelector(state => state.cart)
  useEffect(() => {
    setUrl(location.pathname)
  }, [location.pathname])

  return (
    <header className='relative z-[9998] '>
      <div className={` ${url.length > 2 ? 'bg-white' : 'bg-transparent'} flex w-full justify-between  items-center sm-x2:px-4  px-8 py-4 absolute   z-50 top-0 left-0`}>

        <div className=' md:hidden'>
          <WavyLink duration={1000} color="#024742" to='/'><SiNike className={`${url.length > 2 ? 'text-[#2a6e6a] ' : 'text-white '} text-5xl`} /></WavyLink>
        </div>

        <div className=' md:block hidden'>
          <WavyLink duration={1000} color="#024742" to='/'><SiNike className='text-5xl text-[#2a6e6a]' /></WavyLink>
        </div>

        <ul className='flex gap-6 sm:hidden' >
          <WavyLink duration={1000} color="#024742" to='/'><li className={`${url.length < 2 ? ' text-black' : ' text-gray-600 '} cursor-pointer font-bold outline-0  `}>Home</li></WavyLink>
          <WavyLink duration={1000} color="#024742" to='/ContactUs'> <li className={` ${location.pathname == '/ContactUs' ? 'text-black ' : 'text-gray-600 '}cursor-pointer font-bold outline-0   whitespace-nowrap`}>Contact us</li></WavyLink>
          <WavyLink duration={1000} color="#024742" to='/AllProducts'><li className={`  ${location.pathname == '/AllProducts' ? 'text-black ' : 'text-gray-600 '} cursor-pointer font-bold outline-0   `}>Products</li></WavyLink>
        </ul>

        <div className='flex z-[9997] gap-3'>
          <div className={`${url.length > 2 ? 'bg-[#024742] text-white' : 'bg-white'} rounded-md px-2 pt-2 pb-1 cursor-pointer relative`}>
            <WavyLink duration={1000} color="#024742" to='/basket'>
              <AiOutlineShoppingCart />
              <span className={`${url.length > 2 ? 'bg-[white] text-[#024742]' : 'bg-[#024742]  text-white'}  rounded-3xl px-[5px] py-[3px]  text-[9px] -right-1 absolute`}>{cart.length}</span>

            </WavyLink>

          </div>
          <button type="button" className=" hidden sm:!block text-3xl" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
            <RiMenu5Fill />
          </button>
        </div>


      </div>

      <div id="drawer-example" className="fixed bg-[#024742] z-[9999] top-0 left-0 border-r bg-[url(/Images/projectBg.jpg)]  h-screen p-4 overflow-y-auto transition-transform -translate-x-full  w-full" aria-labelledby="drawer-label">
        <div className="flex justify-between items-center py-3 px-2 border-b 0">
          <h3 className="font-bold text-white  font-swap relative bottom-2  " >
            menu
          </h3>
          <button type="button"
            className="inline-flex flex-shrink-0 justify-center items-center h-8 relative bottom-2 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-drawer-hide="drawer-example" aria-controls="drawer-example">
            <span className="sr-only">Close offcanvas</span>
            <svg className="w-3.5 h-3.5 text-white" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="px-2 py-10">

          <ul className='text-left' data-drawer-hide="drawer-example" aria-controls="drawer-example">
            <WavyLink duration={1000} color="#024742" to='/'><li className={`${url.length < 2 ? ' text-[#fff]' : ' text-[#dad8d8a2] '} cursor-pointer text-left mt-5 font-bold outline-0  `}>Home</li></WavyLink>
            <WavyLink duration={1000} color="#024742" to='/ContactUs'> <li className={` ${location.pathname == '/ContactUs' ? 'text-[#fff] ' : 'text-[#dad8d8a2] '}cursor-pointer text-left mt-5 font-bold outline-0   whitespace-nowrap`}>Contact us</li></WavyLink>
            <WavyLink duration={1000} color="#024742" to='/AllProducts'><li className={`  ${location.pathname == '/AllProducts' ? 'text-[#fff] ' : 'text-[#dad8d8a2] '} cursor-pointer text-left mt-5 font-bold outline-0   `}>Products</li></WavyLink>
          </ul>
        </div>
        <div className='flex absolute w-full bottom-4 justify-between px-4 border-t-2 border-solid border-black pt-4 left-0'>
                 <p className='  text-[#ffffff] text-2xl'>Just Do It </p>
                <SiJordan className='   text-[2rem] text-[#ffffff]' />
          </div>
      </div>
    </header>

  )
}

export default Topbar
