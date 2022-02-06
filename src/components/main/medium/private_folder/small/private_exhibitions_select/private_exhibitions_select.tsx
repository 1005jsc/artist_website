import React from "react"
import PrivateExhibition from '../private_exhibition/private_exhibition';
import styles from "./private_exhibitions_select.module.css";

const PrivateExhibitionsSelect = () => {

  return <div className={styles.container3}>
    <div className={styles.measurement}></div>


<div className={styles.poster_container} >

    <div className={styles.poster_click_container}>
      <p className={styles.year}>2021</p>
    </div>


    <div className={styles.exhibition_bundle_container} >

        <div className={`${styles.exhibition_bundle}`} >
          <PrivateExhibition/>
          
        </div>
        <div className={`${styles.exhibition_bundle}`} >
          <PrivateExhibition/>
          
        </div>
    </div>    

</div>


<div className={styles.poster_container}>

    <div className={styles.poster_click_container}>
      <p className={styles.year}>2019</p>
    </div>


    <div className={styles.exhibition_bundle_container} >

        <div className={`${styles.exhibition_bundle}`}  >
          <PrivateExhibition/>
          
        </div>
        
    </div>    

</div>


















</div>

}
export default PrivateExhibitionsSelect;