import React from 'react';
import Sidebar from '../scenes/global/Sidebar';
import Topbar from '../scenes/global/Topbar';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
    
    <div style={{display:"flex"}}>
    <Sidebar/>
    <div style={{display:"flex", flexDirection:"column"}}>
    <Topbar/>
    <Outlet />
    </div>
      
    </div>
    </>
  );
};
