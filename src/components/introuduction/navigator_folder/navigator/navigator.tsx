import React, { useEffect, useState } from "react"
import { Outlet } from 'react-router-dom';
import styles from "./navigator.module.css";
import { NavigatorSection } from './navigator.style';

const Navigator = () => {



  return <NavigatorSection >
      
      <Outlet/>
      
    </NavigatorSection> 
}
export default Navigator;

