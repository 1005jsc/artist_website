import React from "react"
import Exhibition from '../exhibition/exhibition';
import ExhibitionInfo from '../exhibition_info/exhibition_info';
import styles from "./exhibitions.module.css";

const Exhibitions = () => {

  // 여기도 라우터로 exhibition을 클릭하면 해당 
  //exhibition 상세설명 페이지가 뜨게끔 
  return <section className={styles.exhibitions_container}>
  <h1 className={styles.title}>전시</h1>

<p className={styles.year}>2021</p>
<div className={`${styles.exhibitions_bundle}`}>
      <Exhibition/>
      <Exhibition/>
    </div>
    {/* <ExhibitionInfo/> */}


  
</section>

}
export default Exhibitions;