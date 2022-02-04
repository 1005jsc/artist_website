import React from 'react';
import Biography from '../../medium/biography_folder/biography/biography';
import NavbarTop from '../navbar_top/navbar_top';

import styles from './content_box.module.css'
import { Outlet} from 'react-router-dom';
import { HandleLoginType } from '../../../../common/project_types';




type ContentBoxProps = {
  loginState: boolean
  handleLogin : HandleLoginType
}




const ContentBox = ({handleLogin, loginState}:ContentBoxProps) => {

  return <section className={styles.content_box}>
  <div className={styles.navbar_top}><NavbarTop/></div>

  <Outlet context={{handleLogin, loginState}}/>
  

  </section>

}



export default ContentBox;



