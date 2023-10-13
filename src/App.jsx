
import './App.css'
import Body from './comoponents/Body'
import PujaPage from './comoponents/PujaPage'
// import IndividualPuja from './comoponents/forms/individualPuja/IndividualPuja'
import Footer from './comoponents/Footer'
import Header from './comoponents/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PujaForm from './comoponents/forms/PujaForm'
import PrivacyPolicy from './comoponents/subComponent/PrivacyPolicy/PrivacyPolicy'
import Cancellation from './comoponents/subComponent/Cancellation/Cancellation'

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/puja/:firstword' element={<PujaPage />} />
          <Route path='/puja-booking' element={<PujaForm />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/cancellation' element={<Cancellation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
