import React, { useState } from "react"
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { TypeOfExhibition } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkFixSelectionExhibitions from '../small/work_fix_selection_exhibitions/work_fix_selection_exhibitions';
import WorkFixSelectionSize from '../small/work_fix_selection_size/work_fix_selection_size';
import WorkFixSelectionYear from '../small/work_fix_selection_year/work_fix_selection_year';
import styles from "./work_fix_form_one.module.css";

const WorkFixFormOne = () => {

  const [dataPathValue , setDataPathValue] = useState<string>('year')
  const [exhibitionSerialNumberOnClickData, setExhibitionSerialNumberOnClickData] = useState<number|null>(null)

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



  const getExhibitionSerialNumber = (exhibitionSerialNumber:number) => {

    setExhibitionSerialNumberOnClickData(exhibitionSerialNumber)
    setDataPathValue(exhibitionSerialNumber.toString())

  }

  console.log(exhibitionSerialNumberOnClickData)

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
    
    {/* {dataPathValue=='year'&&<WorkFixSelectionYear databaseService={databaseService}/>}
    {dataPathValue=='smaller'&&<WorkFixSelectionSize dataPathValue={dataPathValue} databaseService={databaseService}/>}
    {dataPathValue=='larger'&&<WorkFixSelectionSize dataPathValue={dataPathValue} databaseService={databaseService}/>}
    {dataPathValue=='exhibition'&&<WorkFixSelectionExhibitions sendExhibitionToUpperComponent={getExhibitionSerialNumber}/>}
    {dataPathValue==exhibitionSerialNumberOnClickData?.toString()&&
    //  exhibition에 exhibition work 표기되는 로직 만들어야됨   아직 여기는 못함 
    console.log(exhibitionSerialNumberOnClickData)
    
    
    } */}
  </div>


  <button className={styles.to_next} onClick={handleToNext}>다음</button>

</section>

}
export default WorkFixFormOne;