import { SiJordan } from 'react-icons/si'
const Footer = () => {
    return (
        <footer className='bg-white border-t border-solid sm:flex-wrap sm:justify-center sm:gap-3 border-[#024742] md:px-5 pb-2 pt-3 flex justify-between px-10 items-center'>
            <section className='flex gap-3 items-center'>
                <p className='  text-2xl'>Just Do It </p>
                <SiJordan className='   text-[2rem] text-[#024742]' />
            </section>

            <p>© 2023 Nike, Inc. All rights reserved</p>

        </footer>
    )
}

export default Footer
