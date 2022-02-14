import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useOutletContext } from 'react-router-dom';
import { TypeOfExhibition } from '../../../../../common/project_types';
import PrivateWorksYear from '../small/private_works_year/private_works_year';
import styles from "./exhibition_upload_form.module.css";
import Database from './../../../../../services/database';
import PreviewImage from '../../../small/preview_image/preview_image';
import ImageUpload from '../../../../../services/image_uploads';

type ExhibitionUploadFormProps = {
  imageUploadService:ImageUpload;
}

const ExhibitionUploadForm = ({imageUploadService}:ExhibitionUploadFormProps) => {

  const databaseService= useOutletContext<Database>();

  const [posterPreviewUrl, setPosterPreviewUrl] = useState<string|null>(null)
  const [posterFile, setPosterFile] = useState<File|null>(null)
  
  const [museumPreviewArray1, setMuseumPreviewArray1] = useState<Array<string>>([])
  const [museumPreviewArray2, setMuseumPreviewArray2] = useState<Array<string>>([])

  const [museumUploadArray1, setMuseumUploadArray1] = useState<Array<File>>([])
  const [museumUploadArray2, setMuseumUploadArray2] = useState<Array<File>>([])
  
  const navigate = useNavigate()


// 포스터 등록하기 


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
      // 여기에 로직을 만들어야됨 
      // console.log(aray3)

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




  // //  전시회 데이터 만들기

  
  

  
const exhibitionNameRef = useRef<HTMLInputElement | null>(null)
const exhibitionLocationRef = useRef<HTMLInputElement | null>(null)
const exhibitionPeriodRef = useRef<HTMLInputElement | null>(null)
const exhibitionSponserRef = useRef<HTMLInputElement | null>(null)
const exhibitionMemoRef = useRef<HTMLTextAreaElement | null>(null)












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

  let exhibitionPoster
  if(posterFile){
    exhibitionPoster = await imageUploadService.uploadSingleImage(posterFile)
  }else{
    exhibitionPoster = null
  }


  let museumPhotos



  if (museumUploadArray2){
    
    museumPhotos = await imageUploadService.uploadMultipleImage(museumUploadArray2)

  }else{
    museumPhotos = null

  }
  console.log(museumPhotos)


  const exhibitionData:TypeOfExhibition = {


    exhibitionSerialNumber : Date.now(),
    lastUpdate: new Date().toLocaleString(),
    exhibitionPosterUrl : exhibitionPoster?{[Date.now()]:exhibitionPoster.url}:null,
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
      <span>여긴 나중에</span>
      <input  type="file" name="file" accept="image/*"  onChange={handlePosterUpload}/>
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
    <input  type="file" name="file" accept="image/*" multiple onChange={handleExhibitionBuildingPhotoUpload}/>
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