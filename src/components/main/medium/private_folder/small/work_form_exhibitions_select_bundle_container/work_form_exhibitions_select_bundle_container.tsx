import React from "react"
import styles from "./work_form_exhibitions_select_bundle_container.module.css";
import WorkFormExhibitionsSelectExhibition from './../work_form_exhibitions_select_exhibition/work_form_exhibitions_select_exhibition';

type WorkFormExhibitionsSelectBundleContainerProps = {
  arrayAboutWorkYearAndWork: any[]
  sendExhibitionToUpperComponent:(exhibitionSerialNumber:number, exhibitionName:string) => void
  exhibitionOnClickArray : number[]
}



const WorkFormExhibitionsSelectBundleContainer = ({sendExhibitionToUpperComponent,arrayAboutWorkYearAndWork, exhibitionOnClickArray}:WorkFormExhibitionsSelectBundleContainerProps) => {

  const string1 = arrayAboutWorkYearAndWork[0]
  const array1 = arrayAboutWorkYearAndWork.slice(1)



  return <div className={styles.poster_container} >

  <div className={styles.poster_click_container}>
    <p className={styles.year}>{string1}</p>
  </div>


  <div className={styles.exhibition_bundle_container} >

      {array1.map((exhibition, index) => {
        return <WorkFormExhibitionsSelectExhibition exhibitionOnClickArray={exhibitionOnClickArray} sendExhibitionToUpperComponent={sendExhibitionToUpperComponent}key={index} exhibition={exhibition}/>})

      }


        
        
  </div>    

</div>

}
export default WorkFormExhibitionsSelectBundleContainer;