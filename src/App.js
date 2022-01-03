import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/views/Main/Main";
import SignIn from "./components/views/SignIn/SignIn";
import Account from "./components/views/Account/Account";
import ProductPage from './components/views/ProductPage/ProductPage';
import Wishlist from './components/views/Wishlist/Wishlist';
import ShoppingCart from './components/views/ShoppingCart/ShoppingCart';
import colors from './utils/themeUtils';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='viewContainer'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="/account" element={<Account />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
