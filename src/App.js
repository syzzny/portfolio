import logo from './logo.svg';
import './App.css';
import {Routes, Router, Route} from 'react-router-dom'
import MainComp from './pages/MainComp';
import AboutComp from './pages/About/AboutComp'
import WorkComp from './pages/Works/WorksComp'
import Artwork from './pages/Works/InfoWorks/Artwork';
import MungMore from './pages/Works/InfoWorks/MungMore'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainComp/>}></Route>
        <Route path='/about' element={<AboutComp/>}></Route>
        <Route path='/works' element={<WorkComp/>}></Route>
        <Route path='/artwork' element={<Artwork/>}></Route>
        <Route path='/mungmore' element={<MungMore/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
