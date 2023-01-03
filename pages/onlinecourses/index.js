import React, { Fragment } from 'react'
// Components
import SectionOne from '../../components/onlineCourses/sectionOne';
import BestSellingCourses from '../../components/onlineCourses/bestSellingCourses';
import HamgoPerofessors from '../../components/onlineCourses/hamgoPerofessors';
import WhyHamgoCourses from '../../components/onlineCourses/whyHamgoCourses';

// Images
import Img from '/public/assets/imgs/onlinecourses/cours.jpg';

const OnlineCourses = ({ listCourses, }) => {
  return (
    <Fragment>
      <SectionOne />
      <BestSellingCourses title='پرفروش‌ترین دوره‌ها' data={listCourses} link='/' />
      <HamgoPerofessors />
      <BestSellingCourses title='جدیدترین دوره‌ها' data={listCourses} link='/' />
      <WhyHamgoCourses />
      <BestSellingCourses title='همه دوره‌ها' data={listCourses} link='/' />
    </Fragment>
  )
}

export default OnlineCourses;

OnlineCourses.layout= "L2";

OnlineCourses.defaultProps = {
  listCourses: [
      {
          id: 1,
          title: "داستان زندگی وان بارف",
          category: "وان بارف",
          time: 100,
          students: 15,
          image: Img,
          url: ''
      },
      {
          id: 2,
          title: "گفتگو با مارک زاکربرگ",
          category: "زاکربرگ",
          time: 220,
          students: 9,
          image: Img,
          url: ''
      },
      {
          id: 3,
          title: "تستی 1",
          category: "تست",
          time: 30,
          students: 30,
          image: Img,
          url: ''
      },
      {
          id: 4,
          title: "وان بارف کجاست؟",
          category: "وان بارف",
          time: 180,
          students: 24,
          image: Img,
          url: ''
      },
      {
          id: 5,
          title: "تستی 2",
          category: "تست",
          time: 100,
          students: 10,
          image: Img,
          url: ''
      },
  ],
}