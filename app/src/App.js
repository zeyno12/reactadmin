import React, { useState } from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Main from './components/pages/Main';
import Error from './components/error/Error';
import Navbar from './components/layout/Navbar';
import Sidebar from "./components/layout/Sidebar";
import Payment from './components/pages/Payment';
function App() {
  const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <BrowserRouter>
    <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>
    <Sidebar openSidebar={openSidebar}/>
    <Routes>
        <Route path='/' exact element={<Main setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='*' exact element={<Error/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
