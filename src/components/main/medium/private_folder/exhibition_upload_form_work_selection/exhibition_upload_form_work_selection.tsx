import React, { useState } from "react"
import { useOutletContext } from 'react-router-dom';
import {  TypeOfWork } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkFixSelectionExhibitions from '../small/work_fix_selection_exhibitions/work_fix_selection_exhibitions';
import WorkFixSelectionSize from '../small/work_fix_selection_size/work_fix_selection_size';
import WorkFixSelectionYear from '../small/work_fix_selection_year/work_fix_selection_year';
import styles from "./exhibition_upload_form_work_selection.module.css";

type ExhibitionUploadFormWorkSelectionProps = {
  passSelectedWorkToUpper: (workNumber:number, work:TypeOfWork) => void
  exhibitionWorksOnClickArray:  number[]


}

const ExhibitionUploadFormWorkSelection = ({exhibitionWorksOnClickArray, passSelectedWorkToUpper}:ExhibitionUploadFormWorkSelectionProps) => {

  const [dataPathValue , setDataPathValue] = useState<string>('year')
  const [exhibitionSerialNumberOnClickData, setExhibitionSerialNumberOnClickData] = useState<number|null>(null)

  const databaseService= useOutletContext<Database>();

  

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







  return <div className={styles.works_container}>

  <div className={styles.works_button_container}>
      <div className={styles.works_sort}>
        <button className={`${styles.works_buttons} ${styles.works_buttons_onClick} ${styles.year}`}data-path="year" onClick={handleClick}>연도별</button>
        <button className={`${styles.works_buttons} ${styles.bigger}`} data-path="larger" onClick={handleClick}>크기가 큰 순</button>
        <button className={`${styles.works_buttons} ${styles.smaller}`} data-path="smaller" onClick={handleClick}>크기가 작은 순</button>
        <button className={`${styles.works_buttons} ${styles.exhibition}`} data-path="exhibition" onClick={handleClick}>전시 출품작</button>
      </div>

    </div>
    
    {dataPathValue=='year'&&<WorkFixSelectionYear exhibitionWorksOnClickArray={exhibitionWorksOnClickArray} 
    passSelectedWorkToUpper={passSelectedWorkToUpper} databaseService={databaseService}/>}
    {dataPathValue=='smaller'&&<WorkFixSelectionSize passSelectedWorkToUpper={passSelectedWorkToUpper} dataPathValue={dataPathValue} databaseService={databaseService}/>}
    {dataPathValue=='larger'&&<WorkFixSelectionSize   passSelectedWorkToUpper={passSelectedWorkToUpper} dataPathValue={dataPathValue} databaseService={databaseService}/>}
    {dataPathValue=='exhibition'&&<WorkFixSelectionExhibitions sendExhibitionToUpperComponent={getExhibitionSerialNumber}/>}
    {dataPathValue==exhibitionSerialNumberOnClickData?.toString()&&
    //  exhibition에 exhibition work 표기되는 로직 만들어야됨   아직 여기는 못함 
    console.log(exhibitionSerialNumberOnClickData)
    
    
    }
  </div>

}
export default ExhibitionUploadFormWorkSelection;