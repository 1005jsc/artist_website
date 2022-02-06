import React from "react"
import { Navigate } from 'react-router-dom';

type PrivateRoute2 = {
  children: JSX.Element
  login: boolean
}


const PrivateRoute2 = ({children, login}:PrivateRoute2) => {

  return login ? children : <Navigate to='/main/private' replace={true}/>

}
export default PrivateRoute2;