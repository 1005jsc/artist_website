import React, { useState } from "react"
import styles from "./exhibitions.module.css";
import { Outlet } from 'react-router-dom';
import Database from '../../../../../services/database';

type ExhibitionProps = {
  databaseService: Database;
}


const Exhibitions = ({databaseService}:ExhibitionProps) => {

  const [bulidingPhotoUrl, setBulidingPhotoUrl] = useState<string|null>(null)


  const backgroundImageUpdate = (backgroundImageUrl:string) => {
  if(backgroundImageUrl){
    setBulidingPhotoUrl(backgroundImageUrl)
  }
    
  }







  return <section className={styles.container}>
  
  {<div className={styles.background_img}>
    <img src={bulidingPhotoUrl?bulidingPhotoUrl:''} alt="" /></div>}
  <div className={styles.container2}>
    <div className={styles.title_container}>
  <span className={styles.title}>전시</span>
  </div>
    <Outlet context={{databaseService, backgroundImageUpdate}}/>


    </div>
</section>

}
export default Exhibitions;

