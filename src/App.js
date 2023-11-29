import Home from './pages/Home';
import './styles/main.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import ScrollToTop from './utilities/ScrollToTop'
import Shop from './pages/shop/Shop';
import Contacts from './pages/Contacts';

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
      </Routes>
    </main>
    </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
