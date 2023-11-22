import Home from './pages/Home';
import './styles/main.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './utilities/Navbar';

function App() {
  return (
    <BrowserRouter>
    <main className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
