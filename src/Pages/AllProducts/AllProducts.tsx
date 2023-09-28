import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { getProductsFromServer } from '../../Redux/Slice/Product'
import Card from '../../Components/TrendsCard/Card'
import { SiNike } from 'react-icons/si'

const AllProducts = () => {
    const products = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductsFromServer())
        console.log(products);

    }, [])


    return (
        <>
            <section className=' mt-44'>
                <div className='flex justify-between lg:mx-10 sm-x2:!mx-5 mx-40'>
                    <p className='text-left  font-[cursive] sm-x2:text-[22px] text-[#024742] text-4xl mb-16'>All Products </p>
                    <SiNike className='text-5xl bg-[#2a6e6a] text-white px-3 py-1 rounded-full' />
                </div>

            </section>
            <main className=' mt-10 sm-x2:mt-0 mb-20 sm-x2:!grid-cols-[auto] grid gap-20 lg:justify-evenly sm:!grid-cols-[auto] lg:grid-cols-[auto,auto] lg:mx-10 sm-x2:!mx-5 grid-cols-[auto,auto,auto] justify-between mx-40'>
                {products && products.map(data => (
                    <Card {...data} />
                ))}
            </main>
        </>
    )
}

export default AllProducts
