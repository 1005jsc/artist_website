import React from "react"
import styles from "./public_route.module.css";
import { Navigate } from 'react-router-dom';


type PublicRouteProps = {
  login : boolean;
  children: React.ReactNode
}

const PublicRoute = ({login, children}: PublicRouteProps) => {

  if(!login){
    return <Navigate to="/main" replace={true}/> 
  }

  return children

}
export default PublicRoute;