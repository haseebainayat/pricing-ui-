import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about'

function App() {
  return (
    <div className="">
    
            <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
<Route path='/2ndpage' element={<About/>} />
</Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;