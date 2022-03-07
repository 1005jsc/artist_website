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

type StockContainerProps = {
  ratio: number
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



const wheelHandler: React.WheelEventHandler<HTMLDivElement> = (e) => {
  
  const ratioValue = ratio - 0.0008 * e.deltaY
  if((ratioValue >= 0.1199)&&(ratioValue <= 1.56)){
    setRatio(ratioValue)
  }

  
}

const Frame = styled.div`
position: relative;
  // top: 0;
  // left: 0;
  // width: ${({ratio}:StockContainerProps) => 100 / ratio}%;
  // height: ${({ratio}:StockContainerProps) => 100 / ratio}%;
  // width: 200%;
  // height: 200%;
  transform: scale(${({ratio}:StockContainerProps) => ratio});
  // transform-origin: left top;

`

const moveScreenStart:React.DragEventHandler<HTMLDivElement> = (e) => {
  // const img = new Image();
  // e.dataTransfer.setDragImage(img, 0, 0);
  console.log(e.clientX)
  console.log(e.clientY)
};

// const moveScreen = e => {
//   const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
//   const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;

//   e.target.style.left = limitX
//     ? `${e.target.offsetLeft + (e.clientX - posX)}px`
//     : '0px';
//   e.target.style.top = limitY
//     ? `${e.target.offsetTop + (e.clientY - posY)}px`
//     : '0px';

//   posX = limitX ? e.clientX : 0;
//   posY = limitY ? e.clientY : 0;
// };

// const moveScreenEnd = e => {
//   const limitX = e.target.offsetLeft + (e.clientX - posX) <= 0;
//   const limitY = e.target.offsetTop + (e.clientY - posY) <= 0;

//   e.target.style.left = limitX
//     ? `${e.target.offsetLeft + (e.clientX - posX)}px`
//     : '0px';
//   e.target.style.top = limitY
//     ? `${e.target.offsetTop + (e.clientY - posY)}px`
//     : '0px';

//   setScreen({ top: e.target.style.top, left: e.target.style.left });
// };


  return <div className={styles.modal_background} onClick={handleModalOff} >

    <section  className={styles.modal_container}>
      <div  className={styles.grey_background}>
        
      
          {workUrl&& 
          
          
      
                  
          <div className={styles.img_container}>
            <div className={styles.delete_button_cont}><ModalDeleteButton handleDelete={modalOff}/></div>
            <Frame ratio={ratio}
            
            onWheel={wheelHandler}
            onDragStart={moveScreenStart}
            // onDrag={moveScreen}
            // onDragEnd={moveScreenEnd}
            
            
            >

              <img className={styles.work_large_image} src={workUrl} alt="" />
            </Frame>
          </div>
          
          
          
          
          
          
          
          
          
          
          } 

  

    
      </div>

      <div className={styles.tip_container}>
        <span className={styles.tip}>Tip : 그림을 마우스 휠로 스크롤하시면 해당영역을 더 상세하게 볼 수 있습니다</span>
        <span className={styles.tip}>Tip2 : 해당영역을 드래그하시면 위치를 이동 할 수 있습니다</span>
      </div>

    <KeyDetector sendKeyValue={handleKeyDetector}/>
    </section>

</div>

}
export default WorkModal;