import './App.css';
import Carrucel from './Component/carrucel';
import Footer from './Component/Footer';
import NavBar from './Component/Navbar'
import TrabajosRalisamos from './Component/TrabajosRalisamos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carrucel />
      <TrabajosRalisamos />
      <Footer />
    </div>
  );
}

export default App;
