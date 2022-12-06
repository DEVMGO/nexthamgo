import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { useRouter } from 'next/router';


const Nav = ({ itemsMenu }) => {

  const pathName = useRouter().pathname
  return (
    <div className='w-full flex items-center justify-center flex-col'>
        <div className='w-full h-12 flex items-center justify-center bg-bgNavHome'>
          <div className='w-4/5 flex items-center justify-between'>
              <div className='w-full flex items-center justify-start'>
                  <h5 className='text-white text-xs ml-12 res4:text-[.6rem] res4:ml-6'>تماس با همگو :88003027</h5>
                  <h5 className='text-white text-xs'>ایمیل :axe7491@gmail.com</h5>
              </div>

              <div className='w-full flex items-center justify-end'>
                  <BsLinkedin className='text-white text-base mr-3' />
                  <FaTwitter className='text-white text-base mr-3' />
                  <FaInstagram className='text-white text-base mr-3' />
              </div>
          </div>
        </div>

        <div className='w-full h-16 px-6 flex items-center justify-center'>
          <div className='w-4/5 flex items-center justify-between'>
            <ul className='w-full flex items-center justify-start'>
              {itemsMenu.map((item, index) => (
                <li 
                key={index + "itemMenu"} 
                className={`ml-10 res4:ml-3 py-3 ${pathName === item.url ? 'text-blueHamgo' : 'text-white'} transition-all ease-in-out delay-75 text-sm res4:text-xs cursor-pointer border-b border-b-4 border-b-transparent hover:border-b-blueHamgo hover:transition-all hover:delay-75 hover:border-b-4`}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-16 h-full flex items-center justify-center border-r border-r-borderNav'>
            <button className='cursor-pointer text-white hover:text-blueHamgo text-3xl'><MdOutlineShoppingBasket/></button>
          </div>
        </div>
    </div>
  )
}

export default Nav;

Nav.defaultProps = {
  itemsMenu: [
    {
      id: 1,
      title: "صفحه اصلی",
      url: "/",
      children: [],
    },
    {
      id: 2,
      title: "تماس با ما",
      url: "/contactus",
      children: [],
    },
    {
      id: 3,
      title: "درباره ما",
      url: "/aboutus",
      children: [],
    },
    {
      id: 4,
      title: "بلاگ",
      url: "/blog",
      children: [],
    },
  ]
}