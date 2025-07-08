import { avenirFont, montserratMedium, montserratRegular } from "@/app/font";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";




const Card = ({ product }) => {

    const [selectedImage, setSelectedImage] = useState(product.images.yellow);
    const [selectedOption, setSelectedOption] = useState('Yellow Gold');

    const handleChange = (e) => {
        console.log(e.target.value)
        switch (e.target.value) {
            case 'Yellow Gold':
                setSelectedOption('Yellow Gold');
                setSelectedImage(product.images.yellow);
                break;

            case 'White Gold':
                setSelectedOption('White Gold');
                setSelectedImage(product.images.white);
                break;

            case 'Rose Gold':
                setSelectedOption('Rose Gold');
                setSelectedImage(product.images.rose);
                break;
        }
    }

    return (
        <div className="flex-none snap-start">
            <img className="w-[200px] h-[150px] rounded-2xl mb-2" src={selectedImage} alt="" />
            <p className={`${montserratMedium.className} text-[15px] mb-1`}>{product.name}</p>
            <p className={`${montserratRegular.className} text-[15px] mb-2`}>${product.price.toFixed(2)} USD</p>
            <div className="flex gap-2 mb-2">
                <label className="flex w-5 h-5 items-center pointer">
                    <input value='Yellow Gold' checked={selectedOption == 'Yellow Gold'} onChange={handleChange} type="radio" name={product.name} className="hidden" />
                    <span className="styled-radio flex items-center justify-center p-[3px]">
                        <span className="inline-block w-4 h-4 rounded-full bg-[#E6CA97]"></span>
                    </span>
                </label>
                <label className="flex w-5 h-5 items-center pointer">
                    <input value='White Gold' checked={selectedOption == 'White Gold'} onChange={handleChange} type="radio" name={product.name} className="hidden" />
                    <span className="styled-radio flex items-center justify-center p-[3px]">
                        <span className="inline-block w-4 h-4 rounded-full bg-[#D9D9D9]"></span>
                    </span>
                </label>
                <label className="flex w-5 h-5 items-center pointer">
                    <input value='Rose Gold' checked={selectedOption == 'Rose Gold'} onChange={handleChange} type="radio" name={product.name} className="hidden" />
                    <span className="styled-radio flex items-center justify-center p-[3px]">
                        <span className="inline-block w-4 h-4 rounded-full bg-[#E1A4A9]"></span>
                    </span>
                </label>
            </div>
            <div className={`${avenirFont.className} text-xs mb-2`}>{selectedOption}</div>
            <div className="flex">
                <div className="stars flex relative w-fit">
                    <svg fill="gold" className="w-3.5" viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                    <svg fill="gold" className="w-3.5" viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                    <svg fill="gold" className="w-3.5" viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                    <svg fill="gold" className="w-3.5" viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                    <svg fill="gold" className="w-3.5" viewBox="0 0 576 512" width="100" title="star">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>

                    <div className="cover bg-white h-full overflow-hidden mix-blend-color absolute top-0 right-0" style={{ width: `${100 - (product.popularityScore * 100)}%` }} ></div>
                </div>
                <span className={`${avenirFont.className} text-sm ml-1 flex items-center justify-center`} > {(product.popularityScore * 5).toFixed(1)}/5</span>
            </div>
        </div>
    )

}

export default Card;