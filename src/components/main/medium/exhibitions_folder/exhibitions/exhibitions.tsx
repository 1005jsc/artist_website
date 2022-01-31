import React from "react"
import Exhibition from '../exhibition/exhibition';
import ExhibitionInfo from '../exhibition_info/exhibition_info';
import styles from "./exhibitions.module.css";
import WorkExhibition from './../../works_folder/work_exhibition/work_exhibition';

const Exhibitions = () => {

  return <section className={styles.container}>
  
  <div className={styles.container2}>
  <span className={styles.title}>전시</span>


    <WorkExhibition/>


    </div>
</section>

}
export default Exhibitions;