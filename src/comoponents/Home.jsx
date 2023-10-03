import React from 'react'
import './Home.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import PujaPage from './PujaPage'
import IndividualPuja from './forms/individualPuja/IndividualPuja'

function Home() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
            {/* <PujaPage /> */}
            {/* <IndividualPuja /> */}
        </div>
    )
}

export default Home