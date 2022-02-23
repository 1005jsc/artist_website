import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useOutletContext } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfExhibitionHistory, TypeOfHorizontalOrVerticalOrSquare, TypeOfSoldNotSold, TypeOfWork, TypeOfWorkSold } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkImageUpload from '../../../../../services/work_image_uploads';
import PreviewImageSingle from '../../../small/preview_image_single/preview_image_single';
import WorkFormExhibitionsSelect from '../small/work_form_exhibitions_select/work_form_exhibitions_select';
import styles from "./work_fix_form.module.css";


type WorkFixFormProps = {
  workImageUploadService: WorkImageUpload;
  workToFix: TypeOfWork;
}

const WorkFixForm = ({workImageUploadService, workToFix}:WorkFixFormProps) => {
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





  // 구매정보 데이터 (1/3)



  const [workToFixState, setWorkToFixState] = useState<TypeOfWork>(workToFix)
  const [workSoldToFixState, setWorkSoldToFixState] = useState<TypeOfWorkSold|null>(null)





// 작품 사진(2/3)
  const handleWorkUpload:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    let file;
    if(e.target.files){
      file = e.target.files[0]
      setWorkFile(file)
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setWorkPreviewUrl(reader.result as string)
        }
      }
    
    
    }


useEffect(() => {
  if(workToFix.workOnSale === 'sold'){
    setSoldSelected(true)
  }
}, [])

