import React, { useEffect, useRef, useState } from "react"
import styles from "./fullscreen.module.css";
import { useLocation, useNavigate } from 'react-router-dom';
import  styled  from 'styled-components';
import { TypeOfPhotoAssets, TypeOfWork } from '../../../../../common/project_types';
import { myFunctions } from './../../../../../common/project_functions';
import KeyDetector from '../../../../utility/key_detector/key_detector';




const Fullscreen = () => {


  const navigate = useNavigate()
  const location = useLocation()
  const leftArrowRef = useRef<HTMLButtonElement|null>(null)
  const rightArrowRef = useRef<HTMLButtonElement|null>(null)

  
  const [works, setWorks] = useState<TypeOfWork[]>([])
  const [i, setI] = useState<number>(0)

  
  const [menuOnClick, setMenuOnClick] = useState<boolean>(false)
  const [autoPlay, setAutoPlay] = useState<boolean>(false)

  const [remoteShow, setRemoteShow] = useState<boolean>(true)


  // 렌더링 시 작품 데이터 불러오기
  



  // works 에 typeofwork[]로만 집어 넣어주면 됨 

  useEffect(() => {
    const locationState = location.state as (TypeOfWork[]|number|null)[]

    const arrayOfWorks = locationState[0] as TypeOfWork[]
    const workFirstSelected = locationState[1] as number|null
    
    setWorks(arrayOfWorks)

    // workfirstselected 로 i 값을 설정해주기 

    let k = 0
    for(let i = 0; i< arrayOfWorks.length; i++){
      arrayOfWorks.forEach((value, index) => {
        if(value.workSerialNumber === workFirstSelected){
            k = index
        
          } 
          
        

      })
      
    }
    setI(k)

  }, [])





  

  
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




  let workFullscreen

  useEffect(() => {
    if(works !== []){
      if(works[i]){
        let yes2
        if(works[i].workImageUrl){
          yes2 = works[i].workImageUrl as TypeOfPhotoAssets
          workFullscreen = myFunctions.imageUrlMakerByRequestedQuality(
            Object.values(yes2)[0], 'original')
          
        }
      }
    }


  }, [i])
  


  let nInterval = 0


  useEffect(() => {
    if(autoPlay){
      const yes = [i] 
      nInterval = window.setInterval(() => {
        if(yes[0] >= works.length -1){
          yes[0] = 0
          setI(yes[0])
        }else{
          yes[0] = yes[0] + 1
          setI(yes[0])
        }
        
      }, 3000)
    }else{
      clearInterval(nInterval)
    }

    return () => {
      clearInterval(nInterval)}

  
  }, [autoPlay])








  const handleArrowClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.direction
    
    if(path === 'back'){
      const yes = [i]
      if(yes[0] <= 0){
        yes[0] = works.length -1;
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
    
    navigate(`/home/works`)
}

  const handleMenuClickOff:React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    setMenuOnClick(false)
  }


const keyValueReceive = (keyValue:string) => {

  if(keyValue ==='ArrowRight'){
    let rightArrowButton;
    if(rightArrowRef.current){
      rightArrowButton = rightArrowRef.current

      rightArrowButton.click()
    }

  }else if(keyValue === 'ArrowLeft') {
    let leftArrowButton;
    if(leftArrowRef.current){
      leftArrowButton = leftArrowRef.current

      leftArrowButton.click()
    }
  }
  // esc, enter, spacebar누르면 리모컨이 켰다 꺼진다 

  if(keyValue === 'Enter'||keyValue ==='Escape'||keyValue ===' '){
    setRemoteShow(!remoteShow)
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




  return <Fullscreen>
    <div className={styles.div_for_space}></div>
            <img className={styles.work_img} src={workFullscreen? workFullscreen : firstFullScreenImg} alt="" />
    <div className={styles.div_for_space}>
<div className={remoteShow?`${styles.remote_control}`:`${styles.remote_send_away}`}>
          <button className={styles.menu_button} onClick={handleMenuOnClick} >menu</button>
          
          {menuOnClick&&<><div className={styles.menu}>
              {!autoPlay? <button className={styles.menu_option} onClick={handleAutoPlay}>자동재생</button>:
              <button className={styles.menu_option} onClick={handleStopAutoPlay}>정지</button>}
              
                <div className={styles.black_line}></div>
              <button className={styles.menu_option} onClick={handleGoToHome}>홈 화면</button>
                </div>
              <div className={styles.menu_click_off} onClick={handleMenuClickOff}></div></>}


          <div className={styles.arrows}>
              <button ref={leftArrowRef}className={styles.arrow} data-direction="back" onClick={handleArrowClick}><img className={styles.left}src="/icons/left_arrow_carot.svg" alt="" /> </button>
              <button ref={rightArrowRef}className={styles.arrow} data-direction="front" onClick={handleArrowClick}><img className={styles.right}src="/icons/right_arrow_carot.svg" alt="" /></button>
          </div>
      </div>
      

    </div>
    <div className=""></div>


    <KeyDetector sendKeyValue={keyValueReceive}/>
  </Fullscreen>
}
export default Fullscreen;