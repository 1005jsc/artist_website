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


  const navigate = useNavigate()
  
  const [works, setWorks] = useState<TypeOfWork[]>([])
  const [i, setI] = useState<number>(0)

  
  const [menuOnClick, setMenuOnClick] = useState<boolean>(false)
  const [autoPlay, setAutoPlay] = useState<boolean>(false)


  // 작품 데이터 불러오기 

  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      const yearAndWorksSortedByYearResult = myLogics.yearAndWorksSortedByYear(data)
    setWorks(myLogics.worksSortedByYear(yearAndWorksSortedByYearResult))
    })
    return () => yes()
  }, [])


  

  // let workFullscreen
  const [workFullscreen, setWorkFullscreen] = useState<string>()
  
  let firstFullScreenImg
  if(works !== []){
    if(works[0]){
      let yes2
      if(works[i].workImageUrl){
        yes2 = works[i].workImageUrl as TypeOfPhotoAssets
        firstFullScreenImg = (myFunctions.imageUrlMakerByRequestedQuality(
          Object.values(yes2)[0], 'full-screen'))
        
      }
    }
  }


  // const [tick, setTick] = useState<boolean>(false)


  let workYes

  useEffect(() => {
    console.log('value')
    console.log(i)
    if(works !== []){
      if(works[i]){
        let yes2
        if(works[i].workImageUrl){
          yes2 = works[i].workImageUrl as TypeOfPhotoAssets
          workYes = myFunctions.imageUrlMakerByRequestedQuality(
            Object.values(yes2)[0], 'original')
          
        }
      }
    }


  }, [i])
  


  let nInterval = 0


  useEffect(() => {
    console.log('interval')
    // setTick(!tick)
    if(autoPlay){
      const yes = [i] 
      nInterval = window.setInterval(() => {
        console.log(`yes ${yes[0]} `)
        if(yes[0] >= works.length -1){
          yes[0] = 0
          setI(yes[0])
        }else{
          yes[0] = yes[0] + 1
          setI(yes[0])
        }
        
      }, 5000)
    }else{
      console.log('interval stop')
      clearInterval(nInterval)
    }

    return () => {
      console.log('interval over')
      clearInterval(nInterval)}

  
  }, [autoPlay])








  const handleArrowClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.direction
    
    if(path === 'back'){
      const yes = [i]
      if(yes[0] <= 0){
        yes[0] = works.length -1;
        console.log(yes[0])
        setI(yes[0])
      }else{
        yes[0] = yes[0]-1
        setI(yes[0])

      } 
    
    }else if (path === 'front'){
      const yes = [i] 
      if(yes[0] >= works.length -1){
        yes[0] = 0
        setI(yes[0])
      }else{
        yes[0] = yes[0]+1
        setI(yes[0])

      }

    }


  }







  const handleMenuOnClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setMenuOnClick(true)
  }
  
  const handleAutoPlay:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    setAutoPlay(true)
    setMenuOnClick(false)
  }


  const handleStopAutoPlay:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    setAutoPlay(false)
    setMenuOnClick(false)
  }


  
  
  const handleGoToHome:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    
    navigate(`/main/works`)
}

  const handleMenuClickOff:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setMenuOnClick(false)
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



  return <Fullscreen>
    <div className={styles.div_for_space}></div>
            <img className={styles.work_img} src={workYes? workYes : firstFullScreenImg} alt="" />
            {/* <img className={styles.work_img} src={workFullscreen? workFullscreen : firstFullScreenImg} alt="" /> */}
    <div className={styles.div_for_space}>

      <div className={styles.remote_control}>
          <button className={styles.menu_button} onClick={handleMenuOnClick} >menu</button>
          
          {menuOnClick&&<><div className={styles.menu}>
              {!autoPlay? <button className={styles.menu_option} onClick={handleAutoPlay}>자동재생</button>:
              <button className={styles.menu_option} onClick={handleStopAutoPlay}>정지</button>}
              
                <div className={styles.black_line}></div>
              <button className={styles.menu_option} onClick={handleGoToHome}>홈 화면</button>
                </div>
              <div className={styles.menu_click_off} onClick={handleMenuClickOff}></div></>}


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