import React from "react"
import 'moment/locale/ko'
import moment from 'moment';
import { TypeOfExhibition } from '../../../../../../common/project_types';
import styles from "./work_fix_selection_exhibition.module.css";
import { useNavigate } from 'react-router-dom';

type WorkFixSelectionExhibitionProps = {

  exhibition:TypeOfExhibition;
  sendExhibitionToUpperComponent:(exhibitionSerialNumber:number) => void
}



const WorkFixSelectionExhibition = ({exhibition, sendExhibitionToUpperComponent}:WorkFixSelectionExhibitionProps) => {

 

  const sendExhibitionData:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    
    sendExhibitionToUpperComponent(exhibition.exhibitionSerialNumber)
  
  }

  const startDate1 = moment(`${exhibition.exhibitionStartDate}`, "YYYYMMDD").format('L') 
  const endDate1 = moment(`${exhibition.exhibitionEndDate}`, "YYYYMMDD").format('L') 
  const startDate2 = startDate1.substring(0, startDate1.length-1)
  const endDate2 = endDate1.substring(0, endDate1.length-1)
  
  


  return <div className={styles.exhibition_bundle} >
    <div className={styles.exhibition_container}  onClick={sendExhibitionData}>
  <div className={styles.image_container}>
  <img className={styles.exhibition_img}src={Object.values(exhibition.exhibitionPosterUrl!)[0]} alt="" />
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
export default WorkFixSelectionExhibition;