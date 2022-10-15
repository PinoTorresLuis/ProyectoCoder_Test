import {BrowserRouter} from 'react-router-dom'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import NavBar from './Components/Navbar/NavBar'
import Pilares from './Components/Pilares/Pilares'

import './index.scss'


function App() {

  return (
  <BrowserRouter>

        <div className="App">
          <NavBar/>
            <Main/>
            <About/>
            <Pilares/>
            <Footer/>
        </div>

  </BrowserRouter>
  )
}

export default App