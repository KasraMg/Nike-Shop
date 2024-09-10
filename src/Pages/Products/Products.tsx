import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  cheapest_product,
  expensivest_product,
  getProductsFromServer,
} from "../../Redux/Slice/Product";
import Card from "../../Components/TrendsCard/Card";
import ParticlesComponent from "../../Components/Particles/Particles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../Components/Loader/Loader";

const Products = () => {
  const products = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const [filterStatus, setFilterStatus] = useState<String>("all");
  const [skip, setSkip] = useState(9);
  const [more, _setmore] = useState(true);
  useEffect(() => {
    dispatch(getProductsFromServer());
  }, []);

  const selectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };

  useEffect(() => {
    switch (filterStatus) {
      case "all": {
        dispatch(getProductsFromServer());
        break;
      }
      case "cheapest": {
        dispatch(cheapest_product());
        break;
      }
      case "expensivest": {
        dispatch(expensivest_product());
        break;
      }
      default: {
        console.log("error");
      }
    }
  }, [filterStatus]);

  var addSkip = () => {
    setTimeout(() => {
      if (skip < 21) {
        setSkip((prev) => prev + 9);
      }
    }, 1000);
  };

  return (
    <>
      <section className=" mt-44">
        <div className="flex justify-between items-start sm-x2:flex-col lg:mx-10  sm-x2:!mx-5 mx-40">
          <p className="text-left font-playpen sm-x2:mb-8 sm-x2:text-[22px] text-[#024742] text-4xl mb-16">
            All Products{" "}
          </p>
          <select
            onChange={selectHandler}
            className="font-playpen bg-transparent sm-x2:mb-16 sm-x2:w-full w-[150px] text-[#024742] border-b-2 border-b-[#024742] text-sm block p-2.5 border-transparent outline-0 border-solid border-r-[10px] cursor-pointer dark:placeholder-gray-400 "
          >
            <option value="all">All Products</option>
            <option value="cheapest">cheapest </option>
            <option value="expensivest">expensivest</option>
          </select>
        </div>
      </section>

      <InfiniteScroll
        dataLength={skip}
        next={addSkip}
        hasMore={more}
        loader={
          <h4>{skip < 21 ? <Loader /> : <p>Yay! You have seen it all</p>}</h4>
        }
        className="z-[9997] ProductInfiniteScroll !overflow-x-hidden mb-20 relative mt-10 sm-x2:mt-0 sm-x2:!grid-cols-[auto] grid gap-20 lg:justify-evenly sm:!grid-cols-[auto] lg:grid-cols-[auto,auto] lg:mx-10 sm-x2:!mx-5 grid-cols-[auto,auto,auto] justify-between mx-40"
        height={600}
      >
        {products && products.slice(0, skip).map((data) => <Card {...data} />)}
      </InfiniteScroll>
      <ParticlesComponent color="#024742" />
    </>
  );
};

export default Products;
