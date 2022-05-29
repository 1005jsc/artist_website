import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useOutletContext } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfExhibitionHistory,  TypeOfHorizontalOrVerticalOrSquare, TypeOfSoldNotSold,    TypeOfWork,    TypeOfWorkSold } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkImageUpload from '../../../../../services/work_image_uploads';
import PreviewImageSingle from '../../../small/preview_image_single/preview_image_single';
import WorkFormExhibitionsSelect from '../small/work_form_exhibitions_select/work_form_exhibitions_select';
import styles from "./work_upload_form.module.css";


type WorkUploadFormProps = {
  workImageUploadService: WorkImageUpload;
}

const WorkUploadForm = ({workImageUploadService: workImageUploadService}:WorkUploadFormProps) => {
  const databaseService= useOutletContext<Database>();
  const [url, setUrl] = useState<string|null>()

  useEffect(() => {
    setUrl(window.location.href)
  })

// 작품 사진 (1/)
  const [workPreviewUrl, setWorkPreviewUrl] = useState<string|null>(null)
  const [workFile, setWorkFile] = useState<File|null>(null)

  const [otherSelected, setOtherSelected]= useState<boolean>(false)
  const [soldSelected, setSoldSelected]= useState<boolean>(false)
  const navigate = useNavigate()

  // 작품 데이터  (1/)


  const workNameRef = useRef<HTMLInputElement | null>(null)
  const workCompletionDateRef = useRef<HTMLInputElement | null>(null)
  const workSizeOneRef = useRef<HTMLInputElement | null>(null)
  const workSizeTwoRef = useRef<HTMLInputElement | null>(null)
  const workMaterialSelectRef = useRef<HTMLSelectElement | null>(null)
  const workMaterialOtherRef = useRef<HTMLInputElement | null>(null)
  const workOnSaleRef = useRef<HTMLSelectElement | null>(null)
  const workMemoRef = useRef<HTMLTextAreaElement | null>(null)



  // 구매정보 데이터 (1/3)

  const buyerNameRef = useRef<HTMLInputElement | null>(null)
  const buyerPhoneNumberRef = useRef<HTMLInputElement | null>(null)
  const buyerEmailRef = useRef<HTMLInputElement | null>(null)
  const purchaseLocationRef = useRef<HTMLInputElement | null>(null)
  const purchaseDateRef = useRef<HTMLInputElement | null>(null)
  const purchasePrizeRef = useRef<HTMLInputElement | null>(null)


// 작품 사진(2/3)
  const handleWorkUpload:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    let file;
    if(e.target.files){
      file = e.target.files[0]
      setWorkFile(file)
      let reader = new FileReader()
      if(reader&&file){
        reader.readAsDataURL(file)
        reader.onload = () => {
          setWorkPreviewUrl(reader.result as string)

        }
      }else{
        setWorkFile(null)
        setWorkPreviewUrl(null)
      }

        
      }
    
    
    }




    const [workImageUrlNull, setWorkImageUrlNull] = useState<boolean>(false)
    const [workNameNull, setWorkNameNull] = useState<boolean>(false)
    const [workCompletionDateNull, setWorkCompletionDateNull] = useState<boolean>(false)
    const [workSizeNull, setWorkSizeNull] = useState<boolean>(false)




  // 로딩 중 

  const [loading, setLoading] = useState<boolean>(false)
  const [imageSizeError, setImageSizeError] = useState<boolean>(false)




    // 작품 데이터(2/3)
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async(e) => {
    setImageSizeError(false)
    e.preventDefault()

   

    let workImageUrlNulll = false
    let workNameNulll= false
    let workCompletionDateNulll = false
    let workSizeNulll = false

    let workNameValue
    let workCompletionDateValue 
    let workSizeOneValue
    let workSizeTwoValue
    let workMaterialSelectValue
    let workMaterialOtherValue
    let workOnSaleValue:TypeOfSoldNotSold
    let workMemoValue

    let buyerNameValue
    let buyerPhoneNumberValue
    let buyerEmailValue
    let purchaseLocationValue
    let purchaseDateValue
    let purchasePrizeValue
    
    if(workNameRef.current){
    workNameValue=workNameRef.current.value      
    }else{
            workNameValue = null
      
    }

    if(workCompletionDateRef.current){
    workCompletionDateValue=workCompletionDateRef.current.value 
    }else{
    workCompletionDateValue = null
    }

    if(workSizeOneRef.current){
    workSizeOneValue=workSizeOneRef.current.value
    }else{
    workSizeOneValue = null
    }

    if(workSizeTwoRef.current){
    workSizeTwoValue=workSizeTwoRef.current.value
    }else{
    workSizeTwoValue = null
    }

    if(workMaterialSelectRef.current){
    workMaterialSelectValue=workMaterialSelectRef.current.value
    }else{
    workMaterialSelectValue = null
    }

    if(workMaterialOtherRef.current){
    workMaterialOtherValue=workMaterialOtherRef.current.value
    }else{
    workMaterialOtherValue = null
    }
    if(workOnSaleRef.current){
    workOnSaleValue=workOnSaleRef.current.value as TypeOfSoldNotSold
    }else{
    workOnSaleValue = null
    }

    if(workMemoRef.current){
    workMemoValue=workMemoRef.current.value
    }else{
    workMemoValue = null
    }

    if(buyerNameRef.current){
    buyerNameValue=buyerNameRef.current.value
    }else{
    buyerNameValue = null
    }

    if(buyerPhoneNumberRef.current){
    buyerPhoneNumberValue=buyerPhoneNumberRef.current.value
    }else{
    buyerPhoneNumberValue = null
    }

    if(buyerEmailRef.current){
    buyerEmailValue=buyerEmailRef.current.value
    }else{
    buyerEmailValue = null
    }

    if(purchaseLocationRef.current){
    purchaseLocationValue=purchaseLocationRef.current.value
    }else{
    purchaseLocationValue = null
    }

    if(purchaseDateRef.current){
    purchaseDateValue=purchaseDateRef.current.value
    }else{
    purchaseDateValue = null
    }

    if(purchasePrizeRef.current){
    purchasePrizeValue=purchasePrizeRef.current.value
    }else{
    purchasePrizeValue = null
    }


  const workSizeData = 
      `${workSizeOneValue}cm x ${workSizeTwoValue}cm`

  let workHorizontalOrVerticalOrSquare:TypeOfHorizontalOrVerticalOrSquare = null
  if(workSizeOneValue&&workSizeTwoValue){
    if(parseInt(workSizeTwoValue)/parseInt(workSizeOneValue) < 8/9){
      workHorizontalOrVerticalOrSquare = 'horizontal'
    }else if(8/9<=parseInt(workSizeTwoValue)/parseInt(workSizeOneValue)&&parseInt(workSizeTwoValue)/parseInt(workSizeOneValue)<=9/8){
      workHorizontalOrVerticalOrSquare = 'square'
    }else{
      workHorizontalOrVerticalOrSquare = 'vertical'
    }
  
  }
    
  let workMaterialData 
    if(workMaterialSelectValue=='other'){
      workMaterialData=workMaterialOtherValue
    }else{
      workMaterialData=workMaterialSelectValue
    }  
    // 구매 여부 데이터 (3/3)
    const workSoldData:TypeOfWorkSold = {
      buyerName:  buyerNameValue,
      buyerPhoneNumber:     buyerPhoneNumberValue,
      buyerEmail:     buyerEmailValue,
      purchaseLocation:     purchaseLocationValue,
      purchaseDate:     purchaseDateValue,
      purchasePrize:     purchasePrizeValue

    }

  // 작품 사진 (3/3)
  let workImage

  const workSerialNumberNum = myFunctions.generateAKey(0)
  const workOnSaleData =workOnSaleValue
  



    const workData:TypeOfWork = {
      workSerialNumber :workSerialNumberNum,
      lastUpdate: new Date().toLocaleString(),
      workImageUrl: null, 
      workName: workNameValue,
      workCompletionDate: workCompletionDateValue,
      workSize : workSizeData,
      workMaterial: workMaterialData,
      workOnSale: workOnSaleData,
      workSold: workSoldData,
      workExhibitionHistory: exhibitionOnClick,
      workMemo: workMemoValue,
      workHorizontalOrVerticalOrSquare: workHorizontalOrVerticalOrSquare
    }

    

  
  try{
   
  // 작품 데이터(3/3)
   

      // 업로드전에 중요 파라메타 4가지의 널 체크 ( 더 깨끗하게 짤수 있는가는 모르겠는데 일단 )
      // 병렬적인 널체크 

      



      if(workFile){
        workImageUrlNulll= false
      }else{
        workImageUrlNulll = true
      }




      
      if(workData.workName){
        workNameNulll= false
      }else{
        workNameNulll= true
      }


      if(workData.workCompletionDate){

        if(workData.workCompletionDate.length == 8 ) {

          workCompletionDateNulll= false
        }else{

          workCompletionDateNulll= true
        }


      }else{
        workCompletionDateNulll= true

      }


      if(workData.workSize ){
        if(workData.workSize.length >= 8){
          workSizeNulll= false
        }else{
          workSizeNulll= true
        }
        
      }




      setWorkImageUrlNull(workImageUrlNulll)
      setWorkNameNull(workNameNulll)
      setWorkCompletionDateNull(workCompletionDateNulll)
      setWorkSizeNull(workSizeNulll)




      // 성공 시 드디어 데이터를 업로드 한다 
      if(!workImageUrlNulll&&!workNameNulll&&!workCompletionDateNulll&&!workSizeNulll){
        
        setLoading(true)
      
        if(workFile){
          workImage = await workImageUploadService.uploadSingleImage(workFile)
          
        }else{
          workImage = null
        }
        
        databaseService.uploadWorkData(workData.workSerialNumber, workData)
        databaseService.uploadPhotoUrl('works',workData.workSerialNumber,'workImageUrl', workData.workSerialNumber+1, workImage.url)
        let array1
        if(exhibitionOnClick){
          array1 = [...exhibitionOnClick]
          const yes = workImage.url
          array1.forEach((exhibitionId) => {
          databaseService.uploadWorkToExhibitionWorks(exhibitionId, workSerialNumberNum, workData)
          databaseService.uploadWorkImageToExhibitionWorks(exhibitionId,workData.workSerialNumber,workData.workSerialNumber+1, 
            yes)
            
        
        })
        }
          
        setLoading(false)
        
        if(myFunctions.checkWordFromUrl('work_fix', url)){
          navigate('/home/private/loggedin/work_fix/work_fix_done')
          
        }else if(myFunctions.checkWordFromUrl('work_upload', url)){
          
          navigate('/home/private/loggedin/work_upload/work_upload_done')
        }else{
          console.log('url or navigate error')
        }
      }else{
        window.scrollTo({
          top:0
        })
      }






    

  }catch(err){
    // 보통 이미지 사이즈 에러임
    // 완벽한 에러 핸들링은 아니다 하지만 일단 접한 에러는 사이즈 에러니까 이것만이라도 일단 잡자 
    workImage = null
    databaseService.deleteWorkData(workData.workSerialNumber)


  console.log(err)
  setImageSizeError(true)
  setLoading(false)
  window.scrollTo({
          top:0
        })


  }


}












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





const handleInputClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault()
  const yes:HTMLElement =  e.currentTarget.nextElementSibling as HTMLInputElement
  yes.click()

}













const [exhibitionOnClick, setExhibitionOnClick]= useState<Array<number>>([])




let array1 = [] as number[]
  const handleExhibitionSelect = (exhibitionSerialNumber:number) => {
    array1 = [...exhibitionOnClick]
    if(array1.find((value) => value === exhibitionSerialNumber)){
      const array2 = array1.filter(value => value !== exhibitionSerialNumber)
      
      setExhibitionOnClick(array2)
      
    }else{
      array1.push(exhibitionSerialNumber)
      setExhibitionOnClick(array1)

    }

    
    
  }



  return <form className={styles.form} onSubmit={handleSubmit}>


  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>1. 작품사진 올리기</span>
    </div>
    {workImageUrlNull&&<span className={styles.notice_wrong_image_upload}>필수: 작품 사진을 올려주세요</span>}
    {imageSizeError&&<span className={styles.notice_image_size_error}>작품 사진의 파일이 너무 큽니다 10MB 이하인 작품 사진을 업로드하시고 다시 업로드하십시오</span>}

    <span className={styles.caution}>- 주의: 무조건 고화질로 올리되, 10MB이하로 올릴 것</span>
    <div className={`${styles.div3} ${styles.div3_1}`}>
    <button className={styles.image_upload_button}
    onClick={handleInputClick} >이미지파일 선택</button>
      <input className={styles.input_file} type="file" name="file" accept="image/*"  onChange={handleWorkUpload}/>
      <div className={styles.preview_images}>
          {workPreviewUrl&&<PreviewImageSingle  url={workPreviewUrl}/>}

      </div>

    </div>
  </div>  

  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>2. 작품정보 등록하기</span>
    </div>
      <span className={`${styles.caution} ${styles.caution_2}`}>- 주의: 하나라도 빠지면 작품관리가 힘들어 질 수 있으니까 
      <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최대한 빼먹지 말고 가입하기</span>
    <div className={`${styles.div3} ${styles.div3_2}`}>
      
      <div className={styles.lable_div}>

        <label className={styles.lable}>작품 이름:</label>
        <input ref={workNameRef} className={styles.input}type="text" name="work_name" placeholder='제목 입력'/>
        {workNameNull&&<span className={styles.notice_wrong_password}>필수: 작품 이름을 넣어주세요</span>}

      </div>

      <div className={styles.lable_div}>
        <label className={styles.lable}>작품 완성일자:</label>
          <input ref={workCompletionDateRef} className={styles.input}type="text" name="work_completion_date" placeholder='형식: 20210401'/>
          {workCompletionDateNull&&<span className={styles.notice_wrong_password}>필수: 작품 완성일자를 여덟자리 숫자로 넣어주세요</span>}
      
      </div>
    
      <div className={styles.lable_div}>
        <label className={styles.lable}>작품 치수:</label>
        <div className={styles.small_input_div}>
          <input ref={workSizeOneRef} className={styles.number_input}type="text" name="work_size_one" placeholder="가로"/>
          <span className={styles.units}>cm x </span>
          <input ref={workSizeTwoRef} className={styles.number_input}type="text" name="work_size_two" placeholder="세로" />
          <span className={styles.units}>cm </span>
        </div>
          {workSizeNull&&<span className={styles.notice_wrong_password}>필수: 작품 치수를 기입해주세요	</span>}
        
      </div>
      
      <div className={styles.lable_div}>
        <label className={styles.lable}>재 료:</label>
        <select ref={workMaterialSelectRef} className={styles.select} name="work_material_select" onChange={handleMaterial}>
          <option value="Acrylic on canvas">Acrylic on canvas</option>
          <option value="Acrylic on paper">Acrylic on paper</option>
          <option value="Mixed media">Mixed media</option>
          <option value="other">기타</option>
        </select>
        {otherSelected&&<input className={styles.input} ref={workMaterialOtherRef}type="text" name="work_material_other" placeholder='기타 재료이름'/>}
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
        <select ref={workOnSaleRef} className={styles.select} name="workOnSale" id=""onChange={handleSold}>
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
          <input ref={buyerNameRef} className={styles.input}type="text" name="buyer_name" placeholder='이름'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매자 전화번호:</label>
          <input ref={buyerPhoneNumberRef} className={styles.input}type="text" name="buyer_phone_number" placeholder='010-****-****'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매자 이메일 주소:</label>
          <input ref={buyerEmailRef} className={styles.input}type="text" name="buyer_email" placeholder='name123@naver.com'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 장소:</label>
          <input ref={purchaseLocationRef} className={styles.input}type="text" name="purchase_location" placeholder='광주 국윤미술관'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 일시:</label>
          <input ref={purchaseDateRef} className={styles.input}type="text" name="purchase_date" placeholder='형식: 20210401'/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 가격:</label>
          <input ref={purchasePrizeRef} className={styles.input}type="text" name="purchase_prize" placeholder='0,000,000원'/>
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
    <span className={`${styles.caution} ${styles.caution_4}`}>- 본 작품 전시회가 있을 시 클릭</span>
    <div className={styles.div3_4}>
        <WorkFormExhibitionsSelect exhibitionOnClickArray={exhibitionOnClick} sendExhibitionToUpperComponent={handleExhibitionSelect}/>

    </div>
  </div>  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>5. 메모</span>
    </div>
    
    <textarea ref={workMemoRef} className={styles.textarea} name="work_memo" id="" >

    </textarea>


    <div className={styles.empty_container_sixth_last}></div>
  </div>  
  
  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>6. 작품 업로드 관리</span>
    </div>
    <div className={styles.div3}>

          <div className={styles.button_container}>

  {!loading?<input type="submit" className={styles.fifth_buttons} value='작품의 데이터만 우선 저장만 하고 나중에 보여주기' />
        :<div className={styles.loading_box}>
                <div className={styles.loading}></div>
        </div>
        
        }
        

          </div>

    </div>
  </div>  

</form>



}
export default WorkUploadForm;