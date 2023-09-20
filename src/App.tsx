import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartList from './pages/CartList';
import Layout from './components/Layout';
import ProductList from './components/ProductList';
import DetailsProduct from './pages/DetailsProduct';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="search/:query" element={ <ProductList /> } />
        <Route path="category/:category" element={ <ProductList /> } />
      </Route>
      <Route path="/details/:id" element={ <DetailsProduct /> } />
      <Route path="/cart" element={ <CartList /> } />
    </Routes>
  );
}

export default App;
