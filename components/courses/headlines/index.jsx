import React from 'react'
import ItemHeadlines from './itemHeadlines';


const Headlines = ({ ListHeadLines, date, price, status }) => {
  return (
    <div className='w-full flex items-center justify-start flex-col mb-20'>
        <div className='w-full h-10 relative flex items-end justify-center overflow-hidden z-10 p-0 m-0'>
            <svg viewBox="0 0 415 9" fill="#ffa62b" xmlns="http://www.w3.org/2000/svg" className='w-full m-0'>
            <path id="course-wave" d="M207.5 0C75.591 0 0 9 0 9H415C415 9 339.409 0 207.5 0Z" fill="var(--background-secondary)"></path>
            </svg>
        </div>
        
        <div className='w-full flex items-center justify-start flex-col bg-orangeHamgo py-10'>
            <h5 className='text-2xl text-white mb-10'>سرفصل ها</h5>
            
            {ListHeadLines?.map((item, index) => (
                <ItemHeadlines key={index + 'headlindes'} item={item} index={index} />
            ))}

            <div className='w-10/12 res4:w-11/12 grid grid-cols-18 gap-3 items-center justify-center transform translate-y-28'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-full max-w-xs h-60 flex items-center justify-around flex-col p-3 border border-black66 shadow-2xl bg-white'>
                        <h5 className='text-3xl res4:text-xl text-blueHamgo'>زمان برگزاری</h5>
                        <p className='text-2xl res4:text-lg text-blueHamgo'>{date}</p>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <div className='w-full max-w-xs h-60 flex items-center justify-around flex-col p-3 border border-black66 shadow-2xl bg-white'>
                        <h5 className='text-3xl res4:text-xl text-blueHamgo'>قیمت دوره</h5>
                        <p className='text-2xl res4:text-lg text-blueHamgo'>{price.toLocaleString('fa-IR')} تومان</p>
                    </div>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <div className='w-full max-w-xs h-60 flex items-center justify-around flex-col p-3 border border-black66 shadow-2xl bg-white'>
                        <h5 className='text-3xl res4:text-xl text-blueHamgo'>وضعیت</h5>
                        <p className='text-2xl res4:text-lg text-blueHamgo'>{status ? 'موجود' : 'ناموجود'}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headlines;

Headlines.defaultProps = {
    date: '1401/06/02',
    price: 3000000,
    status: true,
    ListHeadLines: [
        {
            id: 1,
            title: 'فصل 1',
            list: [
                {
                    title: 'زیرمجموعه 1'
                },
                {
                    title: 'زیرمجموعه 2'
                },
                {
                    title: 'زیرمجموعه 3'
                },
                {
                    title: 'زیرمجموعه 4'
                },
            ]
        },
        {
            id: 2,
            title: 'فصل 2',
            list: [
                {
                    title: 'زیرمجموعه 1'
                },
                {
                    title: 'زیرمجموعه 2'
                },
                {
                    title: 'زیرمجموعه 3'
                },
                {
                    title: 'زیرمجموعه 4'
                },
            ]
        },
        {
            id: 3,
            title: 'فصل 3',
            list: [
                {
                    title: 'زیرمجموعه 1'
                },
                {
                    title: 'زیرمجموعه 2'
                },
                {
                    title: 'زیرمجموعه 3'
                },
                {
                    title: 'زیرمجموعه 4'
                },
            ]
        },
        {
            id: 4,
            title: 'فصل 4',
            list: [
                {
                    title: 'زیرمجموعه 1'
                },
                {
                    title: 'زیرمجموعه 2'
                },
                {
                    title: 'زیرمجموعه 3'
                },
                {
                    title: 'زیرمجموعه 4'
                },
            ]
        },
        {
            id: 5,
            title: 'فصل 5',
            list: [
                {
                    title: 'زیرمجموعه 1'
                },
                {
                    title: 'زیرمجموعه 2'
                },
                {
                    title: 'زیرمجموعه 3'
                },
                {
                    title: 'زیرمجموعه 4'
                },
            ]
        },
    ]
}