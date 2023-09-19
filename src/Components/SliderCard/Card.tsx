import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai"

const Card = (props: any) => {
  return (
    <div className="flex text-left  "> 
      <section className="w-32 rounded-l-md relative" style={{ background: props.bg }}>
        <img className="absolute right-[0] top-1 w-[175px]" style={{ transform: ' rotate(331deg)' }} src={props.image} alt="" />
      </section>
      <main className="p-4 relative  rounded-r-md pr-7 space-y-1 bg-white">
        <p className="text-[12px] whitespace-nowrap w-[113px]"  >{props.title.slice(0,16)}...</p>
        <div className="flex g-2 text-[12px]">

          {Array(props.star)
            .fill(0)
            .map(() => <AiFillStar className='text-[orange]'/>
            )}
          {Array(5 - props.star)
            .fill(0)
            .map(() => <AiOutlineStar className='text-[orange]'/>
            )}

        </div>
        <p className="text-[12px] font-bold">{props.price.current_price}$</p>
        <p className="text-[12px] text-gray-600">{props.colors} Colors</p>

        <AiOutlinePlus className=' absolute right-2 cursor-pointer bottom-2' />
      </main>

    </div>
  )
}

export default Card
