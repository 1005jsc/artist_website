import React, { useState } from "react"
import WorkMediumDisplay from '../work_medium_display/work_medium_display';
import styles from "./single_work.module.css";
import  Modal  from 'react-modal';
import WorkModal from '../work_modal/work_modal';

const SingleWork = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleNextImg:React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault()

    console.log(e.currentTarget)

  }
  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalOnClick:React.MouseEventHandler<HTMLButtonElement> = (e)  => {

    e.preventDefault()
    handleModalOpen()
  }
 
  

  const handleModalOff = () => {
    setModalOpen(false)
  }


  return <section className={styles.single_work_container}>

  {modalOpen&&<WorkModal modalOff={handleModalOff}/>}


  <div className={styles.work_disp_cont_1}>
  
      <img onClick={handleNextImg}className={styles.icon}src="/icons/side_arrow_left.svg" alt="" />
    
    <WorkMediumDisplay imgClickModalOpen={handleModalOpen}/>

      <img onClick={handleNextImg} className={styles.icon}src="/icons/side_arrow_right.svg" alt="" />
  
  
  </div>

  <div className={styles.small_works_display_container}>

    <img className={styles.mini_img}src="/img/works_img/work_sample2.jpg" alt="" />
    <img className={styles.mini_center_img}src="/img/works_img/work_sample3.jpg" alt="" />
    <img className={styles.mini_img}src="/img/works_img/work_sample2.jpg" alt="" />




  </div>

  <div className={styles.metadata}>
      <p className={styles.p1}>시간을 담다 5</p>
      <p className={styles.p1}>162cm x 112cm</p>
      <p className={styles.p1}>Acrylic on canvas</p>
      <p className={styles.p1}>2021</p>
  </div>
  <div className={styles.button_container}>
      <button className={styles.b1} onClick={handleModalOnClick}>확대하여 상세보기</button>
      <button className={styles.b1}>풀스크린으로 보기</button>
  </div>

  

</section>

}
export default SingleWork;







































{/* <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}
  style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '5rem',
      left: '14rem',
      right: '14rem',
      bottom: '8rem',
      border: '1px solid #ccc',
      background: '#fff',
      // overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      outline: 'none',
      padding: 0,
    }
  }}
  className={styles.modal}
  >
    <div className={styles.work_display_large_container}>
        <div className={styles.background_grey}>
              <img className={styles.work_display_large}src="/img/works_img/work_sample.jpg" alt="" />

        </div>

    <div className={styles.span_div}>
        <span className={styles.tip}>Tip: 그림을 클릭하시면 해당영역을 더 상세하게 볼 수 있습니다</span>

    </div>

    </div>




  </Modal> */}
