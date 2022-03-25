import React, { useState } from "react"
import DeleteButton from '../../../../utility/delete_button/delete_button';
import KeyDetector from '../../../../utility/key_detector/key_detector';
import ModalDeleteButton from '../modal_delete_button/modal_delete_button';
import styles from "./work_modal.module.css";
import styled, { css } from 'styled-components';


type WorkModalProps = {
  modalOff: () => void
  workUrl: string|null|undefined
}

type FrameProps = {
  ratio: number;
  mouseStartX:number;
  mouseStartY:number;

}




const WorkModal = ({modalOff, workUrl}:WorkModalProps) => {

// 줌앤 패닝  줌 비율
 const [ratio, setRatio] = useState(0.6)


const handleModalOff:React.MouseEventHandler<HTMLDivElement> = (e) => {
  e.preventDefault()

  

  if(e.currentTarget ===e.target){
    modalOff()
  }
}


const handleKeyDetector = (keyValue:string) => {
  if(keyValue === 'Escape'){
    modalOff()
  }

}

// 스크롤의 기준점

const [wheelStartX, setWheelStartX ] = useState<number>(0)
const [wheelStartY, setWheelStartY ] = useState<number>(0)

const [mouseStartX, setMouseStartX] = useState<number>(0)
const [mouseStartY, setMouseStartY] = useState<number>(0)


const wheelHandler: React.WheelEventHandler<HTMLDivElement> = (e) => {
  
  // // 2단계: 스크롤 시 기준점을 마우스위치로 정하기
    // 화면이 x 좌표측으로 얼마나 스크롤되어 이동했는가
    
    // console.log(`e.deltaX ${e.deltaX}`)
    // // 현재 마우스가 가리키고있는 x좌표 (화면의 0,0을 기준으로 함 상대적임)
    // console.log(`e.clientX ${e.clientX}`)
    // //전 과 후의 x좌표의 차이 값
    // // currentEvent.movementX = currentEvent.screenX - previousEvent.screenX.
    
    // console.log(`e.movementX ${e.movementX}`)
    // // 마우스가 클릭된 x좌표 절대적 위치 
    // console.log(`e.pageX ${e.pageX}`)
    // console.log(`e.screenX ${e.screenX}`)
    
    // 결과적으로 이벤트가 등록된 컨테이너를 좌표의 기준으로 삼는 e.clientX, e.clientY를 
    // 사용해야 맞을 것이다 
    // 
  
  // console.log(e.clientX, e.clientY)

  // 3단계: 부모의 width, height 구하기 : 

    // 후보: offsetWidth, clientWidth, scrollWidth, getBoundingClientRect

    // 각각의 특징을 살펴보자

    // 1. offsetWidth
    // margin을 제외한, padding값, border값까지 계산한 값을 가져온다. 
    // 2. clientWidth
    // margin값과 border값이 제외된, padding값까지만 적용된 내부의 실제 크기를 가져온다.
    // 3. scrollWidth
    //element.scrollWidth (Height)는 스크롤 영역일때 스크롤로 감싸여진 내용의 전체 크기를 가져온다.
    // 4. getBoundingClientRect
    // 랜더링된 결과를 그대로 가져온다.
    //.asdf 박스에 transform: scale(1.2);를 주었다. 1.2배로 늘렸다.
    //   getBoundingClientRect함수의 실행결과는 실제 랜더링 크기이다.
    // 아까 1.2배를 늘렸기 때문에 160 * 1.2 한 결과와 같이 192가 나온 것이다.


    
  // console.log()
  // console.log(e.currentTarget.parentElement?.getBoundingClientRect().height)
  // 성공 !
  // let parentX = 1
  // if(e.currentTarget.parentElement?.getBoundingClientRect().width !== undefined){
  //   parentX = e.currentTarget.parentElement?.getBoundingClientRect().width
  // }
  // let parentY= 1
  // if(e.currentTarget.parentElement?.getBoundingClientRect().width !== undefined){
  //   parentY = e.currentTarget.parentElement?.getBoundingClientRect().width
  // }

  // const wheelMouseParameterX = (e.clientX / parentX)
  // const wheelMouseParameterY = (e.clientY / parentY)


  // setWheelStartX(wheelMouseParameterX)
  // setWheelStartY(wheelMouseParameterY)



  setMouseStartX(e.clientX)
  setMouseStartY(e.clientY)


  const ratioValue = ratio - 0.0008 * e.deltaY
  if((ratioValue >= 0.1099)&&(ratioValue <= 1.66)&&(ratioValue < 0.18)&&(ratioValue > 1.26)){
    setRatio(0.8*ratioValue)
  }else if((ratioValue >= 0.18)&&(ratioValue <= 1.26)) {
    setRatio(ratioValue)
  }
  else{
    console.log(`off ratiovalue`)
  }

  
}

// 1단계 : 줌 크기가 적당히 커지고 가운데를 기준으로 잡아짐 


// const Frame = styled.div`
//   position: relative;
//   top: 0%;
//   left: 0%;
//   transform: scale(${({ratio}:StockContainerProps) => 3*ratio});

// `

// 2단계 적용:
const Frame = styled.div`
  position: relative;
  transform: scale(${({ratio}:FrameProps) => 2.2*ratio});
  transform-origin: ${({mouseStartX}:FrameProps) => mouseStartX}px ${({mouseStartY}:FrameProps) => {
    return mouseStartY}}px;
`






  return <div className={styles.modal_background} onClick={handleModalOff} >

    <section  className={styles.modal_container}>
      <div  className={styles.grey_background}>
        
      
          {workUrl&& 
          
          
      
                  
          <div className={styles.img_container}>
            <div className={styles.delete_button_cont}><ModalDeleteButton handleDelete={modalOff}/></div>
            
            <Frame ratio={ratio} wheelStartX={wheelStartX} wheelStartY={wheelStartY} mouseStartX={mouseStartX} mouseStartY={mouseStartY}

            onWheel={wheelHandler}
            draggable
            >

              <img className={styles.work_large_image} src={workUrl} alt="" />
            </Frame>
          </div>
          
          
          
          
          
          
          
          
          
          
          } 

  

    
      </div>

      <div className={styles.tip_container}>
        <span className={styles.tip}>Tip : 그림을 마우스 휠로 스크롤하시면 해당영역을 더 상세하게 볼 수 있습니다</span>
      </div>

    <KeyDetector sendKeyValue={handleKeyDetector}/>
    </section>

</div>

}
export default WorkModal;