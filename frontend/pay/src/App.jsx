import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import Paymentsuccess from './components/Paymentsuccess'

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Paymentsuccess />} />
      </Routes>
    
  )
}

export default App
