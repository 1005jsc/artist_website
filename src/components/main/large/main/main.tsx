import React, { useEffect, useState } from "react"
import AuthService from '../../../../services/auth';
import ContentBox from '../content_box/content_box';
import NabvarLeft from '../navbar_left/navbar_left';
import styles from "./main.module.css";

import { HandleLoginType } from '../../../../common/project_types';

type MainProps = {
  login: boolean;
  handleLogin: HandleLoginType;
}


const Main = ({handleLogin, login}:MainProps) => {

  

  




  return <section className={styles.main}>
    <div className={styles.left}><NabvarLeft loginState={login}/></div>
    <div className={styles.left_empty}></div>
    <div className={styles.content_box}><ContentBox loginState={login} handleLogin={handleLogin}/></div>

    
</section>

}
export default Main;