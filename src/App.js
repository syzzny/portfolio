import logo from './logo.svg';
import './App.css';
import {Routes, Router, Route} from 'react-router-dom'
import MainComp from './pages/MainComp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainComp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
