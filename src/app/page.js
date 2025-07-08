import Carousel from "@/component/carousel";
import { avenirFont } from "./font";



const Home = async () => {

  const products = await fetch('http://localhost:3000/api/products');


  const _products = await products.json();

  return (
    <div className="flex justify-center items-center h-screen flex-col w-full">
      <div className={`${avenirFont.className} text-[45px]`}>Product List</div>
      <Carousel products={_products}></Carousel>
    </div>
  );
}

export default Home;