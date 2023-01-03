import React, { Fragment } from 'react'
// Components
import SuggestedCourse from '../../components/courses/suggestedCourse'
import Courses_Data from '../../components/courses/coursesData'
import HowToHold from '../../components/courses/howToHold'
import Headlines from '../../components/courses/headlines'
import Features from '../../components/courses/features'

const Courses = () => {
  return (
    <Fragment>
        <div className='w-full flex items-center justify-start flex-col'>
            <div className='w-11/12 flex items-center justify-start flex-col my-8'>
                <SuggestedCourse />
                <Courses_Data />
                <HowToHold />
                <Headlines />
                <Features />
            </div>
        </div>
    </Fragment>
  )
}

export default Courses;

Courses.layout= "L2";