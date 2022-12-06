import { Fragment } from 'react'
import Nav from './nav'

const HomeLayout = (props) => {
  return (
    <Fragment>
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full max-w-[3000px] h-full flex flex-col items-center justify-center relative">
                <header className="w-full border-b bordr-b-[1px] border-b-borderNav z-50 flex items-center justify-center fixed right-0 top-0 shadow-normal">
                    <Nav />
                </header>
                <main className="w-full min-h-[100vh] z-40 flex flex-col items-center justify-start">
                    {props.children}
                </main>
            </div>
        </div>
    </Fragment>
  )
}

export default HomeLayout