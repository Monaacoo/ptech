import Menu from './layout/Menu'
import './App.css'
import { Footer } from './layout/Footer'
import {Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home'

function App() {

  return (
   <div> 
    <Menu />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    <Footer />
   </div>
  )
}

export default App
