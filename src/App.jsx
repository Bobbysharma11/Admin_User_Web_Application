// eslint-disable-next-line no-unused-vars
import {useState} from 'react';
import './App.css';

import Sidebar from './Sidebar';
import Header from './Header';
import Home from './Home';

function App() {
  const[openSidebarToggle, setOpenSidebarToggle]=useState(false)
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className ='grid-container'>
  
     <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Header OpenSidebar={OpenSidebar}/>
    <Home/>
    
    </div>
  );
}

export default App
