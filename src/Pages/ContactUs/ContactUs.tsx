import { Map } from '../../Components/Map/Map'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook, BsPhone } from 'react-icons/bs'
import { SiJordan, SiNike } from 'react-icons/si'
import { BiLogoGmail } from 'react-icons/bi'
const ContactUs = () => {

  return (
    <div className='mt-20 '>
      <section className='bg-[#2a6e6a] py-16 flex justify-around lg:flex-col-reverse lg:justify-center lg:px-5'>
        <div className='space-y-8 relative  lg:mt-10'>
          <p className='text-white text-4xl md:text-2xl sm-x2:!text-[16px]  '>Nike shop  is open from 9 am to 12 pm</p>
          <p className='text-white text-4xl md:text-2xl sm-x2:!text-[16px]  '>We do not have another shop</p>
          <div className="flex space-x-4 text-4xl sm-x2:!text-[26px] sm:!justify-evenly  lg:justify-end relative bottom-1">
            <a className='text-[#ffffff82] hover:text-white transition-colors' href="https://instagram.com/nike"><AiFillInstagram /></a>
            <a className='text-[#ffffff82] hover:text-white transition-colors' href="https://twitter.com/Nike"><AiOutlineTwitter /></a>
            <a className='text-[#ffffff82] hover:text-white transition-colors' href="https://www.facebook.com/nike"><BsFacebook /></a>
            <a className='text-[#ffffff82] hover:text-white transition-colors' href="https://www.youtube.com/user/nike"><AiFillYoutube /></a>
          </div>
          <p className='text-white absolute bottom-2 sm:relative sm:bottom-0 text-4xl md:text-2xl sm-x2:!text-[16px]  '>Germany, Berlin, VoBstraBe Street</p>
        </div>
        <Map />
      </section>
      <div className='py-1 flex justify-around bg-[#2a6e6a]'>
        <SiNike className='text-5xl text-[#ffffff]' />
        <SiNike className='text-5xl text-[#ffffff]' />
        <SiNike className='text-5xl text-[#ffffff]' />
      </div>
      <section className='bg-[#fdfdfd] py-16 flex items-center justify-around md:flex-col md:pb-32 md:justify-center'>
        <div className='relative'>
          <SiJordan className=' text-white text-[400px] sm:!text-[180px] sm:!left-[65px] sm:!top-[50px] lg:text-[300px] lg:left-[100px] lg:top-[80px] absolute left-[150px] top-[100px]' />
          <img className='w-[700px]  lg:w-[500px]   sm:!w-[310px]' src="/images/graph.png " alt="" />
        </div>
        <main className='space-y-6   sm-x2:pt-10'>
          <div style={{ boxShadow: '12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)' }} className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] border-[rgb(0,59,8)] border-solid border-r border-b rounded-3xl p-8 bg-[#fff] ">
            <BsPhone className='mb-3 text-2xl' />
            <span>Compony Info:</span>
            <p>+49 (0) 6929993500 </p>
          </div>
          <div style={{ boxShadow: '12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)' }} className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] border-[rgb(0,59,8)] border-solid border-r border-b rounded-3xl p-8  bg-[#fff] ">
            <BsPhone className='mb-3 text-2xl' />
            <span>Product & Orders:</span>
            <p>+49 (0) 6995206453 </p>
          </div>
          <div style={{ boxShadow: '12px 12px 26px rgba(0, 0, 0, 0.2),-12px -12px 26px rgba(255, 255, 255, 0.6)' }} className="relative  w-[300px] text-[rgb(0,59,8)] z-[999] border-[rgb(0,59,8)] border-solid border-r border-b rounded-3xl p-8  bg-[#fff] ">
            <BiLogoGmail className='mb-3 text-2xl' />
            <span>Gmail:</span>
            <p>Nike@gmail.com </p>
          </div>
        </main>
    
      </section>

    <section className='bg-white px-28 text-[20px] sm-x2:px-6 sm-x2:text-center leading-8 pb-20'>
      <p>Our site is a platform for people who want to buy products in a safe and secure way. We want our costumers to be able to buy their desired shoes for a reasonable price. If you buy something on our site you are always protected via every payment option, you are always able to get your money back if something goes wrong. We also offer 14-day returns, if you don’t like the product or the shoes don't fit, you can send it back to us with ease. </p>
      <p className='mt-6'>We care about the authenticity of our products. We do not sell fakes and do not support the trade of fakes either. We only buy our products from official retailers to make sure everything is 100% authentic. </p>
    </section>
       
    </div>
  )
}
export default ContactUs