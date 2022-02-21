import React, { useEffect, useState } from "react"
import { useLocation } from 'react-router-dom';
import { TypeOfWorks } from '../../../../../common/project_types';
import WorkImageUpload from '../../../../../services/work_image_uploads';
import WorkFixFormTwoWork from '../work_fix_form_two_work/work_fix_form_two_work';
import WorkFixFormTwoWorkVertical from '../work_fix_form_two_work_vertical/work_fix_form_two_work_vertical';
import WorkUploadForm from '../work_upload_form/work_upload_form';
import styles from "./work_fix_form_two.module.css";

type WorkFixFormTwo = {
  workImageUploadService:WorkImageUpload;

}

const WorkFixFormTwo = ({workImageUploadService: workImageUploadService}:WorkFixFormTwo) => {
  
  const [exhibitionWorksOnClick, setExhibitionWorksOnClick]= useState<Array<number>>([])
  const [exhibitionWorksOnClickUrls, setExhibitionWorksOnClickUrls] = useState<TypeOfWorks|null>(null)
  
  const location = useLocation()
  
  useEffect(() => {
    const locationState = location.state as Array<any>
    const array1 = locationState[0] as number[]
    const object1 = locationState[1] as TypeOfWorks
    const array2 = [...array1]
    const object2 = {...object1}
    
    setExhibitionWorksOnClick(array2)
    setExhibitionWorksOnClickUrls(object2)
    


  }, [])
  const worksArray = exhibitionWorksOnClick.map((serialNumber) => {
    if(exhibitionWorksOnClickUrls){
      return exhibitionWorksOnClickUrls[serialNumber]
    }
  })


  return <section className={styles.fix_from_sec}>
  <div className={styles.explanations_container}>
    <h2 className={styles.explanation}>- 수정할 작품을 하나씩 클릭하고 수정하면 됨 </h2>
  </div>

  <div className={styles.works_to_fix_container}>
    <span className={styles.s1}>수정할 작품들</span>

    <div className={styles.grey_container}>

    <div className={`${styles.work_bundle}`}>
    {worksArray.map((work, index) => {

      const object2 = worksArray[index]
  if(object2){
    if(object2.workHorizontalOrVertical=='horizontal'){
        return <WorkFixFormTwoWork  key={index} work={work!}/>
      }else{
        return <WorkFixFormTwoWorkVertical  key={index} work={work!} />
      }
  }      
  })}
    </div>
    
    


    </div>
    <WorkUploadForm workImageUploadService={workImageUploadService}/>

  </div>
























</section>

}
export default WorkFixFormTwo;