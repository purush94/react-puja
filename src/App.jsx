
import './App.css'
import Body from './comoponents/Body'
import PujaPage from './comoponents/PujaPage'
import IndividualPuja from './comoponents/forms/individualPuja/IndividualPuja'
import Footer from './comoponents/Footer'
import Header from './comoponents/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/puja/:firstword' element={<PujaPage />} />
          <Route path='/puja-booking' element={<IndividualPuja />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
