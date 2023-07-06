import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './pages/ItemDetailContainer'
import ItemListContainer from './pages/ItemListContainer';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting="Bienvenidos a Dry-Meat"/>}/>
          <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
