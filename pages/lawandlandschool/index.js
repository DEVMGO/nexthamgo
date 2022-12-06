import React, { Fragment } from 'react'
import Courses from '../../components/lawAndLandSchool/courses'
import SuggestedPackages from '../../components/lawAndLandSchool/suggestedPackages'
import Why_Hamgo from '../../components/lawAndLandSchool/whyHamgo'

const LawAndLandSchool = () => {
  return (
    <Fragment>
        <Courses />
        <SuggestedPackages />
        <Why_Hamgo />
    </Fragment>
  )
}

export default LawAndLandSchool;

LawAndLandSchool.layout= "L2";