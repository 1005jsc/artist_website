import React from "react"
import styles from "./private_route.module.css";
import { Navigate, Outlet } from 'react-router-dom';



type PrivateRouteProps = {
  login : boolean;
}



const PrivateRoute = ({login, ...rest}: PrivateRouteProps) => {

  if(!login){
    return <Navigate to="/home/private" replace={true}/> 
  }
  

  return <Outlet context={{...rest}}/>

}
export default PrivateRoute;