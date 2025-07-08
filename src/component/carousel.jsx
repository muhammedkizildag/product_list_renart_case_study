'use client'
import { useRef } from "react";
import Card from "./card";




const Carousel = (props) => {
    const containerRef = useRef(null);

    const leftScroll = () => {
        containerRef.current.scrollBy({
            left: -264,
            behavior: 'smooth'
        })
    }

    const rightScroll = () => {
        containerRef.current.scrollBy({
            left: 264,
            behavior: 'smooth'
        })
    }


    return (
        <div className="flex">
            <button onClick={leftScroll} className="mr-4"><i className="fa-solid fa-chevron-left"></i></button>
            <div ref={containerRef} className="flex overflow-x-auto gap-16 no-scrollbar w-50 sm:w-116 md:w-182 lg:w-248 snap-x snap-mandatory">{props.products.map((v, i) => <Card key={i} product={v} />)}</div>
            <button onClick={rightScroll} className="ml-4"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
    )
}


export default Carousel;