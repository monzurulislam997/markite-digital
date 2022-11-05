import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
