import React from "react"
import Exhibition from '../exhibition/exhibition';
import styles from "./exhibition_bundle_container.module.css";

type ExhibitionBundleContainerProps = {
  arrayAboutWorkYearAndWork: any[]
}

const ExhibitionBundleContainer = ({arrayAboutWorkYearAndWork}:ExhibitionBundleContainerProps) => {

  const string1 = arrayAboutWorkYearAndWork[0]
  const array1 = arrayAboutWorkYearAndWork.slice(1)



  console.log(array1)
  return <div className={styles.poster_container} >

  <div className={styles.poster_click_container}>
    <p className={styles.year}>{string1}</p>
  </div>


  <div className={styles.exhibition_bundle_container} >

      {array1.map((exhibition, index) => {
        return <Exhibition key={index} exhibition={exhibition}/>})

      }


        
        
  </div>    

</div>

}
export default ExhibitionBundleContainer;