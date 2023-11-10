import NavBar from './components/NavBar/NavBar'
import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item" element={<ItemDetailContainer itemId={1}/>} />
        </Routes>

  
      </BrowserRouter>
    </div>
      
    
    
  
  );
}

export default App;
