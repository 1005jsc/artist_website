import React from "react"
import styles from "./work_fix_selection_bundle_container_exhibition.module.css";
import WorkFixSelectionExhibition from './../work_fix_selection_exhibition/work_fix_selection_exhibition';

type WorkFixSelectionBundleContainerExhibitionProps = {
  arrayAboutWorkYearAndWork: any[]
  sendExhibitionToUpperComponent:(exhibitionSerialNumber:number) => void

}



const WorkFixSelectionBundleContainerExhibition = ({sendExhibitionToUpperComponent,arrayAboutWorkYearAndWork}:WorkFixSelectionBundleContainerExhibitionProps) => {

  const string1 = arrayAboutWorkYearAndWork[0]
  const array1 = arrayAboutWorkYearAndWork.slice(1)



  return <div className={styles.poster_container} >

  <div className={styles.poster_click_container}>
    <p className={styles.year}>{string1}</p>
  </div>


  <div className={styles.exhibition_bundle_container} >

      {array1.map((exhibition, index) => {
        return <WorkFixSelectionExhibition sendExhibitionToUpperComponent={sendExhibitionToUpperComponent}key={index} exhibition={exhibition}/>})

      }


        
        
  </div>    

</div>

}
export default WorkFixSelectionBundleContainerExhibition;