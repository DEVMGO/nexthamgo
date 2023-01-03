import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
// Image
import Img from '../../../public/assets/imgs/onlinecourses/perofessor.jpg'
import Cover from '/public/assets/imgs/cover_courses2.png'
// Styles
import style from './style.module.css'

const SuggestedCourse = ({ item }) => {
  return (
    <div className='w-full flex items-center justify-start flex-col my-8 p-4'>
        <div className={style.courses_cover}>
            <Image src={item?.image} alt={item?.title} />
        </div>

        <div className='w-full flex items-center justify-start'>
            <h3 className='text-2xl res4:text-lg text-black'>{item?.title}</h3>
        </div>

        <div className={style.courses_box}>
            <div className='w-full flex items-start justify-start flex-col py-8 pl-8 res4:pl-0'>
                <h4 className='w-full text-black text-lg res4:text-base mb-10'>معرفی دوره</h4>
                <p className='text-base res4:text-xs text-black33 text-justify'>{item?.description}</p>
            </div>

            <div className='w-2/5 res4:w-full flex items-center justify-start flex-col p-8 res4:p-3 border border-black44 rounded-b-xl bg-white'>
                <h4 className='w-full flex items-center justify-start text-black text-lg res4:text-base'>اطلاعات مدرس</h4>
                <div className='w-full flex items-center justify-start my-8'>
                    <div className='w-24 h-24 rounded-full overflow-hidden'>
                        <Image src={item?.teacher_image} alt={item?.teacher_name} className='w-full h-full' />
                    </div>
                    <h4 className='mr-4'>{item?.teacher_name}</h4>
                </div>
                <div className='w-full min-h-[200px] flex items-start justify-start flex-col p-3'>
                    <p className='text-justify text-sm res4:text-xs leading-7 text-black33'>{item?.teacher_description}</p>
                </div>

                <Link href={item?.teacher_url}><button className='w-48 bg-orangeHamgo py-2 text-white text-base res4:text-sm rounded-xl'>پروفایل</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SuggestedCourse;

SuggestedCourse.defaultProps= {
    item: {
        id: 1,
        title: 'دوره آفلاین React',
        image: Cover,
        description: 'برای یادگیری React لازم است تا مفاهیم اولیه فرانت‌اند را بلد باشید اما ما برای یادآوری بخش مهمی از این مفاهیم یعنی جاوااسکریپت، فصلی اختصاص داده‌ایم تا با خیال راحت به سراغ مباحث اصلی بروید. برای رسیدن به این هدف با افراد مدیران فنی خبره‌ در شرکت‌های بزرگ تکنولوژی مشورت کردیم و هر آن‌چه برای تبدیل شدن به Junior React Developer لازم بوده، آموزش داده شده‌است.',
        teacher_name: 'اکبر روزبهانی',
        teacher_image: Img,
        teacher_description: 'دارای مدرک دکتری اقتصاد مالی گرایش اقتصادسنجی از دانشگاه علامه طباطبایی بوده و از سوابق ایشان می‌توان به مسئول سابق گروه پژوهشی، واحد مطالعات بازار دنیای اقتصاد،',
        teacher_url: '#'
    }
}