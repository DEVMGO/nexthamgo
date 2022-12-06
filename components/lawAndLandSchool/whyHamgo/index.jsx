import React from 'react'
import Image from 'next/image'
import style from './whyHamgo.module.css'

// Images
import One from '../../../public/assets/imgs/one.jpg'
import Two from '../../../public/assets/imgs/two.jpg'
import Three from '../../../public/assets/imgs/three.jpg'
import Four from '../../../public/assets/imgs/four.png'
import Five from '../../../public/assets/imgs/five.png'
import Six from '../../../public/assets/imgs/six.png'


const Why_Hamgo = () => {
  return (
    <div className={style.whyHamgo}>
        <div className={style.whyHamgo_box}>
            <div className={style.header}>
                <h3>چرا همگو؟</h3>
                <p>هدف ما در همگو : پیوند آموزش به اشتغال</p>
            </div>

            <div className={style.boxs}>
                <div className={style.card}>
                    <Image src={One} alt="ناشر کتاب آنچه مشاور حقوقی باید بداند" />
                    <h3>ناشر کتاب آنچه مشاور حقوقی باید بداند</h3>
                    <p>کاربردی‌ترین کتاب حقوقی کشور جهت ارائه خدمت مشاور حقوقی به شرکت‌های تجاری</p>
                </div>
                
                <div className={style.card}>
                    <Image src={Five} alt="اولین برگزارکننده دوره پرورش مشاور حقوقی" />
                    <h3>اولین برگزارکننده دوره پرورش مشاور حقوقی</h3>
                    <p>گامی برای ارتقای مهارت و توانمندسازی مشاوران حقوقی</p>
                </div>
                
                <div className={style.card}>
                    <Image src={Three} alt="معرفی افراد مستعد به بازار کار" />
                    <h3>اشتغال‌زایی</h3>
                    <h4>معرفی افراد مستعد به بازار کار</h4>
                    <p>افراد علاقمند و رتبه‌های برتر دادبانان به شرکت‌های متقاضی مشاور حقوقی معرفی و توصیه می‌شوند</p>
                </div>
                
                <div className={style.card}>
                    <Image src={Four} alt="همکاری با بهترین اساتید کشور" />
                    <h3>همکاری با بهترین اساتید کشور</h3>
                    <p>دادبانان در هر حوزه تخصصی با برترین اساتید همکاری میکند</p>
                </div>
                
                <div className={style.card}>
                    <Image src={Two} alt="برگزاری بیش از 120 دوره حقوقی" />
                    <h3>برگزاری بیش از 120 دوره حقوقی</h3>
                    <h4>حضوری و آنلاین</h4>
                    <p>دادبانان مفتخر به برگزاری بیش از 120 دوره کاربردی به صورت حضوری و آنلاین است</p>
                </div>
                
                <div className={style.card}>
                    <Image src={Six} alt="بیش از 10 هزار مدرک معتبر" />
                    <h3>بیش از 10 هزار مدرک معتبر</h3>
                    <p>تا به امروز بیش از 10 هزار مدرک دانشگاه تهران به دانش‌پذیران اعطا گردیده است</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why_Hamgo