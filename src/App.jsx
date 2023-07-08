import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './pages/ItemDetailContainer'
import ItemListContainer from './pages/ItemListContainer';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAChbA88TgbIa8dj7Bg6KCEAeFrBf0XWk",
  authDomain: "dry-meat.firebaseapp.com",
  projectId: "dry-meat",
  storageBucket: "dry-meat.appspot.com",
  messagingSenderId: "336826861996",
  appId: "1:336826861996:web:fe757fe46a3b0d71c99209"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
