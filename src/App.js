import Home from './pages/Home';
import './styles/main.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './utilities/Navbar';
import AboutUs from './pages/AboutUs';
import Footer from './utilities/Footer';
import ScrollToTop from './utilities/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
    <main className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </main>
    </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
