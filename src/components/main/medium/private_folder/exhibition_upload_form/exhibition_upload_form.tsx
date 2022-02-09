import React, { useRef, useState } from "react"
import { useNavigate, useOutletContext } from 'react-router-dom';
import { TypeOfExhibition } from '../../../../../common/project_types';
import PrivateExhibitionsSelect from '../small/private_exhibitions_select/private_exhibitions_select';
import PrivateWorksYear from '../small/private_works_year/private_works_year';
import styles from "./exhibition_upload_form.module.css";
import Database from './../../../../../services/database';

const ExhibitionUploadForm = () => {

  const databaseService= useOutletContext<Database>();
  


  const navigate = useNavigate()
 
//  전시회 데이터 만들기
  

  
const exhibitionNameRef = useRef<HTMLInputElement | null>(null)
const exhibitionLocationRef = useRef<HTMLInputElement | null>(null)
const exhibitionPeriodRef = useRef<HTMLInputElement | null>(null)
const exhibitionSponserRef = useRef<HTMLInputElement | null>(null)
const exhibitionMemoRef = useRef<HTMLTextAreaElement | null>(null)



  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    navigate('/main/private/loggedin/exhibition_upload/exhibition_upload_done')
  
  let exhibitionNameValue
  let exhibitionLocationValue
  let exhibitionPeriodValue
  let exhibitionSponserValue
  let exhibitionMemoValue
  
  if(exhibitionNameRef.current){
      exhibitionNameValue = exhibitionNameRef.current.value
  }else{exhibitionNameValue = null
    
  }
  
  if(exhibitionLocationRef.current){
      exhibitionLocationValue = exhibitionLocationRef.current.value
  }else{exhibitionLocationValue = null

  }
  
  if(exhibitionPeriodRef.current){
      exhibitionPeriodValue = exhibitionPeriodRef.current.value
  }else{exhibitionPeriodValue = null

  }
  
  if(exhibitionSponserRef.current){
      exhibitionSponserValue = exhibitionSponserRef.current.value
  }else{exhibitionSponserValue = null

  }
  
  if(exhibitionMemoRef.current){
      exhibitionMemoValue = exhibitionMemoRef.current.value
  }else{exhibitionMemoValue = null

  }



  const exhibitionData:TypeOfExhibition = {




      exhibitionSerialNumber : Date.now(),
      lastUpdate: new Date().toLocaleString(),
      exhibitionPosterUrl : null,
      exhibitionName : exhibitionNameValue,
      exhibitionLocation :exhibitionLocationValue,
      exhibitionPeriod :exhibitionPeriodValue,
      exhibitionSponser :exhibitionSponserValue,
      exhibitionWorks: null,
      exhibitionBuildingPhotoUrl : null,
      exhibitionPhotoUrl : null,
      exhibitionMemo :exhibitionMemoValue,
    
    
      
      
      
      
    }

    databaseService.uploadExhibitionData(exhibitionData.exhibitionSerialNumber, exhibitionData)





  
  }







//


// console.log(exhibitionData)







// 버튼 활성화하기

// React.MouseEventHandler<HTMLButtonElement>
  const handleToNext:React.MouseEventHandler<HTMLInputElement> =(e) => {
    e.preventDefault()
    
  }



  return <form className={styles.form} onSubmit={handleSubmit}>


  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>1. 전시회 포스터 등록하기</span>
    </div>
    <span className={styles.caution}>- 주의: 무조건 고화질로 올리되, 10MB이하로 올릴 것</span>
    <div className={`${styles.div3} ${styles.div3_1}`}>
      <span>여긴 나중에</span>

    </div>
  </div>  

  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>2. 전시회 정보 등록하기</span>
    </div>
      <span className={`${styles.caution} ${styles.caution_2}`}>- 주의: 하나라도 빠지면 관리가 힘들어 질 수 있으니까 
      <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최대한 빼먹지 말고 가입하기</span>
    <div className={`${styles.div3} ${styles.div3_2}`}>
      
      <div className={styles.lable_div}>

        <label className={styles.lable}>전시회 이름:</label>
        <input ref={exhibitionNameRef} className={styles.input}type="text" name="exhibition_name" placeholder='전시회 이름 입력'/>
      </div>
      
      <div className={styles.lable_div}>

        <label className={styles.lable}>전시회 장소:</label>
        <input ref={exhibitionLocationRef} className={styles.input}type="text" name="exhibition_location" placeholder='주소'/>
      </div>

      <div className={styles.lable_div}>
        <label className={styles.lable}>전시회 기간:</label>
          <input ref={exhibitionPeriodRef} className={styles.input}type="text" name="exhibition_period" placeholder='형식: 20210401~20210501'/>
      </div>

      <div className={styles.lable_div}>
        <label className={styles.lable}>전시회 주최:</label>
          <input ref={exhibitionSponserRef} className={styles.input}type="text" name="exhibition_sponser" placeholder='전시회 주최 작성'/>
      </div>
    
      

    </div>

    <div className={styles.empty_container_two}></div>
  </div>  
  
  
  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>3. 작품 등록하기</span>
    </div>
    <span className={`${styles.caution} ${styles.caution_3}`}>- 주의: 작품이 아직 등록이 안됬다면 
      <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;작품 등록먼저 하고 와야 됨</span>
      <PrivateWorksYear/>

    <div className={styles.empty_container_third_last}></div>

        
  </div> 
  





  
  
  
 <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>4. 전시장 건물사진 등록하기</span>
    </div>
    <h1>여긴 나중에</h1>
  </div>  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>5. 전시회 사진 등록하기</span>
    </div>
    <h1>여기도 나중에</h1>
  </div>  
  
  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>6. 메모</span>
    </div>
    
    <textarea ref={exhibitionMemoRef} className={styles.textarea}name="exhibition_memo" id="" >

    </textarea>


    <div className={styles.empty_container_sixth_last}></div>
  </div>  

  <input className={styles.to_next}  type="submit" />
  
</form>

}
export default ExhibitionUploadForm;