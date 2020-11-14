import './App.css';
import Carrucel from './Component/carrucel';
import NavBar from './Component/Navbar'
import TrabajosRalisamos from './Component/TrabajosRalisamos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carrucel />
      <TrabajosRalisamos />
    </div>
  );
}

export default App;
