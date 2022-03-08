import React, { useEffect, useState } from "react"
import styles from "./fullscreen.module.css";
import { useNavigate } from 'react-router-dom';
import  styled  from 'styled-components';
import { TypeOfPhotoAssets, TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import { myLogics } from '../../../../../common/project_logics';
import { myFunctions } from './../../../../../common/project_functions';

type FullscreenProps = {
  databaseService: Database
}



const Fullscreen = ({databaseService}: FullscreenProps) => {


  const [works, setWorks] = useState<TypeOfWork[]>([])
  const [i, setI] = useState<number[]>([0])
  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      const yearAndWorksSortedByYearResult = myLogics.yearAndWorksSortedByYear(data)
    setWorks(myLogics.worksSortedByYear(yearAndWorksSortedByYearResult))


    })
    return () => yes()
  }, [])


  
let workFullscreen
  if(works !== []){
    if(works[i[0]]){
      // console.log(works)
      let yes2
      const iNumber = i[0]
      if(works[iNumber].workImageUrl){
        yes2 = works[iNumber].workImageUrl as TypeOfPhotoAssets
        workFullscreen = (myFunctions.imageUrlMakerByRequestedQuality(
          Object.values(yes2)[0], 'full-screen'))
      }
    }
  }



  const Fullscreen = styled.div`
  display: flex;
	// justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99;
	// max-width: 144rem;
	background-color: rgba(0, 0, 0);
  
  `


  const navigate = useNavigate()
  
  const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    navigate(`/main/works`)
  }





  const handleArrowClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.direction
    
    if(path === 'back'){
      const yes = [...i]
      if(yes[0] <= 0){

        yes[0] = works.length -1;
        console.log(yes[0])
        setI(yes)
      }else{
        yes[0] = yes[0]-1
        setI(yes)

      } 
    
    }else if (path === 'front'){
      const yes = [...i] 
      if(yes[0] >= works.length -1){
        yes[0] = 0
        setI(yes)
      }else{
        yes[0] = yes[0]+1
        setI(yes)

      }

    }


  }









  return <Fullscreen>
    <div className={styles.div_for_space}></div>
    <img className={styles.work_img} src={workFullscreen} alt="" />
    <div className={styles.div_for_space}>
      <div className={styles.remote_control}>
          <button className={styles.menu_button} onClick={navigateTo}>menu</button>
          <div className={styles.menu}>
              <button className={styles.menu_option}>자동재생</button>
                <div className={styles.black_line}></div>
              <button className={styles.menu_option}>홈 화면</button>
          </div>
          <div className={styles.arrows}>
              <button className={styles.arrow} data-direction="back" onClick={handleArrowClick}><img className={styles.left}src="/icons/left_arrow_carot.svg" alt="" /> </button>
              <button className={styles.arrow} data-direction="front" onClick={handleArrowClick}><img className={styles.right}src="/icons/right_arrow_carot.svg" alt="" /></button>
          </div>
      </div>

    </div>
    <div className=""></div>


  </Fullscreen>

}
export default Fullscreen;