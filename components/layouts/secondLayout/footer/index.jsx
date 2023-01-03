import React from 'react'
// Components
import HamgoCollection from './hamgoCollection';
import ContactUs from './contactUs';
import Platfourm from './Platfourm';

// Icons
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';


const Footer = ({ phone, website, location, platfourms, phones }) => {
  return (
    <div className='w-full min-h-[50vh] bg-blueHamgo flex items-start justify-evenly p-8 flex-col bg-gradient-to-r from-[rgba(16,46,70,1)] via-[rgba(22,105,122,1)] to-[rgba(16,46,70,1)] z-50'>
      <div className='w-full flex items-start justify-evenly res6:items-center res6:flex-col'>
        <div className='w-full res7:hidden'><HamgoCollection phones={phones} /></div>
        <ContactUs phone={phone} location={location} website={website} />
        <div className='w-full res7:hidden flex items-center justify-center'><Platfourm platfourms={platfourms} /></div>
      </div>

      <div className='w-full hidden res3:flex-col res7:flex items-stretch justify-between my-8'>
        <HamgoCollection phones={phones} />
        <Platfourm platfourms={platfourms} />
      </div>


      <div className='w-full flex items-center justify-center my-8 mx-0 res6:order-2 res6:my-8 res6:items-center'>
        <span className='bg-white hover:bg-orangeHamgo rounded-full flex items-center justify-center text-black p-3 res3:p-2 text-xl res3:text-sm m-2 transition-all duration-300 cursor-pointer'>
          <BsInstagram />
        </span>
        <span className='bg-white hover:bg-orangeHamgo rounded-full flex items-center justify-center text-black p-3 res3:p-2 text-xl res3:text-sm m-2 transition-all duration-300 cursor-pointer'>
          <BsTwitter />
        </span>
        <span className='bg-white hover:bg-orangeHamgo rounded-full flex items-center justify-center text-black p-3 res3:p-2 text-xl res3:text-sm m-2 transition-all duration-300 cursor-pointer'>
          <FaTelegramPlane />
        </span>
        <span className='bg-white hover:bg-orangeHamgo rounded-full flex items-center justify-center text-black p-3 res3:p-2 text-xl res3:text-sm m-2 transition-all duration-300 cursor-pointer'>
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  )
}

export default Footer

Footer.defaultProps = {
  phone: '۵۰ ۵۵ ۵۸ ۲۲_۰۲۱',
  email: 'www.hamgo.com',
  website: 'www.hamgo.com',
  location: 'خیابان دولت،بین دیباجی و یارمحمدی،پلاک 1،طبقه 2،واحد 3 کدپستی : 1951636718',
  platfourms: [
      {
          id: 1,
          title: 'مدرسه حقوق و اراضی'
      },
      {
          id: 2,
          title: 'فروشگاه کتاب'
      },
      {
          id: 3,
          title: 'ارزان سازی پرونده'
      },
      {
          id: 4,
          title: 'قرار داد هوشمند'
      },
  ],
  phones: [
      {
          id: 1,
          title: 'واحد آموزش و ثبت نام : ۵۰ ۵۵ ۵۸ ۲۲_۰۲۱'
      },
      {
          id: 2,
          title: 'موبایل و واتس‌اپ واحد آموزش : ۲۵ ۲۵ ۴۵۰- ۰۹۱۰'
      },
      {
          id: 3,
          title: 'رزرو مشاوره حضوری : ۳۷ ۰۱ ۵۸ ۲۲ – ۰۲۱'
      },
      {
          id: 4,
          title: 'واحد انتشارات‌ : ۰۰ ۴۹ ۵۸ ۲۲- ۰۲۱'
      },
      {
          id: 5,
          title: 'موبایل و واتس‌اپ واحد انتشارات : ۷۸۹ ۵۰ ۵۰ - ۰۹۹۱'
      }
  ],
}