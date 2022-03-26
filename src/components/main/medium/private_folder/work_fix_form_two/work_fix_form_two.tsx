import React, { useEffect, useState } from "react"
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { TypeOfExhibitions, TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkImageUpload from '../../../../../services/work_image_uploads';
import WorkFixForm from '../work_fix_form/work_fix_form';
import WorkFixFormTwoWork from '../work_fix_form_two_work/work_fix_form_two_work';
import WorkFixFormTwoWorkVertical from '../work_fix_form_two_work_vertical/work_fix_form_two_work_vertical';
import styles from "./work_fix_form_two.module.css";
import Modal from 'react-modal';


type WorkFixFormTwoProps = {
  workImageUploadService:WorkImageUpload;

}

const WorkFixFormTwo = ({workImageUploadService}:WorkFixFormTwoProps) => {
  
  const database = useOutletContext<Database>()
  const location = useLocation()

  const [worksFromFormOneSerialNumbers, setWorksFromFormOneSerialNumbers]= useState<Array<number>>([])
  const [worksFromFormOne, setWorksFromFormOne] = useState<TypeOfWorks|null>(null)
  
  // 여기가 선택된 work 
  const [workOnSelect, setWorkOnSelect] = useState<TypeOfWork|null>(null)
  const [workOnSelectPrevious, setWorkOnSelectPrevious] = useState<TypeOfWork|null>(null)
  const [workCanceled, setWorkCanceled] = useState<TypeOfWork|null>(null)
  
  // 더이상 작업할 work가 없을때 work fix form 에게 끝났다고 신호를 보낸다  
  const [jobDone, setJobDone] = useState<boolean>(false)

  // 만약 select 된 work 이 하나도 없을떄 
  const [noWorkToBeSelected, setNoWorkToBeSelected] = useState<boolean>(false)

  const navigate = useNavigate()
// 1. 고칠 작품 렌더하기
  useEffect(() => {
    const locationState = location.state as Array<any>
    const array1 = locationState[0] as number[]
    const object1 = locationState[1] as TypeOfWorks

    const array2 = [...array1]
    const object2 = {...object1}
    if(array2.length === 0){
      setNoWorkToBeSelected(true)
    }else{
      setWorksFromFormOneSerialNumbers(array2)
      setWorksFromFormOne(object2)
    }
    
  }, [])

  // {16468848175: {…}, 16468696731: {…}} 를 [{…}, {…}] 로 고쳐주기
  const worksArray = worksFromFormOneSerialNumbers.map((serialNumber) => {
    if(worksFromFormOne){
      return worksFromFormOne[serialNumber]
    }
  })
  const receiveWork = (work:TypeOfWork) => {
    setWorkOnSelect(work)
  }

// 2. 작품 다한거 리스트에 빼기


const handleWorkFixFinished = (fixedWorkSerialNumber:number, state:'cancel'|'upload') => {
  if(state === 'upload'){
    const worksFrom = {...worksFromFormOne}
    setWorkOnSelectPrevious(worksFrom[fixedWorkSerialNumber])
    delete worksFrom[fixedWorkSerialNumber]
    const worksFromSerialNumbers = Object.keys(worksFrom)
    const worksFromSerialNumbers2 = worksFromSerialNumbers.map((value) => {
      return parseInt(value)
    })
  
  
    if(worksFromSerialNumbers2.length >= 1){
    }else{
      setJobDone(true)
    
    }
  
  
  
    // 여기서 다음 work를 셀렉트 하게 하기 
    let hey
    if(worksFromFormOne){
      hey = worksFromFormOne[worksFromSerialNumbers2[0]]
    }
    if(hey){
      setWorkOnSelect(hey)
    }
    
  
  
    setWorksFromFormOne(worksFrom)
    setWorksFromFormOneSerialNumbers(worksFromSerialNumbers2)
    
  }else if(state === 'cancel'){
    const worksFrom = {...worksFromFormOne}
    setWorkCanceled(worksFrom[fixedWorkSerialNumber])
    delete worksFrom[fixedWorkSerialNumber]
    const worksFromSerialNumbers = Object.keys(worksFrom)
    const worksFromSerialNumbers2 = worksFromSerialNumbers.map((value) => {
      return parseInt(value)
    })
  
  
    if(worksFromSerialNumbers2.length >= 1){
    }else{
      setJobDone(true)
    
    }
  
  
  
    let hey
    if(worksFromFormOne){
      hey = worksFromFormOne[worksFromSerialNumbers2[0]]
    }
    if(hey){
      setWorkOnSelect(hey)
    }
    
  
  
    setWorksFromFormOne(worksFrom)
    setWorksFromFormOneSerialNumbers(worksFromSerialNumbers2)
  }
  
  
}







// 3. 모달 
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [workSerialNumberToDelete, setWorkSerialNumberToDelete] = useState<number|null>(null)
  const mortalOpen = (workSerialNumber:number) => {
    setModalOpen(true)
    setWorkSerialNumberToDelete(workSerialNumber)
  }

// 4. 작품 제거하기

  const handleDeleteYes:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    
    const array2 = [...worksFromFormOneSerialNumbers]
    const object2 = {...worksFromFormOne} as TypeOfWorks

    // 작업에 포함되어있던 전시회번호를 배열로 묶어둠
      let deleteWorkExhibitionHistory1 
      let deleteWorkExhibitionHistory2
      if(workSerialNumberToDelete&&worksFromFormOne){
        deleteWorkExhibitionHistory1 = worksFromFormOne[workSerialNumberToDelete].workExhibitionHistory
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


  const handleGoBack:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    navigate('/home/private/loggedin')
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
      top: '18rem',
      left: '28rem',
      right: '28rem',
      bottom: '20rem',
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
  
  <div className={styles.works_to_fix_container}>
    <div className={styles.s1_and_fix_finished}>
      <span className={styles.explanation}>- 수정할 작품을 하나씩 클릭하고 수정 </span>
      <span className={styles.s1}>남은 수정할 작품들 총 &nbsp;&nbsp;{worksFromFormOneSerialNumbers.length}&nbsp;&nbsp;개</span>
    </div>
      {workOnSelectPrevious&&<h1 className={styles.fix_finished}>작품 &nbsp;&nbsp;{workOnSelectPrevious.workName}&nbsp;&nbsp; 수정완료!!</h1>}
      {workCanceled&&<h1 className={styles.fix_finished}>작품 &nbsp;&nbsp;{workCanceled.workName}&nbsp;&nbsp; 수정취소</h1>}
      
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
    {workOnSelect&&<WorkFixForm jobDone={jobDone} workToFix={workOnSelect} workFixFinished={handleWorkFixFinished} deleteWork={mortalOpen}workImageUploadService={workImageUploadService}/>}

  </div>



  {noWorkToBeSelected&&<button className={styles.go_to_private} onClick={handleGoBack}>작가의 개인공간으로 돌아가기</button>}
    




</section>

}
export default WorkFixFormTwo;