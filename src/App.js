import React from 'react';
import Home from './pages/home/Home';
import './styles/main.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AboutUs from './pages/home/AboutUs';
import ScrollToTop from './utilities/ScrollToTop'
import Shop from './pages/shop/Shop';
import Contacts from './pages/home/Contacts';
import SingleBlog from './pages/blog/SingleBlog';
import Blogs from './pages/blog/Blogs';
import AllArticles from './pages/blog/AllArticles';
import SingleProduct from './pages/shop/SingleProduct';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
    <main className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/product' element={<SingleProduct/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/all-articles' element={<AllArticles/>}/>
        <Route path='/blogs/blog' element={<SingleBlog/>}/>
      </Routes>
    </main>
    </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
