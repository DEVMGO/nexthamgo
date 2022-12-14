import React, { Fragment } from 'react';
import ScrollToTop from '../ScrollToTop';
import Footer from './footer';
import Navbar from './navbar';

const SecondLayout = ({ children }) => {
  return (
    <Fragment>
      <ScrollToTop />
      <div className='w-full flex items-center justify-start flex-col z-50'>
        <div className="w-full max-w-[3000px] flex items-center justify-start flex-col overflow-hidden relative">
            <Navbar />
            <div className='w-full min-h-[70vh] flex items-start justify-start flex-col overflow-hidden z-40'>
                <main className='w-full'>{children}</main>
            </div>
            <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default SecondLayout;