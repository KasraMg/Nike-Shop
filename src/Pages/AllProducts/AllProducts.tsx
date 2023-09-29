import { useEffect,useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../Redux/hooks'
import { All_Products, cheapest_product, expensivest_product, getProductsFromServer } from '../../Redux/Slice/Product'
import Card from '../../Components/TrendsCard/Card'
import { SiNike } from 'react-icons/si'

const AllProducts = () => {
    const products = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()
    const [filterStatus,setFilterStatus]=useState<String>('all')

    useEffect(() => {
        dispatch(getProductsFromServer())
        console.log(products);

    }, [])

    const selectHandler=(event: React.ChangeEvent<HTMLSelectElement>)=>{
        setFilterStatus(event.target.value);
        
    }

    useEffect(() => {
        switch(filterStatus) {
            case "all":{
               dispatch(All_Products())
                break
            }
            case "cheapest":{
                dispatch(cheapest_product())
                 break
            }
            case "expensivest":{
                dispatch(expensivest_product())
                 break
            }
            default: {
                console.log('error');
                
            } 

        }
    }, [filterStatus])
    
    return (
        <>
            <section className=' mt-44'>
                <div className='flex justify-between items-baseline lg:mx-10 sm-x2:!mx-5 mx-40'>
                    <p className='text-left  font-[cursive] sm-x2:text-[22px] text-[#024742] text-4xl mb-16'>All Products </p>
                    <select onChange={selectHandler} className="bg-transparent w-[150px] text-[#024742] border-b-2 border-b-[#024742]  text-sm   block  p-2.5   border-transparent outline-0 border-solid border-r-[10px]  cursor-pointer dark:placeholder-gray-400 ">
                        <option value="all">All Products</option>
                        <option value="cheapest">cheapest </option>
                        <option value="expensivest">expensivest</option> 
                    </select>
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
