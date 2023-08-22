import { useState } from 'react'
import NavbarComponent from './components/layouts/navbar'
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelaLogin from './components/pages/telaLogin';
import Home from './components/pages/Home';
import SidebarMenu from './components/layouts/sidebarMenu';




function App() {
  const [logado, setlogado] = useState(true)

  return (
        <>
          <BrowserRouter>
          { logado ? <SidebarMenu/> : '' }
              <Routes>
                    <Route path="/" element={<TelaLogin/>}/>
                    <Route path="/home" element={logado ? <Home/> : <TelaLogin/>}/>
              </Routes>        
          </BrowserRouter>     
        </>
  )
}

export default App
