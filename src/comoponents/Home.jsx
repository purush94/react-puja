import React from 'react'
import './Home.css'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import PujaPage from './PujaPage'
import IndividualPuja from './forms/individualPuja/IndividualPuja'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function Home() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<Body />} />
                    <Route path='/puja' element={<PujaPage />} />
                    <Route path='/puja-details' element={<IndividualPuja />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default Home