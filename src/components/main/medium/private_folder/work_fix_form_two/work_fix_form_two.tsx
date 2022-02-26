import React, { useEffect, useState } from "react"
import { useLocation, useOutletContext } from 'react-router-dom';
import { TypeOfExhibitions, TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkImageUpload from '../../../../../services/work_image_uploads';
import WorkFixForm from '../work_fix_form/work_fix_form';
import WorkFixFormTwoWork from '../work_fix_form_two_work/work_fix_form_two_work';
import WorkFixFormTwoWorkVertical from '../work_fix_form_two_work_vertical/work_fix_form_two_work_vertical';
import styles from "./work_fix_form_two.module.css";
import Modal from 'react-modal';


type WorkFixFormTwo = {
  workImageUploadService:WorkImageUpload;

}

const WorkFixFormTwo = ({workImageUploadService}:WorkFixFormTwo) => {
  
  const database = useOutletContext<Database>()

  const [worksFromFormOneSerialNumbers, setWorksFromFormOneSerialNumbers]= useState<Array<number>>([])
  const [worksFromFormOne, setWorksFromFormOne] = useState<TypeOfWorks|null>(null)
  
  const [workOnSelect, setWorkOnSelect] = useState<TypeOfWork|null>(null)
  const location = useLocation()
  
  useEffect(() => {
    const locationState = location.state as Array<any>
    const array1 = locationState[0] as number[]
    const object1 = locationState[1] as TypeOfWorks
    const array2 = [...array1]
    const object2 = {...object1}
    
    setWorksFromFormOneSerialNumbers(array2)
    setWorksFromFormOne(object2)
    


  }, [])

  const worksArray = worksFromFormOneSerialNumbers.map((serialNumber) => {
    if(worksFromFormOne){
      return worksFromFormOne[serialNumber]
    }
  })




  const receiveWork = (work:TypeOfWork) => {
    setWorkOnSelect(work)
  }


  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [workSerialNumberToDelete, setWorkSerialNumberToDelete] = useState<number|null>(null)
  const mortalOpen = (workSerialNumber:number) => {
    setModalOpen(true)
    setWorkSerialNumberToDelete(workSerialNumber)
  }


  const [exhibitions, setExhibitions] = useState<TypeOfExhibitions|null>(null)
useEffect(() => {
    database.getExhibitionData(
      (exhibitions) => {
        setExhibitions(exhibitions)})
}, [])



  const handleDeleteYes:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    
    const array2 = [...worksFromFormOneSerialNumbers]
    const object2 = {...worksFromFormOne} as TypeOfWorks

    // 작업에 포함되어있던 전시회번호를 배열로 묶어둠
      let deleteWorkExhibitionHistory1 
      let deleteWorkExhibitionHistory2
      if(workSerialNumberToDelete&&worksFromFormOne){
        deleteWorkExhibitionHistory1 = worksFromFormOne[workSerialNumberToDelete].workExhibitionHistory
        console.log(worksFromFormOne)
        console.log(worksFromFormOne[workSerialNumberToDelete])
        console.log(worksFromFormOne[workSerialNumberToDelete].workExhibitionHistory)
      }
      if(deleteWorkExhibitionHistory1){
        deleteWorkExhibitionHistory2 = Object.values(deleteWorkExhibitionHistory1)
      }
      
    if(deleteWorkExhibitionHistory2){
      deleteWorkExhibitionHistory2.forEach((exhibitionId) => {
        if(workSerialNumberToDelete){
          database.deleteWorksInExhibitionData(exhibitionId, workSerialNumberToDelete)
        }
      })
    
    }  
      
    const array3 = array2.filter((serialNumbers) => serialNumbers !== workSerialNumberToDelete)
    if(workSerialNumberToDelete){
      delete object2[workSerialNumberToDelete]

    }
  



    setWorksFromFormOneSerialNumbers(array3)
    setWorksFromFormOne(object2)
    


    if(workSerialNumberToDelete){
      database.deleteWorkData(workSerialNumberToDelete)
    }
    
    setWorkSerialNumberToDelete(null) 
    setModalOpen(false)

  }
  const handleDeleteNo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    
    
    setWorkSerialNumberToDelete(null)
    
    setModalOpen(false)

  }





  return <section className={styles.fix_from_sec}>

  <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}
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
      top: '22rem',
      left: '28rem',
      right: '28rem',
      bottom: '32rem',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4rem',
      outline: 'none',
      padding: '2rem'
    }
  }}
  className={styles.modal}
  >
    <div className={styles.modal_container}>
      <div className={styles.modal_cont_one}>
        <span className={styles.s2}>작품정보 지우기를 실행하면 </span>
        <span className={styles.s2}>기존에 있던 작품정보는 모두 지워지게 됩니다</span>
        <span className={styles.s2}>계속 하시겠습니까?</span>
      </div>
        <div className={styles.modal_cont_two}>
          <button className={styles.modal_button} onClick={handleDeleteYes} >예</button>
          <button className={styles.modal_button}onClick={handleDeleteNo}>아니오</button>

        </div>
    </div>

  </Modal>
  <div className={styles.explanations_container}>
    <h2 className={styles.explanation}>- 수정할 작품을 하나씩 클릭하고 수정하면 됨 </h2>
  </div>
  
  <div className={styles.works_to_fix_container}>
    <span className={styles.s1}>수정할 작품들</span>

    <div className={styles.grey_container}>

    <div className={`${styles.work_bundle}`}>
    {worksArray.map((work, index) => {

      const object2 = worksArray[index]
  if(object2){
    if(object2.workHorizontalOrVerticalOrSquare=='horizontal'){
        return <WorkFixFormTwoWork  key={index} work={work!} workOnSelected={workOnSelect} passSelectedWorkToUpper={receiveWork}/>
      }
      else{
        return <WorkFixFormTwoWorkVertical  key={index} work={work!} workOnSelected={workOnSelect} passSelectedWorkToUpper={receiveWork} />
      }
  }      
  })}
    </div>
    
    


    </div>
    {workOnSelect&&<WorkFixForm workToFix={workOnSelect} deleteWork={mortalOpen}workImageUploadService={workImageUploadService}/>}

  </div>






</section>

}
export default WorkFixFormTwo;