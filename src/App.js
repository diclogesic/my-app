import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './componentes/NavBar/NavBar'
import ItemListProducts from './componentes/ItemListProducts/ItemListProducts';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import HomePage from './Pages/Home';
import ContactPage from './Pages/Contact';


function App() {
  return (

    <div className="App">
      <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path="/contacto" element={<ContactPage />}/>
        <Route path="/home" element={<HomePage />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
