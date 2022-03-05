import { BrowserRouter, Route, Routes } from 'react-router-dom';

// COMPONENTS
import Nav from "./Components/Nav/Nav";
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nosotros from './Components/Nosotros/Nosotros';
import Contacto from './Components/Contacto/Contacto';
import Trabajos from './Components/Trabajos/Trabajos';

function App() {
  return (
    <BrowserRouter>
    <div class="bg-white">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/nosotros' element={<Nosotros/>} />
        <Route exact path='/contacto' element={<Contacto/>} />
        <Route exact path='/trabajos' element={<Trabajos/>} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
