import React, { useState } from "react"
import {  useNavigate, useOutletContext } from 'react-router-dom';
import {  TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkFixSelectionExhibitions from '../small/work_fix_selection_exhibitions/work_fix_selection_exhibitions';
import WorkFixSelectionExhibitionWorksBySize from '../small/work_fix_selection_exhibition_works_by_size/work_fix_selection_exhibition_works_by_size';
import WorkFixSelectionSize from '../small/work_fix_selection_size/work_fix_selection_size';
import WorkFixSelectionYear from '../small/work_fix_selection_year/work_fix_selection_year';
import styles from "./work_fix_form_one.module.css";

const WorkFixFormOne = () => {

  // navigator state 관리 
  const [dataPathValue , setDataPathValue] = useState<string>('year')
  const [exhibitionSerialNumberOnClickData, setExhibitionSerialNumberOnClickData] = useState<number|null>(null)


  // 전시회 작품 관리 state
  const [exhibitionWorksOnClick, setExhibitionWorksOnClick]= useState<Array<number>>([])
  const [exhibitionWorksOnClickUrls, setExhibitionWorksOnClickUrls] = useState<TypeOfWorks|null>(null)
  




  const navigate = useNavigate()
  const databaseService= useOutletContext<Database>();

  const handleToNext:React.MouseEventHandler<HTMLButtonElement> =(e) => {
    e.preventDefault()


    navigate('/main/private/loggedin/work_fix/work_fix_form_two', {
      state:[exhibitionWorksOnClick, exhibitionWorksOnClickUrls]
    
    })



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




  let array1 = [] as number[]
  let obj1 = {} as TypeOfWorks
  let obj2 = {} as TypeOfWorks
    const handleExhibitionWorksUpdate = (workSerialNumber:number, work:TypeOfWork) => {
      array1 = [...exhibitionWorksOnClick]
      obj1 = {...exhibitionWorksOnClickUrls}
      if(array1.find((value) => value === workSerialNumber)){
        const array2 = array1.filter(value => value !== workSerialNumber)
        delete obj1[workSerialNumber]
        
  
        setExhibitionWorksOnClick(array2)
        setExhibitionWorksOnClickUrls(obj1)
        
      }else{
        array1.push(workSerialNumber)
        obj2[workSerialNumber]= work
        obj1= {...exhibitionWorksOnClickUrls, ...obj2}
        setExhibitionWorksOnClickUrls(obj1)
        setExhibitionWorksOnClick(array1)
  
      }
  
  
      
    }
    
  





  return <section className={styles.work_fix_section}>

  <span className={styles.title}>수정하려는 작품을 모두 클릭하시오</span>

  <div className={styles.works_container}>

  <div className={styles.works_button_container}>
      <div className={styles.works_sort}>
        <button className={dataPathValue==='year'?`${styles.works_buttons} ${styles.works_buttons_onclick}`
        :`${styles.works_buttons} ` }data-path="year" onClick={handleClick}>연도별</button>
        <button className={dataPathValue==='larger'?`${styles.works_buttons} ${styles.works_buttons_onclick}`
        :`${styles.works_buttons} ` } data-path="larger" onClick={handleClick}>크기가 큰 순</button>
        <button className={dataPathValue==='smaller'?`${styles.works_buttons} ${styles.works_buttons_onclick}`
        :`${styles.works_buttons} ` } data-path="smaller" onClick={handleClick}>크기가 작은 순</button>
        <button className={dataPathValue==='exhibition'?`${styles.works_buttons} ${styles.works_buttons_onclick}`
        :`${styles.works_buttons} ` } data-path="exhibition" onClick={handleClick}>전시 출품작</button>
      </div>
    </div>
    
    {dataPathValue==='year'&&<WorkFixSelectionYear exhibitionWorksOnClickArray={exhibitionWorksOnClick} 
    passSelectedWorkToUpper={handleExhibitionWorksUpdate} databaseService={databaseService}/>}
    {dataPathValue==='smaller'&&<WorkFixSelectionSize exhibitionWorksOnClickArray={exhibitionWorksOnClick} passSelectedWorkToUpper={handleExhibitionWorksUpdate}
     dataPathValue={dataPathValue} databaseService={databaseService}/>}
    {dataPathValue==='larger'&&<WorkFixSelectionSize  exhibitionWorksOnClickArray={exhibitionWorksOnClick} passSelectedWorkToUpper={handleExhibitionWorksUpdate}
     dataPathValue={dataPathValue} databaseService={databaseService}/>}
    {dataPathValue==='exhibition'&&<WorkFixSelectionExhibitions sendExhibitionToUpperComponent={getExhibitionSerialNumber}/>}
    {dataPathValue===exhibitionSerialNumberOnClickData?.toString()&&
    //  exhibition에 exhibition work 표기되는 로직 만들어야됨   아직 여기는 못함 
    <WorkFixSelectionExhibitionWorksBySize exhibitionSerialNumberOnClickData={exhibitionSerialNumberOnClickData} exhibitionWorksOnClickArray={exhibitionWorksOnClick
} passSelectedWorkToUpper={handleExhibitionWorksUpdate}
     dataPathValue={dataPathValue} databaseService={databaseService}/>
    
    
    }





  </div>


  <button className={styles.to_next} onClick={handleToNext}>다음</button>

</section>

}
export default WorkFixFormOne;