import { Fragment } from 'react'
import { NextSeo } from "next-seo";
// Components
import Slider from '../components/home/slider';

export default function Home() {
  return (
    <Fragment>
      <NextSeo title="همگو"></NextSeo>
      <Slider />
    </Fragment>
  )
}

Home.layout = "L1";