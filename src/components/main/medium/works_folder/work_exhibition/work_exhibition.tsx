import { url } from 'inspector';
import React from "react"
import { useNavigate } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import Exhibition from '../../exhibitions_folder/exhibition/exhibition';
import styles from "./work_exhibition.module.css";

const WorkExhibition = () => {

  const navigate = useNavigate()

  const navigateTo:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/main/works/${path}`)
    }
  }


  return <div className={styles.container3}>
      <p className={styles.poster_click_please}>- 포스터를 클릭하시면 전시된 작품들을 확인하실 수 있습니다 -</p>



    <div className={styles.poster_container} >

        <div className={styles.poster_click_container}>
          <p className={styles.year}>2021</p>
        </div>


        <div className={styles.exhibition_bundle_container} data-path='exhibition_works'onClick={navigateTo}>

            <div className={`${styles.exhibition_bundle}`}>
              <Exhibition/>
              
            </div>
            <div className={`${styles.exhibition_bundle}`}>
              <Exhibition/>
              
            </div>
        </div>    

    </div>


    <div className={styles.poster_container}>

        <div className={styles.poster_click_container}>
          <p className={styles.year}>2019</p>
        </div>


        <div className={styles.exhibition_bundle_container}  data-path='exhibition_works' onClick={navigateTo}>

            <div className={`${styles.exhibition_bundle}`}>
              <Exhibition/>
              
            </div>
            
        </div>    

    </div>


















  </div>

}
export default WorkExhibition;