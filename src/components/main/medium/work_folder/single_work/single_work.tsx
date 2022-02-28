import React from "react"
import WorkMediumDisplay from '../work_medium_display/work_medium_display';
import styles from "./single_work.module.css";

const SingleWork = () => {


  const handleNextImg:React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault()

    console.log(e.currentTarget)

  }


  return <section className={styles.single_work_container}>

  <div className={styles.work_disp_cont_1}>
    

      <img onClick={handleNextImg}className={styles.icon}src="/icons/side_arrow_left.svg" alt="" />
    
    <WorkMediumDisplay/>

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
      <button className={styles.b1}>확대하여 상세보기</button>
      <button className={styles.b1}>풀스크린으로 보기</button>
  </div>


</section>

}
export default SingleWork;