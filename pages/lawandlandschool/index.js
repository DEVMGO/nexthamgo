import React, { Fragment } from 'react'
// Components
import HeaderSchool from '../../components/lawAndLandSchool/headerSchool'
import Courses from '../../components/lawAndLandSchool/courses'
import Introduction from '../../components/lawAndLandSchool/introduction'
import SuggestedPackages from '../../components/lawAndLandSchool/suggestedPackages'
import Why_Hamgo from '../../components/lawAndLandSchool/whyHamgo'
import FreeCourses from '../../components/lawAndLandSchool/freeCourses'
import DataHamgo from '../../components/lawAndLandSchool/dataHamgo'
import InPersonEvents from '../../components/lawAndLandSchool/inPersonEvents'
import NonPersonEvents from '../../components/lawAndLandSchool/nonPersonEvents'
import Professors from '../../components/lawAndLandSchool/professors'
import Partnership from '../../components/lawAndLandSchool/partnership'

const LawAndLandSchool = () => {
  return (
    <Fragment>
        <HeaderSchool />
        <Courses />
        <Introduction />
        <SuggestedPackages />
        <Why_Hamgo />
        <FreeCourses />
        <DataHamgo />
        <InPersonEvents />
        <NonPersonEvents />
        <Professors />
        <Partnership />
    </Fragment>
  )
}

export default LawAndLandSchool;

LawAndLandSchool.layout= "L2";