import React from "react"
import Exhibition from '../exhibition/exhibition';
import ExhibitionInfo from '../exhibition_info/exhibition_info';
import styles from "./exhibitions.module.css";
import WorkExhibition from './../../works_folder/work_exhibition/work_exhibition';
import { Outlet } from 'react-router-dom';

const Exhibitions = () => {

  return <section className={styles.container}>
  
  {<div className={styles.background_img}>
    <img src="/img/asset_img/exhibitions/20210507guk_yoon/museum_photo/guk_yoon_photo.jpg" alt="" /></div>}
  <div className={styles.container2}>
    <div className={styles.title_container}>
  <span className={styles.title}>전시</span>
  </div>
    <Outlet/>


    </div>
</section>

}
export default Exhibitions;

