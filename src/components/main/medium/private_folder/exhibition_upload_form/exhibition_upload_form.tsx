import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useOutletContext } from 'react-router-dom';
import { TypeOfExhibition } from '../../../../../common/project_types';
import PrivateWorksYear from '../small/private_works_year/private_works_year';
import styles from "./exhibition_upload_form.module.css";
import Database from './../../../../../services/database';
import PreviewImage from '../../../small/preview_image/preview_image';
import ImageUpload from '../../../../../services/image_uploads';
import { myFunctions } from '../../../../../common/project_functions';

type ExhibitionUploadFormProps = {
  imageUploadService:ImageUpload;
}

const ExhibitionUploadForm = ({imageUploadService}:ExhibitionUploadFormProps) => {

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


  

  // //  전시회 데이터 (1/3)

  
const exhibitionNameRef = useRef<HTMLInputElement | null>(null)
const exhibitionLocationRef = useRef<HTMLInputElement | null>(null)
const exhibitionPeriodRef = useRef<HTMLInputElement | null>(null)
const exhibitionSponserRef = useRef<HTMLInputElement | null>(null)
const exhibitionMemoRef = useRef<HTMLTextAreaElement | null>(null)















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
    const array4 = [... new Set(array3)]
    setMuseumPreviewArray2(array4)
  }
}, [museumPreviewArray1])


useEffect(() => {
  if(museumUploadArray1){
    
    const aray3 = museumUploadArray2.concat(museumUploadArray1)
    const aray4 = aray3.map((file) => {return file.name})
    const aray5 =  [... new Set(aray4)]
    const aray6 = [] as File[]
    for (let i = 0; i < aray5.length; i++) {
      
      const fileValue = aray3.find(file => file.name == aray5[i])
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
    const array4 = [... new Set(array3)]
    setExhibitionPreviewArray2(array4)
  }
}, [exhibitionPreviewArray1])

useEffect(() => {
  if(exhibitionUploadArray1){
    
    const aray3 = exhibitionUploadArray2.concat(exhibitionUploadArray1)
    const aray4 = aray3.map((file) => {return file.name})
    const aray5 =  [... new Set(aray4)]
    const aray6 = [] as File[]
    for (let i = 0; i < aray5.length; i++) {
      
      const fileValue = aray3.find(file => file.name == aray5[i])
      if(fileValue){
        aray6.push(fileValue)
      }
    }
    setExhibitionUploadArray2(aray6)
  }
}, [exhibitionUploadArray1])






// 전시회 데이터 (2/3)

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    
  
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
try{

  // 포스터 (3/3)
  let exhibitionPoster
  if(posterFile){
    exhibitionPoster = await imageUploadService.uploadSingleImage(posterFile)
  }else{
    exhibitionPoster = null
  }
  
  
  // 전시관 외부사진 (4/5)
  let museumPhotos
  if (museumUploadArray2){
    museumPhotos = await imageUploadService.uploadMultipleImage(museumUploadArray2)
  }else{
  museumPhotos = null
  }

  // 전시회 사진 (4/5)
  let exhibitionPhotos
  if (exhibitionUploadArray2){
    exhibitionPhotos = await imageUploadService.uploadMultipleImage(exhibitionUploadArray2)
  }else{
  exhibitionPhotos = null
  }
  

  // 전시회 데이터(3/3)
  const exhibitionSerialNumberNum = myFunctions.generateAKey(0)
  const exhibitionData:TypeOfExhibition = {


    exhibitionSerialNumber : exhibitionSerialNumberNum,
    lastUpdate: new Date().toLocaleString(),
    exhibitionPosterUrl : exhibitionPoster?{[myFunctions.generateAKey(1)]:exhibitionPoster.url}:null,
    exhibitionName : exhibitionNameValue,
    exhibitionLocation :exhibitionLocationValue,
    exhibitionPeriod :exhibitionPeriodValue,
    exhibitionSponser :exhibitionSponserValue,
    exhibitionWorks: null,
    exhibitionBuildingPhotoUrl : null, // 완성 더 손댈 필요 없음
    exhibitionPhotoUrl : null, // 완성 더 손댈 필요 없음 
    exhibitionMemo :exhibitionMemoValue,
        
  }
  databaseService.uploadExhibitionData(exhibitionData.exhibitionSerialNumber, exhibitionData)

  // 전시장 외부사진 (5/5)
  let  idAndUrls 
  if(museumPhotos){
    idAndUrls= museumPhotos.map((asset, index) => {return [myFunctions.generateAKey(index+2), asset.url]})
    idAndUrls.forEach((value) => {databaseService.
      uploadPhotoUrl('exhibitions', exhibitionSerialNumberNum, 'exhibitionBuildingPhotoUrl', value[0], value[1])
    })
  }

  //전시회 사진 (5/5)
  let  idAndUrls2 
  if(exhibitionPhotos){
    idAndUrls2= exhibitionPhotos.map((asset, index) => {return [myFunctions.generateAKey(index+3), asset.url]})
    idAndUrls2.forEach((value) => {databaseService.
      uploadPhotoUrl('exhibitions',exhibitionSerialNumberNum, 'exhibitionPhotoUrl',value[0], value[1] )})
  }

















  navigate('/main/private/loggedin/exhibition_upload/exhibition_upload_done')


}catch(err){
  console.log(err)
  console.log('failed')
}



  }















  return <form className={styles.form} onSubmit={handleSubmit}>


  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>1. 전시회 포스터 등록하기</span>
    </div>
    <span className={styles.caution}>- 주의: 무조건 고화질로 올리되, 10MB이하로 올릴 것</span>
    <div className={`${styles.div3} ${styles.div3_1}`}>
      <input className={styles.input_file} type="file" name="file" accept="image/*"  onChange={handlePosterUpload}/>
      <div className={styles.preview_images}>
          {posterPreviewUrl&&<PreviewImage url={posterPreviewUrl}/>}

      </div>

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
    <input className={styles.input_file} type="file" name="file" accept="image/*" multiple onChange={handleExhibitionBuildingPhotoUpload}/>
    <div className={styles.preview_images}>
        { museumPreviewArray2&&museumPreviewArray2.map((url) => {
          return <PreviewImage key={museumPreviewArray2.indexOf(url)} url={url}/>
        }) }
    </div>
  </div>  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>5. 전시회 사진 등록하기</span>
    </div>
    <input className={styles.input_file} type="file" name="file" accept="image/*" multiple onChange={handleExhibitionPhotoUpload}/>
    <div className={styles.preview_images}>
        { exhibitionPreviewArray2&&exhibitionPreviewArray2.map((url) => {
          return <PreviewImage key={exhibitionPreviewArray2.indexOf(url)} url={url}/>
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