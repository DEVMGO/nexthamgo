import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io';

const ItemHeadlines = ({ item, index }) => {
    
  const [showItem, setShowItem] = useState(false);
  const handleShow = () => setShowItem(!showItem)

  return (
    <div 
        key={index + 'headlindes'} 
        onClick={() => handleShow(item?.id)}
        className='w-4/5 flex items-center justify-center flex-col bg-white border border-black44'
    >
        <div className='w-full flex items-center justify-between py-5 px-3 cursor-pointer'>
            <h4 className='text-lg res4:text-sm text-black33'>{item?.title}</h4>
            <span><IoIosArrowUp className={`${showItem ? 'rotate-0' : '-rotate-180'} text-base transition-all duration-300 ease-in-out`} /></span>
        </div>

        {item?.list.map((itm, indx) => (
            <div 
                key={indx + 'listHeadline'} 
                className={`${showItem ? 'max-h-screen py-5 px-3 border-t border-t-black66': 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out w-full flex items-center justify-start bg-white`}
            >
                <p className='text-sm res4:text-xs text-black44'>{indx + 1}. {itm.title}</p>
            </div>
        ))}
    </div>
  )
}

export default ItemHeadlines