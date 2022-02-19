import 'moment/locale/ko'
import moment from 'moment';
import React from "react"
import { useNavigate } from 'react-router-dom';
import { TypeOfExhibition } from '../../../../../common/project_types';
import styles from "./exhibition.module.css";


type ExhibitionProps = {
  exhibition:TypeOfExhibition;
}


const Exhibition = ({exhibition}:ExhibitionProps) => {



  const navigate = useNavigate()

  const navigateTo:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    
    
  const urlWordSearchRegex = /(?:\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/
  const urlNow = window.location.href 
  
  const result = urlNow.match(urlWordSearchRegex)
  const path = e.currentTarget.dataset.path
  
  if(result?.includes('/works')){
    console.log('works')

    navigate(`/main/works/${path!}`, {
      state: [exhibition]
      
    } )
  }else if(result?.includes('/exhibitions')){

    navigate(`/main/exhibitions/${path!}`, {
      state: [exhibition]
      
    })
    console.log('exhibitions')
  }
  }

  console.log(exhibition.exhibitionStartDate)
  console.log(exhibition.exhibitionEndDate)
  const startDate1 = moment(`${exhibition.exhibitionStartDate}`, "YYYYMMDD").format('L') 
  const endDate1 = moment(`${exhibition.exhibitionEndDate}`, "YYYYMMDD").format('L') 
  const startDate2 = startDate1.substring(0, startDate1.length-1)
  const endDate2 = endDate1.substring(0, endDate1.length-1)
  
  
  
  







  return <div className={styles.exhibition_bundle} >
    <div className={styles.exhibition_container} data-path='exhibition_works'onClick={navigateTo}>
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
export default Exhibition;