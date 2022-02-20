import React, { useState } from "react"
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import Database from '../../../../../services/database';
import WorkFixSelectionExhibition from '../small/work_fix_selection_exhibition/work_fix_selection_exhibition';
import WorkFixSelectionSize from '../small/work_fix_selection_size/work_fix_selection_size';
import WorkFixSelectionYear from '../small/work_fix_selection_year/work_fix_selection_year';
import styles from "./work_fix_form_one.module.css";

const WorkFixFormOne = () => {

  const [dataPathValue , setDataPathValue] = useState<string>('year')

  const navigate = useNavigate()
  const databaseService= useOutletContext<Database>();

  const handleToNext:React.MouseEventHandler<HTMLButtonElement> =(e) => {
    e.preventDefault()


    navigate('/main/private/loggedin/work_fix/work_fix_form_two')



  }

  const handleClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const datapath = e.currentTarget.dataset.path 
  
    if(datapath){
      setDataPathValue(datapath)

    }
  
  }





  return <section className={styles.work_fix_section}>

  <span className={styles.title}>수정하려는 작품을 모두 클릭하시오</span>

  <div className={styles.works_container}>

  <div className={styles.works_button_container}>
      <div className={styles.works_sort}>
        <button className={`${styles.works_buttons} ${styles.works_buttons_onClick} ${styles.year}`}data-path="year" onClick={handleClick}>연도별</button>
        <button className={`${styles.works_buttons} ${styles.bigger}`} data-path="larger" onClick={handleClick}>크기가 큰 순</button>
        <button className={`${styles.works_buttons} ${styles.smaller}`} data-path="smaller" onClick={handleClick}>크기가 작은 순</button>
        <button className={`${styles.works_buttons} ${styles.exhibition}`} data-path="exhibition" onClick={handleClick}>전시 출품작</button>
      </div>

    </div>
    
    {dataPathValue=='year'&&<WorkFixSelectionYear databaseService={databaseService}/>}
    {dataPathValue=='smaller'&&<WorkFixSelectionSize dataPathValue={dataPathValue} databaseService={databaseService}/>}
    {dataPathValue=='larger'&&<WorkFixSelectionSize dataPathValue={dataPathValue} databaseService={databaseService}/>}
    {dataPathValue=='year'&&<WorkFixSelectionExhibition />}
  </div>


  <button className={styles.to_next} onClick={handleToNext}>다음</button>

</section>

}
export default WorkFixFormOne;