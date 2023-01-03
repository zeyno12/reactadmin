import React, { useState } from 'react';
import  ReactDOM  from 'react-dom/client';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Main from './components/pages/Main';
import Error from './components/error/Error';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from "./components/layout/Sidebar";
function App() {
  const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <BrowserRouter>
    <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>
    <Sidebar openSidebar={openSidebar}/>
    <Routes>
        <Route path='/' exact element={<Main setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>} />
        <Route path='*' exact element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