useEffect(() => {
  setWorkToFixState(workToFix)
  if(workToFix.workSold){
    setWorkSoldToFixState(workToFix.workSold)
    
  }else{
    setWorkSoldToFixState(null)

  }
}, [])



    // 작품 데이터(2/3)
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async(e) => {
    e.preventDefault()

    if(myFunctions.checkWordFromUrl('work_fix', url)){
      navigate('/main/private/loggedin/work_fix/work_fix_done')

    }else if(myFunctions.checkWordFromUrl('work_upload', url)){

      navigate('/main/private/loggedin/work_upload/work_upload_done')
    }else{
      console.log('url or navigate error')
    }


    
  


  

  
    // 구매 여부 데이터 (3/3)
    

      
  try{
    // 작품 사진 (3/3)
    let workImage
    if(workFile){
      workImage = await workImageUploadService.uploadSingleImage(workFile)
    }else{
      workImage = null
    }
    
  
  

      const rightBeforeSubmission = {...workToFixState} as TypeOfWork
      rightBeforeSubmission['workImageUrl'] = workImage?{[myFunctions.generateAKey(1)]:workImage.url}:workToFixState.workImageUrl
      rightBeforeSubmission['workSold'] = workSoldToFixState
      rightBeforeSubmission['workExhibitionHistory'] = exhibitionOnClickUrls
      rightBeforeSubmission['lastUpdate']=myFunctions.generateAKey(0)

    
      databaseService.uploadWorkData(rightBeforeSubmission.workSerialNumber, rightBeforeSubmission)
    

  }catch(err){
  console.log(err)
  console.log('failed')
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


// 들어오는 데이터 관리


// 작품 치수 defaultValue 로직
  let hi
  let hi3
  let hi4
  let hi5
  let hi6
  if(workToFix.workSize){
    hi = workToFix.workSize 
    if(hi.length >= 6){
      hi3 = hi.replace(/[^0-9]/g, ' ')?.substring(0,5)
      hi4 = hi?.replace(/[^0-9]/g, ' ')?.substring(5)
    }else{
      hi3 = '0'
      hi4 = '0'
    }
      hi5 = parseInt(hi3)
      hi6 = parseInt(hi4)
  }
  

  // onChange 에 관한것 edit을 위한 함수들

  const handleWorkDataChangeInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    // 여기 왜이런지 모르겠음 
    // 여기에 들어오는거 
    // size, onSale은 따로
    const fixWork:any = {...workToFixState}  
    const yes = myFunctions.snakeCaseToLowerCamelCase(e.target.name) as keyof TypeOfWork|'workSizeOne'|'workSizeTwo'
   
    if(yes==='workSizeOne' ){
      const workSizeOneValue = parseInt(workToFix.workSize?.replace(/[^0-9]/g, ' ')?.substring(0,5)!)
      const workSizeTwoValue = parseInt(workToFix.workSize?.replace(/[^0-9]/g, ' ')?.substring(5)!)
      let workHorizontalOrVertical:TypeOfHorizontalOrVerticalOrSquare = null
      
      
    if(workSizeTwoValue/workSizeOneValue < 7/9){
      workHorizontalOrVertical = 'horizontal'
    }else if(7/9<=workSizeTwoValue/workSizeOneValue&&workSizeTwoValue/workSizeOneValue<=9/7){
      workHorizontalOrVertical = 'square'
    }else{
      workHorizontalOrVertical = 'vertical'

    }

    fixWork['workSize']= `${e.target.value}cm x ${workSizeTwoValue}`
    fixWork['workHorizontalOrVertical'] = workHorizontalOrVertical

    }else if(yes === 'workSizeTwo'){

      const workSizeOneValue = parseInt(workToFix.workSize?.replace(/[^0-9]/g, ' ')?.substring(0,5)!)
      const workSizeTwoValue = parseInt(workToFix.workSize?.replace(/[^0-9]/g, ' ')?.substring(5)!)

      let workHorizontalOrVertical:TypeOfHorizontalOrVerticalOrSquare = null
      
      
      if(workSizeOneValue&&workSizeTwoValue){
      if(workSizeOneValue >= workSizeTwoValue){
        workHorizontalOrVertical = 'horizontal'
      }else{
        workHorizontalOrVertical = 'vertical'
      }
    }

      fixWork['workSize']= `${workSizeOneValue}cm x ${e.target.value}`
      fixWork['workHorizontalOrVertical'] = workHorizontalOrVertical


    }else{
      if(e.target.value){
        fixWork[yes]= e.target.value
      }
    }
        

    const fixWork2 = fixWork as TypeOfWork
    setWorkToFixState(fixWork2)

    
  
  }


  const handleWorkDataChangeSelect:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    // workMaterial, workOnSale 두가지 
    e.preventDefault()
    const fixWork:any = {...workToFixState}  
    const yes = myFunctions.snakeCaseToLowerCamelCase(e.target.name) as keyof TypeOfWork|'workSizeOne'|'workSizeTwo'
    if(yes==='workMaterial'){

   
      if(e.target.value){
        fixWork[yes]= e.target.value
      }


    }else if (yes==='workOnSale') {
      if(e.target.value){
        fixWork[yes]= e.target.value as TypeOfSoldNotSold
      }


    }else{
      return
    }
    const fixWork2 = fixWork as TypeOfWork
    setWorkToFixState(fixWork2)

  }
  const handleWorkDataChangeTextArea:React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault()
    const fixWork:any = {...workToFixState}  
    const yes = myFunctions.snakeCaseToLowerCamelCase(e.target.name) as keyof TypeOfWork|'workSizeOne'|'workSizeTwo'

    if(e.target.value){
      fixWork[yes]= e.target.value
    }
    const fixWork2 = fixWork as TypeOfWork
    setWorkToFixState(fixWork2)



  }

  const handleWorkSoldChangeInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
      const fixWorkSold = {...workSoldToFixState}
      // 여기가 널일때 
      const yes = myFunctions.snakeCaseToLowerCamelCase(e.target.name) as keyof TypeOfWorkSold
      
      // 여기서 잘 작동을 할까??
      if(e.target.value){
        fixWorkSold[yes]= e.target.value
      }
    
    const fixWorkSold2 = fixWorkSold as TypeOfWorkSold
    setWorkSoldToFixState(fixWorkSold2)
  
  
  
  }

  






  const [exhibitionOnClick, setExhibitionOnClick]= useState<Array<number>>([])
  const [exhibitionOnClickUrls, setExhibitionOnClickUrls] = useState<TypeOfExhibitionHistory>({})
  
  useEffect(() => {

    if(workToFix.workExhibitionHistory){
      
      const array1 = Object.values({...workToFix.workExhibitionHistory})
      setExhibitionOnClick(array1)
      setExhibitionOnClickUrls(workToFix.workExhibitionHistory)
    }else{
      console.log('we dont have')
      setExhibitionOnClick([])
      setExhibitionOnClickUrls({})

    }


  }, [])


  
  
  let array1 = [] as number[]
  let obj1 = {} as TypeOfExhibitionHistory
  let obj2 = {} as TypeOfExhibitionHistory
    const handleExhibitionSelect = (exhibitionSerialNumber:number, exhibitionName:string) => {
      array1 = [...exhibitionOnClick]
      obj1 = {...exhibitionOnClickUrls}
      if(array1.find((value) => value === exhibitionSerialNumber)){
        const array2 = array1.filter(value => value !== exhibitionSerialNumber)
        delete obj1[exhibitionSerialNumber]
        
  
        setExhibitionOnClick(array2)
        setExhibitionOnClickUrls(obj1)
        
      }else{
        console.log('new exhibiton!')
        array1.push(exhibitionSerialNumber)
        obj2[exhibitionName]= exhibitionSerialNumber
        
        
        obj1= {...exhibitionOnClickUrls, ...obj2}
        setExhibitionOnClickUrls(obj1)
        setExhibitionOnClick(array1)
      }
    }
  
  



  



  return <form className={styles.form} onSubmit={handleSubmit}>


  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>1. 작품사진 바꾸기</span>
    </div>
    <span className={styles.caution}>- 주의: 무조건 고화질로 올리되, 10MB이하로 올릴 것</span>
    <div className={`${styles.div3} ${styles.div3_1}`}>
    <button className={styles.image_upload_button}
    onClick={handleInputClick} >이미지파일 선택</button>
      <input className={styles.input_file} type="file" name="file" accept="image/*"  onChange={(e) => {handleWorkUpload(e)
      }}/>
      <div className={styles.preview_images}>
          {workPreviewUrl&&<PreviewImageSingle  url={workPreviewUrl}/>}

      </div>

    </div>
  </div>  

  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>2. 작품정보 다시 등록하기</span>
    </div>
      <span className={`${styles.caution} ${styles.caution_2}`}>- 주의: 바꾸고자 하는 부분을 마우스로 클릭하면 바꿀수있음 
      <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;최대한 빼먹지 말고 가입하기</span>
    <div className={`${styles.div3} ${styles.div3_2}`}>
      
      <div className={styles.lable_div}>

        <label className={styles.lable}>작품 이름:</label>
        <input  className={styles.input}type="text" name="work_name" placeholder='제목 입력' 
        defaultValue={workToFix.workName?workToFix.workName:undefined} onChange={handleWorkDataChangeInput}/>
      </div>

      <div className={styles.lable_div}>
        <label className={styles.lable}>작품 완성일자:</label>
          <input  className={styles.input}type="text" name="work_completion_date" placeholder='형식: 20210401'
          defaultValue={workToFix.workCompletionDate?workToFix.workCompletionDate:undefined} onChange={handleWorkDataChangeInput}/>
      </div>
    
      <div className={styles.lable_div}>
        <label className={styles.lable}>작품 치수:</label>
          <input  className={styles.number_input}type="text" name="work_size_one" defaultValue={hi5} onChange={handleWorkDataChangeInput}/>
          <span className={styles.units}>cm x </span>
          <input  className={styles.number_input}type="text" name="work_size_two" defaultValue={hi6} onChange={handleWorkDataChangeInput}/>
          <span className={styles.units}>cm </span>
      </div>
      
      <div className={styles.lable_div}>
        <label className={styles.lable}>재 료:</label>
        <select  className={styles.select} name="work_material" onChange={(e)=> {handleMaterial(e)
        handleWorkDataChangeSelect(e)}}
        defaultValue={workToFix.workMaterial?workToFix.workMaterial:undefined}>
          <option value="Acrylic on canvas">Acrylic on canvas</option>
          <option value="Acrylic on paper">Acrylic on paper</option>
          <option value="Mixed media">Mixed media</option>
          <option value="other">기타</option>
        </select>
        {otherSelected&&<input className={styles.input} type="text" name="work_material_other" placeholder='기타 재료이름' onChange={handleWorkDataChangeInput}/>}
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
        <select className={styles.select} name="work_on_sale" id=""onChange={(e) => {handleSold(e)
          handleWorkDataChangeSelect(e)}} defaultValue={workToFix.workOnSale?workToFix.workOnSale:undefined}>
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
          <input  className={styles.input}type="text" name="buyer_name" placeholder='이름'
          defaultValue={workSoldToFixState?.buyerName?workSoldToFixState?.buyerName:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매자 전화번호:</label>
          <input  className={styles.input}type="text" name="buyer_phone_number" placeholder='010-****-****'
          defaultValue={workSoldToFixState?.buyerPhoneNumber?workSoldToFixState?.buyerPhoneNumber:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매자 이메일 주소:</label>
          <input  className={styles.input}type="text" name="buyer_email" placeholder='name123@naver.com' 
          defaultValue={workSoldToFixState?.buyerEmail?workSoldToFixState?.buyerEmail:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 장소:</label>
          <input  className={styles.input}type="text" name="purchase_location" placeholder='광주 국윤미술관' 
          defaultValue={workSoldToFixState?.purchaseLocation?workSoldToFixState?.purchaseLocation:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 일시:</label>
          <input  className={styles.input}type="text" name="purchase_date" placeholder='형식: 20210401' 
          defaultValue={workSoldToFixState?.purchaseDate?workSoldToFixState?.purchaseDate:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three}>
          <label className={styles.lable}>구매 가격:</label>
          <input  className={styles.input}type="text" name="purchase_prize" placeholder='0,000,000원' 
          defaultValue={workSoldToFixState?.purchasePrize?workSoldToFixState?.purchasePrize:undefined}
          onChange={handleWorkSoldChangeInput}/>
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
      
    <WorkFormExhibitionsSelect 
        exhibitionOnClickArray={exhibitionOnClick}
        
        sendExhibitionToUpperComponent={handleExhibitionSelect}/>

    </div>
  </div>  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>5. 메모</span>
    </div>
    
    <textarea  className={styles.textarea} name="work_memo" id="" defaultValue={workToFix.workMemo?workToFix.workMemo:undefined}
    onChange={handleWorkDataChangeTextArea}>

    </textarea>


    <div className={styles.empty_container_sixth_last}></div>
  </div>  
  
  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>6. 작품 업로드 관리</span>
    </div>
    <div className={styles.div3}>

          <div className={styles.button_container}>

        <input type="submit" className={styles.fifth_buttons} value='작품의 데이터만 우선 저장만 하고 나중에 보여주기' />
        <button className={styles.fifth_buttons}>작품 업로드하고 웹사이트에도 바로 띄우기 </button>

          </div>

    </div>
  </div>  

</form>



}
export default WorkFixForm;