import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import PrivateExhibitionsSelect from '../small/private_exhibitions_select/private_exhibitions_select';
import styles from "./work_fix_form.module.css";

const WorkFixForm = () => {

  const [otherSelected, setOtherSelected]= useState<boolean>(false)
  const [soldSelected, setSoldSelected]= useState<boolean>(false)
  const navigate = useNavigate()



  const handleMaterial:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
      e.preventDefault()
    const selectValue= e.currentTarget.value
    if(selectValue=='other'){
      setOtherSelected(true)
    }else{
      setOtherSelected(false)
    }

  }

  const handleSold:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault()
  const selectValue= e.currentTarget.value
  if(selectValue=='sold'){
    setSoldSelected(true)
  }else{
    setSoldSelected(false)
  }

}

const handleFifthButtonOne:React.MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault()

  navigate('/main/private/loggedin/work_fix/work_fix_done')



}





  return <form className={styles.form}>


  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>1. 작품사진 수정하기</span>
    </div>
    <span className={styles.caution}>- 주의: 무조건 고화질로 올리되, 10MB이하로 올릴 것</span>
    <div className={`${styles.div3} ${styles.div3_1}`}>
      <span>여긴 나중에</span>

    </div>
  </div>  

  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>2. 작품정보 수정하기</span>
    </div>
      <span className={`${styles.caution} ${styles.caution_2}`}>- 주의: 하나라도 빠지면 작품관리가 힘들어 질 수 있으니까 
      <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최대한 빼먹지 말고 가입하기</span>
    <div className={`${styles.div3} ${styles.div3_2}`}>
      
      <div className={styles.lable_div}>

        <label className={styles.lable}>작품 이름:</label>
        <input className={styles.text_input}type="text" name="name" placeholder='제목 입력'/>
      </div>

      <div className={styles.lable_div}>
        <label className={styles.lable}>작품 완성일자:</label>
          <input className={styles.text_input}type="text" name="name" placeholder='형식: 20210401'/>
      </div>
    
      <div className={styles.lable_div}>
        <label className={styles.lable}>작품 치수:</label>
          <input className={styles.number_input}type="text" name="name" />
          <span className={styles.units}>cm x </span>
          <input className={styles.number_input}type="text" name="name"  />
          <span className={styles.units}>cm </span>
      </div>
      
      <div className={styles.lable_div}>
        <label className={styles.lable}>재 료:</label>
        <select className={styles.select} name="name" id=""onChange={handleMaterial}>
          <option value="Acrylic on canvas">Acrylic on canvas</option>
          <option value="Acrylic on paper">Acrylic on paper</option>
          <option value="Mixed media">Mixed media</option>
          <option value="other">기타</option>
        </select>
        {otherSelected&&<input className={styles.text_input}type="text" name="name" placeholder='기타 재료이름'/>}
      </div>
      
      
      

    </div>

    <div className={styles.empty_container_two}></div>
  </div>  
  
  
  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>3. 작품 매매 정보</span>
    </div>
    <div className={styles.div3_3}>
    <div className={styles.lable_div}>
        <label className={styles.lable}>작품 매매 여부:</label>
        <select className={styles.select} name="name" id=""onChange={handleSold}>
          <option value="not_sold">안 팔림</option>
          <option value="sold">팔림</option>
        </select>
        </div>
        {soldSelected&& (<div className={styles.customer_info}>

        <div className={styles.customer_info_title_wrapper}>
          <span className={styles.customer_info_title}>작품 구매자 기본정보</span>  
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매자: </label>
          <input className={styles.text_input}type="text" name="name" placeholder='이름'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매자 전화번호:</label>
          <input className={styles.text_input}type="text" name="name" placeholder='010-****-****'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매자 이메일 주소:</label>
          <input className={styles.text_input}type="text" name="name" placeholder='name123@naver.com'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 장소:</label>
          <input className={styles.text_input}type="text" name="name" placeholder='광주 국윤미술관'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 일시:</label>
          <input className={styles.text_input}type="text" name="name" placeholder='형식: 20210401'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 가격:</label>
          <input className={styles.text_input}type="text" name="name" placeholder='0,000,000원'/>
        </div>
        <div className={styles.empty_container_three}></div>

        </div>)
        
        }
      

    </div>

    <div className={styles.empty_container_third_last}></div>

        
  </div> 
  





  
  
  
 <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>4. 전시 내역</span>
    </div>
    <span className={`${styles.caution} ${styles.caution_4}`}>- 아래 전시회들 가운데 본 작품이 출전한 전시회가 있을 시 
    클릭</span>
    <div className={styles.div3_4}>
        <PrivateExhibitionsSelect/>

    </div>
  </div>  
  
  
  
  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>5. 작품 업로드 관리</span>
    </div>
    <div className={styles.div3}>

          <div className={styles.button_container}>

        <button className={styles.fifth_buttons} onClick={handleFifthButtonOne}>작품의 데이터만 우선 저장만 하고 나중에 보여주기</button>
        <button className={styles.fifth_buttons}>작품 업로드하고 웹사이트에도 바로 띄우기 </button>

          </div>

    </div>
  </div>  

</form>




}
export default WorkFixForm;