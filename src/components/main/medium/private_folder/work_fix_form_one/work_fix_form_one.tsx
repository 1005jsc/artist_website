import React from "react"
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import Database from '../../../../../services/database';
import WorkFixSelectionExhibition from '../small/work_fix_selection_exhibition/work_fix_selection_exhibition';
import WorkFixSelectionSize from '../small/work_fix_selection_size/work_fix_selection_size';
import WorkFixSelectionYear from '../small/work_fix_selection_year/work_fix_selection_year';
import styles from "./work_fix_form_one.module.css";

const WorkFixFormOne = () => {
  const navigate = useNavigate()
  const databaseService= useOutletContext<Database>();

  const handleToNext:React.MouseEventHandler<HTMLButtonElement> =(e) => {
    e.preventDefault()


    navigate('/main/private/loggedin/work_fix/work_fix_form_two')



  }




  return <section className={styles.work_fix_section}>

  <span className={styles.title}>수정하려는 작품을 모두 클릭하시오</span>

  <div className={styles.works_container}>

  <div className={styles.works_button_container}>
      <div className={styles.works_sort}>
        <button className={`${styles.works_buttons} ${styles.works_buttons_onClick} ${styles.year}`}data-path="year" >연도별</button>
        <button className={`${styles.works_buttons} ${styles.bigger}`} data-path="larger" >크기가 큰 순</button>
        <button className={`${styles.works_buttons} ${styles.smaller}`} data-path="smaller" >크기가 작은 순</button>
        <button className={`${styles.works_buttons} ${styles.exhibition}`} data-path="exhibition" >전시 출품작</button>
      </div>

    </div>
    {/* 여기에 스위치 문으로 4가지 연도별, 크기가큰순, 크기가 작은순, 전시출품작*/}
    
    <WorkFixSelectionYear databaseService={databaseService}/>
    {/* <WorkFixSelectionSize databaseService={databaseService}/> */}
    {/* <WorkFixSelectionExhibition databaseService={databaseService}/> */}

  </div>


  <button className={styles.to_next} onClick={handleToNext}>다음</button>

</section>

}
export default WorkFixFormOne;