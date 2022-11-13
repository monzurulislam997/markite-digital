import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Footer/Footer';
import TemplatesDashboard from './Components/Templates/TemplatesDashboard';
import Support from './Components/Support/Support';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import SingleProductShow from './Components/Templates/SingleProductShow';
import { ScrollToTop } from 'react-simple-scroll-up'
import CheackOut from './Components/cheakOut/CheackOut';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div >
      <div className='App'>
      <ScrollToTop bgColor='white' symbolColor='#16a34a' symbolSize='40px' strokeFillColor='#10b981' />
    </div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/buy' element={<TemplatesDashboard></TemplatesDashboard>}></Route>
        <Route path='/checkout' element={<CheackOut></CheackOut>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/support' element={<Support></Support>}></Route>
        <Route path='/singleproduct/:id' element={<SingleProductShow></SingleProductShow>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
