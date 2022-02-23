import React, { useEffect, useState } from "react"
import 'moment/locale/ko'
import moment from 'moment';
import { TypeOfExhibition } from '../../../../../../common/project_types';
import styles from "./work_form_exhibitions_select_exhibition.module.css";
import { useNavigate } from 'react-router-dom';

type WorkFormExhibitionsSelectExhibitionProps = {
  exhibitionOnClickArray : number[]
  exhibition:TypeOfExhibition;
  sendExhibitionToUpperComponent:(exhibitionSerialNumber:number, exhibitionName:string) => void
}



const WorkFormExhibitionsSelectExhibition = ({exhibition, exhibitionOnClickArray, sendExhibitionToUpperComponent}:WorkFormExhibitionsSelectExhibitionProps) => {

  const [workOnClick, setWorkOnClick] = useState<boolean>(false)



  useEffect(() => {
    if(exhibitionOnClickArray.find((value) => value === exhibition.exhibitionSerialNumber)){
    setWorkOnClick(true)
  }else{
      setWorkOnClick(false)
    
    }
  }, [exhibitionOnClickArray])

  const sendExhibitionData:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    if(exhibition.exhibitionName){

      sendExhibitionToUpperComponent(exhibition.exhibitionSerialNumber, exhibition.exhibitionName)
    }else{
      sendExhibitionToUpperComponent(exhibition.exhibitionSerialNumber, 'default_exhibition_name')

    }
  
  }

  const startDate1 = moment(`${exhibition.exhibitionStartDate}`, "YYYYMMDD").format('L') 
  const endDate1 = moment(`${exhibition.exhibitionEndDate}`, "YYYYMMDD").format('L') 
  const startDate2 = startDate1.substring(0, startDate1.length-1)
  const endDate2 = endDate1.substring(0, endDate1.length-1)
  
  


  return <div className={styles.exhibition_bundle} >
    <div className={workOnClick?`${styles.exhibition_container} ${styles.onclick}`:`${styles.exhibition_container}`}  onClick={sendExhibitionData}>
  <div className={styles.image_container}>
  <img className={styles.exhibition_img}src={exhibition.exhibitionPosterUrl?Object.values(exhibition.exhibitionPosterUrl)[0]:''} alt="" />
  </div>  
  <div className={styles.exhibition_metadata}>
    <p className={styles.p1}>{exhibition.exhibitionTitle}</p>
    <p className={styles.p1}>{exhibition.exhibitionName}</p>
    <p className={styles.p1}>{`${startDate2} ~ ${endDate2}`}</p>
    <p className={`${styles.p1} ${styles.total_count}`}>총 점</p>

  </div>

</div>
</div>
}
export default WorkFormExhibitionsSelectExhibition;