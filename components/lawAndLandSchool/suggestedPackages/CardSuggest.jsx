import React from 'react'
import Image from 'next/image'
import { BiTimeFive, BiUserCircle } from 'react-icons/bi';
import style from './suggestedPackages.module.css'


const CardSuggest = ({ item }) => {

  const price = item?.price - item?.offer

  return (
    <div className={style.cardSuggest}>
        <div className={style.imgbox}>
            <Image src={item?.img} alt={item?.title} />
        </div>

        <h3>{item.title}</h3>

        <div className={style.data}>
            <h5><BiTimeFive /> {item?.date}</h5>
            <h5><BiUserCircle /> {item?.teacher}</h5>
        </div>

        <div className={style.priceBox}>
            <div className={style.prices}>
                <p>{price} <span>تومان</span></p>
                <del>{item?.price} <span>تومان</span></del>
            </div>
            <button>خرید</button>
        </div>

        <div className={style.footercard}>
            <h4>{item?.type}</h4>
        </div>
    </div>
  )
}

export default CardSuggest