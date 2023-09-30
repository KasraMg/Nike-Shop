import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { SiJordan } from "react-icons/si"
import { WavyLink } from "react-wavy-transitions"
import { product } from "../../Types/Project.types"

const Card = (props:  product) => {
  return ( 
      <WavyLink duration={1000} color="#024742" to={`Product/${props.id}`} >
        <div className="flex text-left sm-x2:justify-center sm:mx-auto sm:w-max" >
              <section className="w-32 rounded-l-md relative" style={{ background: props.bg }}>
          <img className="absolute -right-[8px] top-1 w-[175px]" style={{ transform: ' rotate(331deg)' }} src={props.image} alt="" />
        </section>
        <main className="p-4 relative  rounded-r-md pr-7 space-y-1 bg-white">
          <p className="text-[12px] whitespace-nowrap w-[113px]"  >{props.title.slice(0, 16)}...</p>
          <div className="flex g-2 text-[12px]">

            {Array(props.star)
              .fill(0)
              .map(() => <AiFillStar key={crypto.randomUUID()} className='text-[orange]' />
              )}
            {Array(5 - props.star)
              .fill(0)
              .map(() => <AiOutlineStar key={crypto.randomUUID()} className='text-[orange]' />
              )}

          </div>
          <p className="text-[12px] font-bold">{props.price.current_price}$</p>
          <p className="text-[8px] text-gray-600"> {props.Designed_by}  </p>

          <SiJordan className=' absolute right-2 cursor-pointer bottom-2' />
        </main>
        </div>
    

      </WavyLink>
  

  )
}

export default Card
