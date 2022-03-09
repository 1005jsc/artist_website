import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useOutletContext } from 'react-router-dom';
import { TypeOfExhibition,  TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import styles from "./exhibition_upload_form.module.css";
import Database from './../../../../../services/database';
import PreviewImage from '../../../small/preview_image/preview_image';
import WorkImageUpload from '../../../../../services/work_image_uploads';
import { myFunctions } from '../../../../../common/project_functions';
import PreviewImageSingle from '../../../small/preview_image_single/preview_image_single';
import ExhibitionUploadFormWorkSelection from '../exhibition_upload_form_work_selection/exhibition_upload_form_work_selection';

type ExhibitionUploadFormProps = {
  exhibitionImageUploadService:WorkImageUpload;
}

const ExhibitionUploadForm = ({exhibitionImageUploadService}:ExhibitionUploadFormProps) => {

  const databaseService= useOutletContext<Database>();

  // 포스터 (1/3)
  const [posterPreviewUrl, setPosterPreviewUrl] = useState<string|null>(null)
  const [posterFile, setPosterFile] = useState<File|null>(null)
  
  // 전시관 사진 (1/5)
  const [museumPreviewArray1, setMuseumPreviewArray1] = useState<Array<string>>([])
  const [museumPreviewArray2, setMuseumPreviewArray2] = useState<Array<string>>([])

  const [museumUploadArray1, setMuseumUploadArray1] = useState<Array<File>>([])
  const [museumUploadArray2, setMuseumUploadArray2] = useState<Array<File>>([])
  
  // 전시회 사진 (1/5)
  const [exhibitionPreviewArray1, setExhibitionPreviewArray1] = useState<Array<string>>([])
  const [exhibitionPreviewArray2, setExhibitionPreviewArray2] = useState<Array<string>>([])

  const [exhibitionUploadArray1, setExhibitionUploadArray1] = useState<Array<File>>([])
  const [exhibitionUploadArray2, setExhibitionUploadArray2] = useState<Array<File>>([])
  const navigate = useNavigate()


  

  //  전시회 데이터 (1/3)

  
const exhibitionTitleRef = useRef<HTMLInputElement | null>(null)
const exhibitionNameRef = useRef<HTMLInputElement | null>(null)
const exhibitionLocationRef = useRef<HTMLInputElement | null>(null)
const exhibitionStartDateRef = useRef<HTMLInputElement | null>(null)
const exhibitionEndDateRef = useRef<HTMLInputElement | null>(null)
const exhibitionSponserRef = useRef<HTMLInputElement | null>(null)
const exhibitionMemoRef = useRef<HTMLTextAreaElement | null>(null)


// // 전시회 데이터 (작품) (1/2)
const [exhibitionWorksOnClick, setExhibitionWorksOnClick]= useState<Array<number>>([])
const [exhibitionWorksOnClickUrls, setExhibitionWorksOnClickUrls] = useState<TypeOfWorks|null>(null)













// 포스터 (2/3)

const handlePosterUpload:React.ChangeEventHandler<HTMLInputElement> = (e) => {
e.preventDefault()
let file;
if(e.target.files){
  file = e.target.files[0]
  setPosterFile(file)
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    setPosterPreviewUrl(reader.result as string)
    }
  }
}














// 전시관 외부사진 (2/5)

const handleExhibitionBuildingPhotoUpload:React.ChangeEventHandler<HTMLInputElement> = async(e) => {
  e.preventDefault()
  const array1 = [] as string[]
  const aray1 = [] as File[]

  const files =  e.target.files
  
  if(files){
    for (let i = 0; i < files.length; i++) {
      aray1.push(files[i])
      const aray2 = [...aray1]
      setMuseumUploadArray1(aray2)
      const reader = new FileReader()
      reader.readAsDataURL(files[i])
      reader.onload= () => {
        array1.push(reader.result as string)
        const array2 = [...array1]
        setMuseumPreviewArray1(array2)
      }
    }
  }
}

// 전시회 외부사진 (3/5)
useEffect(() => {
  if(museumPreviewArray1){
    
    const array3 = museumPreviewArray2.concat(museumPreviewArray1)
    const array4 = [...new Set(array3)]
    setMuseumPreviewArray2(array4)
  }
}, [museumPreviewArray1])


useEffect(() => {
  if(museumUploadArray1){
    
    const aray3 = museumUploadArray2.concat(museumUploadArray1)
    const aray4 = aray3.map((file) => {return file.name})
    const aray5 =  [...new Set(aray4)]
    const aray6 = [] as File[]
    for (let i = 0; i < aray5.length; i++) {
      
      const fileValue = aray3.find(file => file.name === aray5[i])
      if(fileValue){
        aray6.push(fileValue)
      }
    }
    setMuseumUploadArray2(aray6)
  }
}, [museumUploadArray1])




















// 전시회 사진 (2/5)

const handleExhibitionPhotoUpload:React.ChangeEventHandler<HTMLInputElement> = async(e) => {
  e.preventDefault()
  const array1 = [] as string[]
  const aray1 = [] as File[]

  const files =  e.target.files
  
  if(files){
    for (let i = 0; i < files.length; i++) {
      aray1.push(files[i])
      const aray2 = [...aray1]
      setExhibitionUploadArray1(aray2)
      const reader = new FileReader()
      reader.readAsDataURL(files[i])
      reader.onload= () => {
        array1.push(reader.result as string)
        const array2 = [...array1]
        setExhibitionPreviewArray1(array2)
      }
    }
  }
}

 // 전시회 사진 (3/5)

 useEffect(() => {
  if(exhibitionPreviewArray1){
    
    const array3 = exhibitionPreviewArray2.concat(exhibitionPreviewArray1)
    const array4 = [...new Set(array3)]
    setExhibitionPreviewArray2(array4)
  }
}, [exhibitionPreviewArray1])

useEffect(() => {
  if(exhibitionUploadArray1){
    
    const aray3 = exhibitionUploadArray2.concat(exhibitionUploadArray1)
    const aray4 = aray3.map((file) => {return file.name})
    const aray5 =  [...new Set(aray4)]
    const aray6 = [] as File[]
    for (let i = 0; i < aray5.length; i++) {
      
      const fileValue = aray3.find(file => file.name === aray5[i])
      if(fileValue){
        aray6.push(fileValue)
      }
    }
    setExhibitionUploadArray2(aray6)
  }
}, [exhibitionUploadArray1])






const [exhibitionTitleNull, setExhibitionTitleNull] = useState<boolean>(false)
const [exhibitionNameNull, setExhibitionNameNull] = useState<boolean>(false)
const [exhibitionStartDateNull, setExhibitionStartDateNull] = useState<boolean>(false)
const [exhibitionEndDateNull, setExhibitionEndDateNull] = useState<boolean>(false)


let exhibitionTitleNulll = false
let exhibitionNameNulll = false
let exhibitionStartDateNulll = false
let exhibitionEndDateNulll = false





// 전시회 데이터 (2/3)

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    
  
  let exhibitionTitleValue
  let exhibitionNameValue
  let exhibitionLocationValue
  let exhibitionStartDateValue
  let exhibitionEndDateValue
  let exhibitionSponserValue
  let exhibitionMemoValue
  
  if(exhibitionTitleRef.current){
      exhibitionTitleValue = exhibitionTitleRef.current.value
  }else{exhibitionTitleValue = null
    
  }
  if(exhibitionNameRef.current){
      exhibitionNameValue = exhibitionNameRef.current.value
  }else{exhibitionNameValue = null
    
  }
  
  if(exhibitionLocationRef.current){
      exhibitionLocationValue = exhibitionLocationRef.current.value
  }else{exhibitionLocationValue = null

  }
  
  if(exhibitionStartDateRef.current){
      exhibitionStartDateValue = exhibitionStartDateRef.current.value
  }else{exhibitionStartDateValue = null

  }
  if(exhibitionEndDateRef.current){
      exhibitionEndDateValue = exhibitionEndDateRef.current.value
  }else{exhibitionEndDateValue = null

  }
  
  if(exhibitionSponserRef.current){
      exhibitionSponserValue = exhibitionSponserRef.current.value
  }else{exhibitionSponserValue = null

  }
  
  if(exhibitionMemoRef.current){
      exhibitionMemoValue = exhibitionMemoRef.current.value
  }else{exhibitionMemoValue = null

  }
try{

  // 포스터 (3/3)
  let exhibitionPoster
  if(posterFile){
    exhibitionPoster = await exhibitionImageUploadService.uploadSingleImage(posterFile)
  }else{
    exhibitionPoster = null
  }
  
  
  // 전시관 외부사진 (4/5)
  let museumPhotos
  if (museumUploadArray2){
    museumPhotos = await exhibitionImageUploadService.uploadMultipleImage(museumUploadArray2)
  }else{
  museumPhotos = null
  }

  // 전시회 사진 (4/5)
  let exhibitionPhotos
  if (exhibitionUploadArray2){
    exhibitionPhotos = await exhibitionImageUploadService.uploadMultipleImage(exhibitionUploadArray2)
  }else{
  exhibitionPhotos = null
  }


  // // 전시회 작품 데이터 (2/2)


  




  

  // 전시회 데이터(3/3)
  const exhibitionSerialNumberNum = myFunctions.generateAKey(0)
  const exhibitionData:TypeOfExhibition = {


    exhibitionSerialNumber : exhibitionSerialNumberNum,
    lastUpdate: new Date().toLocaleString(),
    exhibitionPosterUrl : exhibitionPoster?{[myFunctions.generateAKey(1)]:exhibitionPoster.url}:null,
    exhibitionName : exhibitionNameValue,
    exhibitionTitle : exhibitionTitleValue,
    exhibitionLocation :exhibitionLocationValue,
    exhibitionStartDate :exhibitionStartDateValue,
    exhibitionEndDate :exhibitionEndDateValue,
    exhibitionSponser :exhibitionSponserValue,
    exhibitionWorks: exhibitionWorksOnClickUrls, 
    exhibitionBuildingPhotoUrl : null, // null이라고 놀라지말고 바로 밑에 firebase를 이용해서 데이터를 다시 올리는 로직을 이용해서 데이터를 집어 넣고 있으니 안심하셈  
    exhibitionPhotoUrl : null, // 완성 더 손댈 필요 없음 
    exhibitionMemo :exhibitionMemoValue,
        
  }

  // 전시장 외부사진 (5/5)
  let  idAndUrls 
  if(museumPhotos){
    idAndUrls= museumPhotos.map((asset, index) => {return [myFunctions.generateAKey(index+2), asset.url]})
    idAndUrls.forEach((value) => {databaseService.uploadPhotoUrl('exhibitions', exhibitionSerialNumberNum, 'exhibitionBuildingPhotoUrl', value[0], value[1])
    })
  }

  //전시회 사진 (5/5)
  let  idAndUrls2 
  if(exhibitionPhotos){
    idAndUrls2= exhibitionPhotos.map((asset, index) => {return [myFunctions.generateAKey(index+3), asset.url]})
    idAndUrls2.forEach((value) => {databaseService.uploadPhotoUrl('exhibitions',exhibitionSerialNumberNum, 'exhibitionPhotoUrl',value[0], value[1] )})
  }





  if(exhibitionData.exhibitionTitle){
    exhibitionTitleNulll= false
  }else{

    exhibitionTitleNulll= true
  }

  
  if(exhibitionData.exhibitionName){
    exhibitionNameNulll= false
  }else{

    exhibitionNameNulll= true
  }
  if(exhibitionData.exhibitionStartDate){
    if(exhibitionData.exhibitionStartDate.length == 8){
      exhibitionStartDateNulll= false
    }else{
  
      exhibitionStartDateNulll= true
    }
  }else{
    exhibitionStartDateNulll= true

  }
  if(exhibitionData.exhibitionEndDate){
    if(exhibitionData.exhibitionEndDate.length == 8){
      exhibitionEndDateNulll= false
    }else{
  
      exhibitionEndDateNulll= true
    }
  }else{
    exhibitionEndDateNulll= true

  }
  

  console.log(exhibitionTitleNulll)
  console.log(exhibitionNameNulll)
  console.log(exhibitionStartDateNulll)
  console.log(exhibitionEndDateNulll)
  console.log(exhibitionData.exhibitionStartDate)
  console.log(exhibitionData.exhibitionEndDate)


  setExhibitionTitleNull(exhibitionTitleNulll)
  setExhibitionNameNull(exhibitionNameNulll)
  setExhibitionStartDateNull(exhibitionStartDateNulll)
  setExhibitionEndDateNull(exhibitionEndDateNulll)




  // 성공 시 
  if(!exhibitionTitleNulll&&!exhibitionNameNulll&&!exhibitionStartDateNulll&&!exhibitionEndDateNulll){

    databaseService.uploadExhibitionData(exhibitionData.exhibitionSerialNumber, exhibitionData)
    navigate('/main/private/loggedin/exhibition_upload/exhibition_upload_done')
  }else{
    
    window.scrollTo({
      top:0
    })
  }

  


}catch(err){
  console.log(err)
  console.log('failed')
}

  }







  const handleDeleteSelected = (datasetPhotoType:string, datasetIndex:string) => {

    if(datasetPhotoType === 'museum'){

      const aray1 = [...museumUploadArray2]
      const aray2 = aray1.filter(val => aray1.indexOf(val) !== parseInt(datasetIndex) )
      setMuseumUploadArray2(aray2)

      const array1 = [...museumPreviewArray2]
      const array2 = array1.filter(val => array1.indexOf(val) !== parseInt(datasetIndex) )
      setMuseumPreviewArray2(array2)


    }else if(datasetPhotoType === 'exhibition'){
      
      const aray1 = [...exhibitionUploadArray2]
      const aray2 = aray1.filter(val => aray1.indexOf(val) !== parseInt(datasetIndex) )
      setExhibitionUploadArray2(aray2)

      const array1 = [...exhibitionPreviewArray2]
      const array2 = array1.filter(val => array1.indexOf(val) !== parseInt(datasetIndex) )
      setExhibitionPreviewArray2(array2)



    }


  }


  const handleDelete:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const datasetIndex =e.currentTarget.parentNode?.parentElement?.dataset.index 
    const datasetPhotoType=e.currentTarget.parentNode?.parentElement?.parentElement?.dataset.photo 
    if(datasetPhotoType){
      if(datasetIndex){

        handleDeleteSelected(datasetPhotoType, datasetIndex)
      }

    }
    

  }

  const handleInputClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const yes:HTMLElement =  e.currentTarget.nextElementSibling as HTMLInputElement
    yes.click()

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
  




  return <form className={styles.form} onSubmit={handleSubmit}>


  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>1. 전시회 포스터 등록하기</span>
    </div>

    <span className={styles.caution}>- 주의: 무조건 고화질로 올리되, 10MB이하로 올릴 것</span>
    <div className={`${styles.div3} ${styles.div3_1}`}>
    <button className={styles.image_upload_button}
    onClick={handleInputClick} >이미지파일 선택</button>
      <input className={styles.input_file} type="file" name="file" accept="image/*"  onChange={handlePosterUpload}/>
      <div className={styles.preview_images}  >
          {posterPreviewUrl&&<PreviewImageSingle  url={posterPreviewUrl}/>}

      </div>

    </div>
  </div>  

  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>2. 전시회 정보 등록하기</span>
    </div>
      <span className={`${styles.caution} ${styles.caution_2}`}>- 주의: 형식에 맞춰서 작성하고,  
      <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;데이터를 최대한 채워서 작성할 것</span>
    <div className={`${styles.div3} ${styles.div3_2}`}>
      
      <div className={styles.lable_div}>

        <label className={styles.lable}>전시회 타이틀:</label>
        <input ref={exhibitionTitleRef} className={styles.input}type="text" name="exhibition_title" placeholder='예: 국윤미술관 기획초대전'/>
    {exhibitionTitleNull&&<span className={styles.notice_upload_error}>필수: 전시회 타이틀을 넣어주세요</span>}
      
      </div>
      <div className={styles.lable_div}>

        <label className={styles.lable}>전시회 이름:</label>
        <input ref={exhibitionNameRef} className={styles.input}type="text" name="exhibition_name" placeholder='예: 조용남 展 -시간을 담다-'/>
    {exhibitionNameNull&&<span className={styles.notice_upload_error}>필수: 전시회 이름을 넣어주세요</span>}
      
      </div>
      
      <div className={styles.lable_div}>

        <label className={styles.lable}>전시회 장소:</label>
        <input ref={exhibitionLocationRef} className={styles.input}type="text" name="exhibition_location" placeholder='주소'/>
      </div>

      <div className={styles.lable_div}>
        <label className={styles.lable}>전시회 시작일:</label>
          <input ref={exhibitionStartDateRef} className={styles.input}type="text" name="exhibition_start_date" placeholder='형식: 20210401'/>
    {exhibitionStartDateNull&&<span className={styles.notice_upload_error}>필수: 전시회 시작일을 여덟자리 숫자로 넣어주세요</span>}
      
      </div>

      <div className={styles.lable_div}>
        <label className={styles.lable}>전시회 종료일:</label>
          <input ref={exhibitionEndDateRef} className={styles.input}type="text" name="exhibition_end_date" placeholder='형식: 20210501'/>
    {exhibitionEndDateNull&&<span className={styles.notice_upload_error}>필수: 전시회 종료일을 여덟자리 숫자로 넣어주세요</span>}
      
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
      <ExhibitionUploadFormWorkSelection exhibitionWorksOnClickArray={exhibitionWorksOnClick} 
      passSelectedWorkToUpper={handleExhibitionWorksUpdate}/>

    <div className={styles.empty_container_third_last}></div>

        
  </div> 
  





  
  
  
 <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>4. 전시장 건물사진 등록하기</span>
    </div>
    <button className={styles.image_upload_button}
    onClick={handleInputClick} >이미지파일 선택</button>
    <input className={styles.input_file} type="file" name="file" accept="image/*" multiple onChange={handleExhibitionBuildingPhotoUpload}/>
    <div className={styles.preview_images} data-photo="museum">
        { museumPreviewArray2&&museumPreviewArray2.map((url, index) => {
          return <PreviewImage handleDelete={handleDelete} key={index} index={index} url={url}/>
        }) }
    </div>
  </div>  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>5. 전시회 사진 등록하기</span>
    </div>
    <button className={styles.image_upload_button}
    onClick={handleInputClick} >이미지파일 선택</button>
    <input className={styles.input_file} type="file" name="file" accept="image/*" multiple onChange={handleExhibitionPhotoUpload}/>
    <div className={styles.preview_images} data-photo="exhibition">
        { exhibitionPreviewArray2&&exhibitionPreviewArray2.map((url, index) => {
          return <PreviewImage handleDelete={handleDelete} key={index} index={index} url={url}/>
        }) }
    </div>
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