import React, { Fragment } from 'react'
// Components
import HeaderSchool from '../../components/lawAndLandSchool/headerSchool'
import Courses from '../../components/lawAndLandSchool/courses'
import SuggestedPackages from '../../components/lawAndLandSchool/suggestedPackages'
import Why_Hamgo from '../../components/lawAndLandSchool/whyHamgo'
import FreeCourses from '../../components/lawAndLandSchool/freeCourses'
import DataHamgo from '../../components/lawAndLandSchool/dataHamgo'

const LawAndLandSchool = () => {
  return (
    <Fragment>
        <HeaderSchool />
        <Courses />
        <SuggestedPackages />
        <Why_Hamgo />
        <FreeCourses />
        <DataHamgo />
    </Fragment>
  )
}

export default LawAndLandSchool;

LawAndLandSchool.layout= "L2";