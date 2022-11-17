import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar';

import TemplatesDashboard from './Components/Templates/TemplatesDashboard';
import Support from './Components/Support/Support';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';

import SingleProductShow from './Components/Templates/SingleProductShow';
import { ScrollToTop } from 'react-simple-scroll-up'
import CheackOut from './Components/cheakOut/CheackOut';
import Cart from './Components/Cart/Cart';
import SignUpForSeller from './Components/SignUpForSeller/SignUpForSeller';
import SignupCustomer from './Components/SignupCustomer/SignupCustomer';
import { ToastContainer } from 'react-toastify';
import Dashbord from './Components/dashboard/Dashbord';
import RequireAuth from './Components/requireAuth/RequireAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import Loadder from './Components/Lodder/Loadder';

function App() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  })
  if (isLoading) {
    return <Loadder></Loadder>
  }

  return (
    <div >
      <div >
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
        <Route path='/signup/customer' element={<SignupCustomer></SignupCustomer>}></Route>
        <Route path='/signup/seller' element={<SignUpForSeller />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashbord /></RequireAuth>}></Route>


      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
