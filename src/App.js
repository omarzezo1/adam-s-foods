import Home from './pages/Home';
import './styles/main.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import ScrollToTop from './utilities/ScrollToTop'
import Shop from './pages/shop/Shop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
    <main className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </main>
    </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
