import 'moment/locale/ko'
import moment from 'moment';
import { useLocation, useOutletContext } from 'react-router-dom';
import { TypeOfExhibition } from '../../../../../common/project_types';
import styles from "./work_exhibition_works.module.css";
import ExhibitionPhotoRight from '../../../small/exhibition_photo_right/exhibition_photo_right';
import ExhibitionPhotoLeft from '../../../small/exhibition_photo_left/exhibition_photo_left';
import WorkExhibitionWorksBySize from '../work_exhibition_works_by_size/work_exhibition_works_by_size';
import { useEffect, useState } from 'react';
import { ContextType } from '../work_exhibition/work_exhibition';




const WorkExhibitionWorks = () => {

  const {databaseService, backgroundImageUpdate}= useOutletContext<ContextType>();
  const [exhibitionWorksCount, setExhibitionWorksCount] = useState<number|null>(null)


  const location = useLocation()
  const exhibition1 = location.state as TypeOfExhibition[]
  const exhibition2 = exhibition1[0]


  const posterUrl1 = exhibition2.exhibitionPosterUrl
  const posterUrl2 = Object.values(posterUrl1?posterUrl1:'')[0]


  const startDate1 = moment(`${exhibition2.exhibitionStartDate}`, "YYYYMMDD").format('L') 
  const endDate1 = moment(`${exhibition2.exhibitionEndDate}`, "YYYYMMDD").format('L') 
  const startDate2 = startDate1.substring(0, startDate1.length-1)
  const endDate2 = endDate1.substring(0, endDate1.length-1)



  const exhibitionPhotoUrls = Object.values(exhibition2.exhibitionPhotoUrl?exhibition2.exhibitionPhotoUrl:'')

  useEffect(() => {

    if(exhibition2.exhibitionBuildingPhotoUrl){

      const backgroundImgUrl = exhibition2.exhibitionBuildingPhotoUrl[parseInt(Object.keys(exhibition2.exhibitionBuildingPhotoUrl)[0])] 
      backgroundImageUpdate(backgroundImgUrl)
    }

  }, [])
  useEffect(() => {
    if(exhibition2.exhibitionWorks){
      setExhibitionWorksCount(Object.keys(exhibition2.exhibitionWorks).length)
  
    }
  }, [])

  

  return <div className={styles.work_exhibition_works_container}>
    <div className={styles.metadata_container}>

      <div className={styles.img_container}>
        <img className={styles.exhibition_img} src={posterUrl2  } alt="" />
      </div>

      <div className={styles.data_container}>
          <p className={styles.p1}>{exhibition2.exhibitionTitle}</p>
          <p className={styles.p1}>{exhibition2.exhibitionName}</p>
          <p className={styles.p1}>{`${startDate2} ~ ${endDate2}`}</p>
          <p className={styles.p1}>장소 : {exhibition2.exhibitionLocation}</p>
          <p className={styles.p1}>총 {exhibitionWorksCount?exhibitionWorksCount:0}점</p>
      </div>
      
    </div>

    <div className={styles.exhibition_photo_cont}>

    {exhibitionPhotoUrls&&exhibitionPhotoUrls.map((url, index) => {
if(index%2==0){
  return <ExhibitionPhotoLeft key={index}url={url} datanumber={index}/>
}else{
  return <ExhibitionPhotoRight key={index} url={url} datanumber={index}/>

}

      })}
        


        
      </div>
      <WorkExhibitionWorksBySize exhibition={exhibition2}/>
  </div>

}
export default WorkExhibitionWorks;