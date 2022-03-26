import React, { useEffect,  useState } from "react"
import { useNavigate, useOutletContext } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { myLogics } from '../../../../../common/project_logics';
import { TypeOfExhibitionHistory, TypeOfExhibitions, TypeOfHorizontalOrVerticalOrSquare, TypeOfSoldNotSold, TypeOfWork, TypeOfWorkSold } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkImageUpload from '../../../../../services/work_image_uploads';
import PreviewImageSingle from '../../../small/preview_image_single/preview_image_single';
import WorkFormExhibitionsSelect from '../small/work_form_exhibitions_select/work_form_exhibitions_select';
import styles from "./work_fix_form.module.css";


type WorkFixFormProps = {
  workImageUploadService: WorkImageUpload;
  workToFix: TypeOfWork;
  deleteWork: (workSerialNumber:number) => void;
  workFixFinished: (k: number, state:'cancel'|'upload' ) => void;
  jobDone:boolean;
}

const WorkFixForm = ({workImageUploadService, workToFix, workFixFinished,jobDone, deleteWork}:WorkFixFormProps) => {
  const databaseService= useOutletContext<Database>();
  const [url, setUrl] = useState<string|null>()

  useEffect(() => {
    setUrl(window.location.href)
  })
  const navigate = useNavigate()

  const [everyExhibitionArray, setEveryExhibitionArray ] = useState<number[]>([])

  useEffect(() => {
    let array1
    let array2 = [] as number[]
    databaseService.getExhibitionData((data) => {
      array1 = Object.keys(data)
      for(let i=0; i<array1.length; i++){
        array2.push(parseInt(array1[i]))
      }
      setEveryExhibitionArray(array2)
    })
  }, [])




  if(jobDone){
      if(myFunctions.checkWordFromUrl('work_fix', url)){
            navigate('/home/private/loggedin/work_fix/work_fix_done')
      
          }else if(myFunctions.checkWordFromUrl('work_upload', url)){
      
            navigate('/home/private/loggedin/work_upload/work_upload_done')
          }else{
            console.log('url or navigate error')
          }
  }








///////////////////////////////////////////////////////////////

  // 여기가 매우 복잡하니 목차를 만듬 

  // 크게 3가지 




  // 0 utility 및 필요한 state정의 

  



  // Ⅰ 외부정보 받아오기 
  

    //  - 외부정보 받아오기, workToFix 를 props로 받아서 workToFixState로 넣기
    //  - 외부정보를 배분하기, defaultValue의 값을 바꿔넣기 



  // Ⅱ 작품 데이터



    //  - 사진 : 사진(3/3)
    //  - 작품이름
    //  - 작품완성일자
    //  - 작품 치수
    //  - 재료
    //  - 작품 매매정보
    //  - 전시내역
    //  - 메모

    //  - 위 데이터중 따로 자료처리구조를 만든 경우
    //  - 작품 치수
    //  - 작품 매매정보
    //  - 전시내역



  // Ⅲ 작품 업로드

    //  - 마지막으로 주요 데이터에 널 값이 있을시 경고주기

    //  - 널 문제가 해결되면 해당 작품 업로드: 널체크(3/3)
    
    //  - 업로드 후 다음 작품 수정 작업 시작 
    
    //  - 모든 작품 수정이 완료되면 완료 페이지로 넘어가기


  // Ⅳ 작품 지우기




//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////






// utility 및 필요한 state 정의







 // 가장 먼저 props로 받아온 work의 데이터를  work to fix state 안에 넣는다

const [workToFixState, setWorkToFixState] = useState<TypeOfWork|undefined>(workToFix)
const [workSoldToFixState, setWorkSoldToFixState] = useState<TypeOfWorkSold|null>(null)



  // 사진 (1/3)
  const [workPreviewUrl, setWorkPreviewUrl] = useState<string|null>(null)
  const [workFile, setWorkFile] = useState<File|null>(null)

  const [otherSelected, setOtherSelected]= useState<boolean>(false)
  const [soldSelected, setSoldSelected]= useState<boolean>(false)



  //널 체크를 위한 state들 (1/)
  

  const [workImageUrlNull, setWorkImageUrlNull] = useState<boolean>(false)
  const [workNameNull, setWorkNameNull] = useState<boolean>(false)
  const [workCompletionDateNull, setWorkCompletionDateNull] = useState<boolean>(false)
  const [workSizeNull, setWorkSizeNull] = useState<boolean>(false)






////////////////////////////////////////////////////////////









// Ⅰ 외부정보 받아오기 

//  - 외부정보 받아오기, workToFix 를 props로 받아서 workToFixState로 넣기





// defaultValue의 부모 div를 억지로 리렌더링시켜서 defaultValue의 값을 바꿔넣기  







const [workNameDefaultValue, setWorkNameDefaultValue] = useState<string>(workToFix.workName!)
const [workCompletionDateDefaultValue, setWorkCompletionDateDefaultValue] = useState<string>(workToFix.workCompletionDate!)
const [workMaterialDefaultValue, setWorkMaterialDefaultValue] = useState<string|null>(null)
const [workOnSaleDefaultValue, setWorkOnSaleDefaultValue] = useState<TypeOfSoldNotSold>(null)
const [workSoldBuyerName, setWorkSoldBuyerName] = useState<string|undefined>(undefined)
const [workSoldBuyerPhoneNumber, setWorkSoldBuyerPhoneNumber] = useState<string|number|undefined>(undefined)
const [workSoldBuyerEmail, setWorkSoldBuyerEmail] = useState<string|undefined>(undefined)
const [workSoldPurchaseLocation, setWorkSoldPurchaseLocation] = useState<string|undefined>(undefined)
const [workSoldPurchaseDate, setWorkSoldPurchaseDate] = useState<string|number|undefined>(undefined)
const [workSoldPurchasePrize, setWorkSoldPurchasePrize] = useState<string|number|undefined>(undefined)
const [workMemoDefaultValue, setWorkMemoDefaultValue] = useState<string|null>(null)
const [workSizeOneDefaultValue, setWorkSizeOneDefaultValue ] = useState<number|undefined>()
const [workSizeTwoDefaultValue, setWorkSizeTwoDefaultValue ] = useState<number|undefined>()

  useEffect(() => {
    // console.log(workToFix)



    setWorkToFixState(workToFix)
    if(workToFix.workSold){
      setWorkSoldToFixState(workToFix.workSold)
      
    }else{
      setWorkSoldToFixState(null)
    }

    if(workToFix.workOnSale === 'sold'){
      setSoldSelected(true)
    }

    if(workToFix.workSize){

      const yes = myLogics.workSizeValueDividerIntoWorkSizeOneAndWorkSizeTwo(workToFix.workSize)
      setWorkSizeOneDefaultValue(yes[0])
      setWorkSizeTwoDefaultValue(yes[1])
    }

    setWorkNameDefaultValue(workToFix.workName!)
    setWorkCompletionDateDefaultValue(workToFix.workCompletionDate!)
    setWorkMaterialDefaultValue(workToFix.workMaterial)
    setWorkOnSaleDefaultValue(workToFix.workOnSale)
    setWorkSoldBuyerName(workToFix.workSold?(workToFix.workSold.buyerName?workToFix.workSold.buyerName:undefined):undefined)
    setWorkSoldBuyerPhoneNumber(workToFix.workSold?(workToFix.workSold.buyerPhoneNumber?workToFix.workSold.buyerPhoneNumber:undefined):undefined)
    setWorkSoldBuyerEmail(workToFix.workSold?(workToFix.workSold.buyerEmail?workToFix.workSold.buyerEmail:undefined):undefined)
    setWorkSoldPurchaseLocation(workToFix.workSold?(workToFix.workSold.purchaseLocation?workToFix.workSold.purchaseLocation:undefined):undefined)
    setWorkSoldPurchaseDate(workToFix.workSold?(workToFix.workSold.purchaseDate?workToFix.workSold.purchaseDate:undefined):undefined)
    setWorkSoldPurchasePrize(workToFix.workSold?(workToFix.workSold.purchasePrize?workToFix.workSold.purchasePrize:undefined):undefined)
    setWorkMemoDefaultValue(workToFix.workMemo)
    
  }, [workToFix])




    // work-size


    useEffect(() => {
      if(workOnSaleDefaultValue == 'sold'){
        setSoldSelected(true)
      }else{
        setSoldSelected(false)
      }
    }, [workOnSaleDefaultValue])



////////////////////////////////////////////////////////////








// Ⅱ작품 데이터 관리




// 사진 (2/3)
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


  const handleInputClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const yes:HTMLElement =  e.currentTarget.nextElementSibling as HTMLInputElement
    yes.click()
  
  }
  
  




    // 재료
  const handleMaterial:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault()
    const selectValue= e.currentTarget.value
    if(selectValue==='other'){
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









// 수정되는 데이터 관리


// onChange 에 관한것 edit을 위한 함수들


const [imageSizeError, setImageSizeError] = useState<boolean>(false)


const handleWorkDataChangeInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
  e.preventDefault()
  // 파라메터 7개중 3개
  // worksize, workname, workcompletiondate
  
  
  
  // 여기 왜이런지 모르겠음 
  // 여기에 들어오는거 
  // size, onSale은 따로


  const fixWork:any = {...workToFixState}  
  const yes = myFunctions.snakeCaseToLowerCamelCase(e.target.name) as keyof TypeOfWork|'workSizeOne'|'workSizeTwo'
 
  if(yes==='workSizeOne' ){
    if(e.target.value.length >= 2){
      setWorkSizeNull(false)
      const workSizeOneValue = parseInt(e.target.value)
      const workSizeTwoValue = parseInt(workToFix.workSize?.replace(/[^0-9]/g, ' ')?.substring(5)!)
      let workHorizontalOrVerticalOrSquare:TypeOfHorizontalOrVerticalOrSquare = null
      
      
      if(workSizeTwoValue/workSizeOneValue < 7/9){
        workHorizontalOrVerticalOrSquare = 'horizontal'
      }else if(7/9<=workSizeTwoValue/workSizeOneValue&&workSizeTwoValue/workSizeOneValue<=9/7){
        workHorizontalOrVerticalOrSquare = 'square'
      }else{
        workHorizontalOrVerticalOrSquare = 'vertical'
      }
  
      fixWork['workSize']= `${workSizeOneValue}cm x ${workSizeTwoValue}cm`
      fixWork['workHorizontalOrVertical'] = workHorizontalOrVerticalOrSquare


    }else{
      setWorkSizeNull(true)
    }
    

  }else if(yes === 'workSizeTwo'){
    if(e.target.value.length >=2){
      setWorkSizeNull(false)
      const workSizeOneValue = parseInt(workToFix.workSize?.replace(/[^0-9]/g, ' ')?.substring(0,5)!)
      const workSizeTwoValue = parseInt(e.target.value)
  
      let workHorizontalOrVerticalOrSquare:TypeOfHorizontalOrVerticalOrSquare = null
      
      
    
  
      if(workSizeOneValue&&workSizeTwoValue){
        if(workSizeTwoValue/workSizeOneValue < 8/9){
          workHorizontalOrVerticalOrSquare = 'horizontal'
        }else if(8/9<=workSizeTwoValue/workSizeOneValue&&workSizeTwoValue/workSizeOneValue<=9/8){
          workHorizontalOrVerticalOrSquare = 'square'
        }else{
          workHorizontalOrVerticalOrSquare = 'vertical'
  
        }
      
      }
  
      fixWork['workSize']= `${workSizeOneValue}cm x ${workSizeTwoValue}cm`
      fixWork['workHorizontalOrVerticalOrSquare'] = workHorizontalOrVerticalOrSquare
  
    }else{
      setWorkSizeNull(true)
    }
    

  }else{
    if(e.target.value){
      fixWork[yes]= e.target.value
      console.log(workToFixState)
      
    }else{
      fixWork[yes]= ''
      console.log(workToFixState)
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
  //이름 , 완성일자
  
  e.preventDefault()
    const fixWorkSold = {...workSoldToFixState}
    // 여기가 널일때 
    const yes = myFunctions.snakeCaseToLowerCamelCase(e.target.name) as keyof TypeOfWorkSold
    
    // 여기서 잘 작동을 할까??
    if(e.target.value){
      fixWorkSold[yes]= e.target.value
    }else{
      fixWorkSold[yes]= ''
      
    }
  
  const fixWorkSold2 = fixWorkSold as TypeOfWorkSold
  console.log(fixWorkSold2)
  setWorkSoldToFixState(fixWorkSold2)
  


}




// 전시회 초기값 받아오기



const [exhibitionOnClickArray, setExhibitionOnClickArray]= useState<TypeOfExhibitionHistory>([])

useEffect(() => {
  
  if(workToFix.workExhibitionHistory){
    const array1 = Object.values({...workToFix.workExhibitionHistory}) as TypeOfExhibitionHistory
    setExhibitionOnClickArray(array1)

  }
}, [workToFix])




  let array1 = [] as number[]
  const handleExhibitionSelect = (exhibitionSerialNumber:number) => {
    array1 = [...exhibitionOnClickArray]

    if(array1.find((value) => value === exhibitionSerialNumber)){
      const array2 = array1.filter(value => value !== exhibitionSerialNumber)
      setExhibitionOnClickArray(array2)
      
    }else{
      array1.push(exhibitionSerialNumber)
      setExhibitionOnClickArray(array1)
    }




  }













////////////////////////////////////////////////////////////////











// Ⅲ 작품 업로드






const [loading, setLoading] = useState<boolean>(false)


    // 수정된 정보로 작품 업로드(2/3)
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async(e) => {

    let workImageUrlNulll =false
    let workNameNulll=false
    let workCompletionDateNulll=false
    let workSizeNulll=false


    e.preventDefault()

    // 사진 (3/3)
    let workImage
    
      
  try{
    
  
    if(workToFixState){
      const rightBeforeSubmissionOne = {...workToFixState} as TypeOfWork

      rightBeforeSubmissionOne['workSold'] = workSoldToFixState
    
      rightBeforeSubmissionOne['lastUpdate']=myFunctions.generateAKey(0)





      // 널 체크 (2/3)

      if(rightBeforeSubmissionOne.workImageUrl){
        workImageUrlNulll = false
      }else{
        workImageUrlNulll = true
      }

      if(rightBeforeSubmissionOne.workName){
        workNameNulll= false
      }else{
        workNameNulll= true
      }



      if(rightBeforeSubmissionOne.workCompletionDate){

        if(rightBeforeSubmissionOne.workCompletionDate.length == 8 ) {
          workCompletionDateNulll= false
        }else{
          workCompletionDateNulll= true
        }        
      }else{
        workCompletionDateNulll= true

      }


      if(rightBeforeSubmissionOne.workSize ){
        if(rightBeforeSubmissionOne.workSize.length >= 8){
          workSizeNulll= false
        }else{
          workSizeNulll= true
        }
        
      }else{
        workSizeNulll= true
      }

   


      setWorkImageUrlNull(workImageUrlNulll)
      setWorkNameNull(workNameNulll)
      setWorkCompletionDateNull(workCompletionDateNulll)
      setWorkSizeNull(workSizeNulll)

      // 널체크 (3/3)
      if(!workImageUrlNulll&&!workNameNulll&&!workCompletionDateNulll&&!workSizeNulll){

        setLoading(true)
        if(workFile){
          workImage = await workImageUploadService.uploadSingleImage(workFile)
        }else{
          workImage = null
        }
        rightBeforeSubmissionOne['workImageUrl'] = workImage?{[myFunctions.generateAKey(1)]:workImage.url}:workToFixState.workImageUrl
      
        databaseService.uploadWorkData(rightBeforeSubmissionOne.workSerialNumber, rightBeforeSubmissionOne)



     
        
        if(workImage){

        let array1 =[] as number[]
        let array2 =[] as number[] 
          

        array1 = [... exhibitionOnClickArray]
        array2 = everyExhibitionArray.filter((value) => !array1.includes(value) )


       
          const yes1 = workImage.url

          array1.forEach((exhibitionId) => {
            databaseService.uploadWorkToExhibitionWorks(exhibitionId, rightBeforeSubmissionOne.workSerialNumber, rightBeforeSubmissionOne)
            databaseService.uploadWorkImageToExhibitionWorks(exhibitionId,rightBeforeSubmissionOne.workSerialNumber,rightBeforeSubmissionOne.workSerialNumber+1, 
              yes1)
          
          })
  
          array2.forEach((exhibitionId) => {
            databaseService.deleteWorksInExhibitionData(exhibitionId,rightBeforeSubmissionOne.workSerialNumber)        
          })



        
        }else{
          
      
        let array1 = [] as number[]
        let array2 =[] as number[] 
          

          array1 = [... exhibitionOnClickArray]
          array2 = everyExhibitionArray.filter((value) => !array1.includes(value) )


        let okay:string|null = ''
        if(workToFixState.workImageUrl){
          okay = Object.values(workToFixState.workImageUrl)[0]
        }else{
          okay = null
        }
        
        databaseService.uploadExhibitionHistoryToWork(rightBeforeSubmissionOne.workSerialNumber, array1)
        array1.forEach((exhibitionId) => {
          
          databaseService.uploadWorkToExhibitionWorks(exhibitionId, rightBeforeSubmissionOne.workSerialNumber, rightBeforeSubmissionOne)
          databaseService.uploadWorkImageToExhibitionWorks(exhibitionId,rightBeforeSubmissionOne.workSerialNumber,rightBeforeSubmissionOne.workSerialNumber+1, 
            okay)
        
        })
        
        
        
        
        array2.forEach((exhibitionId) => {
          
          
            databaseService.deleteWorksInExhibitionData(exhibitionId,rightBeforeSubmissionOne.workSerialNumber)        
          })
          
          
        



        }

        workFixFinished(rightBeforeSubmissionOne.workSerialNumber, 'upload')
        setWorkToFixState(undefined)
        setLoading(false)


      }


      window.scrollTo({
        top:0
      })
      
    }



  }catch(err){
    workImage = null
  console.log(err)
  setImageSizeError(true)
  setLoading(false)
  window.scrollTo({
          top:0
        })
  }


}

























////////////////////////////////




  // Ⅳ 작품 지우기 

    const handleDeleteInfo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault()
      deleteWork(workToFix.workSerialNumber)
    }



    // 작품 업로드 취소하기 

  const handleCancelUpload:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

        workFixFinished(workToFix.workSerialNumber, 'cancel')
        setWorkToFixState(undefined)
      


      window.scrollTo({
        top:0
      })
  }
























  return <form className={styles.form} onSubmit={handleSubmit}>

    <div className={styles.big_title}>
      <span className={styles.s1}>수정하기</span>
      <button className={styles.delete_info} onClick={handleDeleteInfo}>작품정보 지우기</button>
    </div>
    {imageSizeError&&<span className={styles.notice_image_size_error}>작품 사진의 파일이 너무 큽니다 10MB 이하인 작품 사진을 업로드하시고 다시 업로드하십시오</span>}


  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>1. 작품사진 바꾸기</span>
    </div>
    {workImageUrlNull&&<span className={styles.notice_wrong_image_upload}>필수: 작품 완성일자를 넣어주세요</span>}

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
      
      <div className={`${styles.lable_div} ${styles.kk}`} key={workNameDefaultValue} >
              <label className={styles.lable}>작품 이름:</label>
        <input  className={styles.input}type="text" name="work_name" placeholder='제목 입력' 
      
        defaultValue={workNameDefaultValue?workNameDefaultValue:undefined} onChange={handleWorkDataChangeInput}/>
        {workNameNull&&<span className={styles.notice_wrong_password}>필수: 작품 이름을 넣어주세요</span>}

      </div>

    

      <div className={styles.lable_div} key={workCompletionDateDefaultValue} >
        <label className={styles.lable}>작품 완성일자:</label>
          <input  className={styles.input}type="text" name="work_completion_date" placeholder='형식: 20210401' 
          defaultValue={workCompletionDateDefaultValue?workCompletionDateDefaultValue:undefined} onChange={handleWorkDataChangeInput}/>
          {workCompletionDateNull&&<span className={styles.notice_wrong_password}>필수: 작품 완성일자를 여덟자리 숫자로 넣어주세요</span>}
      
      </div>
    
      <div className={styles.lable_div}>
        <label className={styles.lable}>작품 치수:</label>
        <div key={workSizeOneDefaultValue}>
        
          <input  className={styles.number_input}type="text" name="work_size_one" defaultValue={workSizeOneDefaultValue} placeholder='가로'onChange={handleWorkDataChangeInput}/>
          <span className={styles.units}>cm x </span>
        </div>
        <div key={workSizeTwoDefaultValue}>
          
            <input  className={styles.number_input}type="text" name="work_size_two" defaultValue={workSizeTwoDefaultValue} placeholder='세로'onChange={handleWorkDataChangeInput}/>
            <span className={styles.units}>cm </span>
        </div>
          {workSizeNull&&<span className={styles.notice_wrong_password}>필수: 올바른 작품 치수를 반드시 기입해주세요	</span>}
      
      </div>
      
      <div className={styles.lable_div} key={workMaterialDefaultValue}>
        <label className={styles.lable}>재 료:</label>
        <select  className={styles.select} name="work_material" onChange={(e)=> {handleMaterial(e)
        handleWorkDataChangeSelect(e)}}
        defaultValue={workMaterialDefaultValue?workMaterialDefaultValue:undefined}>
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
    <div className={styles.lable_div} key={workOnSaleDefaultValue}>
        <label className={styles.lable}>작품 매매 여부:</label>
        <select className={styles.select} name="work_on_sale" id=""onChange={(e) => {handleSold(e)
          handleWorkDataChangeSelect(e)}} defaultValue={workOnSaleDefaultValue?workOnSaleDefaultValue:undefined}>
          <option value="not_sold">안 팔림</option>
          <option value="sold">팔림</option>
        </select>
    </div>
        {soldSelected&& (<div className={styles.customer_info}>

        <div className={styles.customer_info_title_wrapper}>
          <span className={styles.customer_info_title}>작품 구매자 기본정보</span>  
        </div>

        <div className={styles.three} key={workSoldBuyerName}>
          <label className={styles.lable}>구매자: </label>
          <input  className={styles.input}type="text" name="buyer_name" placeholder='이름'
          defaultValue={workSoldBuyerName?workSoldBuyerName:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three} key={workSoldBuyerPhoneNumber}>
          <label className={styles.lable}>구매자 전화번호:</label>
          <input  className={styles.input}type="text" name="buyer_phone_number" placeholder='010-****-****'
          defaultValue={workSoldBuyerPhoneNumber?workSoldBuyerPhoneNumber:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three}  key={workSoldBuyerEmail}>
          <label className={styles.lable}>구매자 이메일 주소:</label>
          <input  className={styles.input}type="text" name="buyer_email" placeholder='name123@naver.com' 
          defaultValue={workSoldBuyerEmail?workSoldBuyerEmail:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three} key={workSoldPurchaseLocation}>
          <label className={styles.lable}>구매 장소:</label>
          <input  className={styles.input}type="text" name="purchase_location" placeholder='광주 국윤미술관' 
          defaultValue={workSoldPurchaseLocation?workSoldPurchaseLocation:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three} key={workSoldPurchaseDate}>
          <label className={styles.lable}>구매 일시:</label>
          <input  className={styles.input}type="text" name="purchase_date" placeholder='형식: 20210401' 
          defaultValue={workSoldPurchaseDate?workSoldPurchaseDate:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three} key={workSoldPurchasePrize}>
          <label className={styles.lable}>구매 가격:</label>
          <input  className={styles.input}type="text" name="purchase_prize" placeholder='0,000,000원' 
          defaultValue={workSoldPurchasePrize?workSoldPurchasePrize:undefined}
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
        exhibitionOnClickArray={exhibitionOnClickArray}
        
        sendExhibitionToUpperComponent={handleExhibitionSelect}/>

    </div>
  </div>  
  
  <div className={styles.div1} key={workMemoDefaultValue}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>5. 메모</span>
    </div>
    
    <textarea  className={styles.textarea} name="work_memo" id="" defaultValue={workMemoDefaultValue?workMemoDefaultValue:undefined}
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
{!loading?<input type="submit" className={styles.fifth_buttons} value='수정된 작품 업로드하기' />:<div className={styles.loading_box}>
                <div className={styles.loading}></div>
        </div>

}
        
        <button className={styles.fifth_buttons} onClick={handleCancelUpload}>수정된 작품 업로드 취소하기</button>
          </div>

    </div>
  </div>  

</form>



}
export default WorkFixForm;