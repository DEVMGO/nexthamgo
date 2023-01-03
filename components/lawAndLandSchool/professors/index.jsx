import React from 'react'
import Image from 'next/image';
import { BsCheckLg } from 'react-icons/bs';
// images
import Img1 from '../../../public/assets/imgs/lawandland/professor1.jpg';
import Img2 from '../../../public/assets/imgs/lawandland/professor2.jpg';
import Img3 from '../../../public/assets/imgs/lawandland/professor3.jpg';
import Img4 from '../../../public/assets/imgs/lawandland/professor4.jpg';
import Img5 from '../../../public/assets/imgs/lawandland/professor5.jpg';
import Img6 from '../../../public/assets/imgs/lawandland/professor6.jpg';

const Professors = ({ listProfessors }) => {
  const professorsNames = listProfessors?.sort(function(a, b) { return b.course - a.course });

  return (
    <div className='w-full flex items-center justify-start flex-col p-10 my-10 bg-gradient-to-b from-[#0074bc20] to-[#7ac84920]'>
        <h4 className='text-[#3e4756] text-xl res4:text-sm text-center font-extrabold mb-10'>با بهترین اساتید همگو آشنا شوید</h4>
        <div className='w-4/5 res4:w-full grid grid-cols-6 gap-6 items-center justify-center res5:grid-cols-3 res5:gap-3 res3:!grid-cols-2'>
            {professorsNames?.map((item, index) => {
                if(index < 6) { 
                    return (
                    <div key={index + 'professors'} className='group w-full flex items-center justify-center flex-col bg-white rounded-2xl overflow-hidden shadow-lg'>
                        <Image src={item.image} alt={item.name} className='w-full h-52 rounded-2xl' />
                        <div className='w-full h-12 flex items-center justify-center flex-col cursor-pointer relative'>
                            <h5 className='text-sm font-extralight text-slate-600 translate-y-2 group-hover:opacity-0 transition ease-in-out duration-500 z-10'>{item.name}</h5>
                            <p className='text-sm font-extralight text-slate-600 transform translate-y-12 group-hover:-translate-y-3 transition ease-in-out duration-500 z-20'>
                                تعداد دوره‌ها: <span className='text-orangeHamgo'>{item?.course.toLocaleString('fa-IR')}</span>
                            </p>
                        </div>
                    </div>
                )}
            })}
        </div>
        <button className='mt-8 bg-blue-600 text-white flex items-center justify-center py-3 px-5 rounded-3xl text-xs'><BsCheckLg className='ml-2' /> مشاهده همه اساتید همگو</button>
    </div>
  )
}

export default Professors;

Professors.defaultProps = {
    listProfessors: [
        {
            id: 1,
            name: 'test name1',
            course: 12,
            image: Img1,
        },
        {
            id: 2,
            name: 'test name2',
            course: 8,
            image: Img2,
        },
        {
            id: 3,
            name: 'test name3',
            course: 20,
            image: Img3,
        },
        {
            id: 4,
            name: 'test name4',
            course: 30,
            image: Img4,
        },
        {
            id: 5,
            name: 'test name5',
            course: 15,
            image: Img5,
        },
        {
            id: 6,
            name: 'test name6',
            course: 4,
            image: Img6,
        },
        {
            id: 13,
            name: 'test name13',
            course: 20,
            image: Img1,
        },
        {
            id: 14,
            name: 'test name14',
            course: 25,
            image: Img2,
        },
        {
            id: 15,
            name: 'test name15',
            course: 15,
            image: Img3,
        },
        {
            id: 16,
            name: 'test name16',
            course: 4,
            image: Img4,
        },
    ]
}