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

  // ????????? ?????? ???????????? ????????? ?????? 

  // ?????? 3?????? 




  // 0 utility ??? ????????? state?????? 

  



  // ??? ???????????? ???????????? 
  

    //  - ???????????? ????????????, workToFix ??? props??? ????????? workToFixState??? ??????
    //  - ??????????????? ????????????, defaultValue??? ?????? ???????????? 



  // ??? ?????? ?????????



    //  - ?????? : ??????(3/3)
    //  - ????????????
    //  - ??????????????????
    //  - ?????? ??????
    //  - ??????
    //  - ?????? ????????????
    //  - ????????????
    //  - ??????

    //  - ??? ???????????? ?????? ????????????????????? ?????? ??????
    //  - ?????? ??????
    //  - ?????? ????????????
    //  - ????????????



  // ??? ?????? ?????????

    //  - ??????????????? ?????? ???????????? ??? ?????? ????????? ????????????

    //  - ??? ????????? ???????????? ?????? ?????? ?????????: ?????????(3/3)
    
    //  - ????????? ??? ?????? ?????? ?????? ?????? ?????? 
    
    //  - ?????? ?????? ????????? ???????????? ?????? ???????????? ????????????


  // ??? ?????? ?????????




//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////






// utility ??? ????????? state ??????







 // ?????? ?????? props??? ????????? work??? ????????????  work to fix state ?????? ?????????

const [workToFixState, setWorkToFixState] = useState<TypeOfWork|undefined>(workToFix)
const [workSoldToFixState, setWorkSoldToFixState] = useState<TypeOfWorkSold|null>(null)



  // ?????? (1/3)
  const [workPreviewUrl, setWorkPreviewUrl] = useState<string|null>(null)
  const [workFile, setWorkFile] = useState<File|null>(null)

  const [otherSelected, setOtherSelected]= useState<boolean>(false)
  const [soldSelected, setSoldSelected]= useState<boolean>(false)



  //??? ????????? ?????? state??? (1/)
  

  const [workImageUrlNull, setWorkImageUrlNull] = useState<boolean>(false)
  const [workNameNull, setWorkNameNull] = useState<boolean>(false)
  const [workCompletionDateNull, setWorkCompletionDateNull] = useState<boolean>(false)
  const [workSizeNull, setWorkSizeNull] = useState<boolean>(false)






////////////////////////////////////////////////////////////









// ??? ???????????? ???????????? 

//  - ???????????? ????????????, workToFix ??? props??? ????????? workToFixState??? ??????





// defaultValue??? ?????? div??? ????????? ????????????????????? defaultValue??? ?????? ????????????  







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








// ????????? ????????? ??????




// ?????? (2/3)
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
  
  




    // ??????
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









// ???????????? ????????? ??????


// onChange ??? ????????? edit??? ?????? ?????????


const [imageSizeError, setImageSizeError] = useState<boolean>(false)


const handleWorkDataChangeInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
  e.preventDefault()
  // ???????????? 7?????? 3???
  // worksize, workname, workcompletiondate
  
  
  
  // ?????? ???????????? ???????????? 
  // ????????? ??????????????? 
  // size, onSale??? ??????


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
      
    }else{
      fixWork[yes]= ''
    }
  }
      

  const fixWork2 = fixWork as TypeOfWork
  setWorkToFixState(fixWork2)

}







const handleWorkDataChangeSelect:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
  // workMaterial, workOnSale ????????? 
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
  //?????? , ????????????
  
  e.preventDefault()
    const fixWorkSold = {...workSoldToFixState}
    // ????????? ????????? 
    const yes = myFunctions.snakeCaseToLowerCamelCase(e.target.name) as keyof TypeOfWorkSold
    
    // ????????? ??? ????????? ????????
    if(e.target.value){
      fixWorkSold[yes]= e.target.value
    }else{
      fixWorkSold[yes]= ''
      
    }
  
  const fixWorkSold2 = fixWorkSold as TypeOfWorkSold
  setWorkSoldToFixState(fixWorkSold2)
  


}




// ????????? ????????? ????????????



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











// ??? ?????? ?????????






const [loading, setLoading] = useState<boolean>(false)


    // ????????? ????????? ?????? ?????????(2/3)
  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async(e) => {

    let workImageUrlNulll =false
    let workNameNulll=false
    let workCompletionDateNulll=false
    let workSizeNulll=false


    e.preventDefault()

    // ?????? (3/3)
    let workImage
    
      
  try{
    
  
    if(workToFixState){
      const rightBeforeSubmissionOne = {...workToFixState} as TypeOfWork

      rightBeforeSubmissionOne['workSold'] = workSoldToFixState
    
      rightBeforeSubmissionOne['lastUpdate']=myFunctions.generateAKey(0)





      // ??? ?????? (2/3)

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

      // ????????? (3/3)
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




  // ??? ?????? ????????? 

    const handleDeleteInfo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault()
      deleteWork(workToFix.workSerialNumber)
    }



    // ?????? ????????? ???????????? 

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
      <span className={styles.s1}>????????????</span>
      <button className={styles.delete_info} onClick={handleDeleteInfo}>???????????? ?????????</button>
    </div>
    {imageSizeError&&<span className={styles.notice_image_size_error}>?????? ????????? ????????? ?????? ????????? 10MB ????????? ?????? ????????? ?????????????????? ?????? ?????????????????????</span>}


  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>1. ???????????? ?????????</span>
    </div>
    {workImageUrlNull&&<span className={styles.notice_wrong_image_upload}>??????: ?????? ??????????????? ???????????????</span>}

    <span className={styles.caution}>- ??????: ????????? ???????????? ?????????, 10MB????????? ?????? ???</span>
    <div className={`${styles.div3} ${styles.div3_1}`}>
    <button className={styles.image_upload_button}
    onClick={handleInputClick} >??????????????? ??????</button>
      <input className={styles.input_file} type="file" name="file" accept="image/*"  onChange={(e) => {handleWorkUpload(e)
      }}/>
      <div className={styles.preview_images}>
          {workPreviewUrl&&<PreviewImageSingle  url={workPreviewUrl}/>}

      </div>

    </div>
  </div>  

  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>2. ???????????? ?????? ????????????</span>
    </div>
      <span className={`${styles.caution} ${styles.caution_2}`}>- ??????: ???????????? ?????? ????????? ???????????? ???????????? ??????????????? 
      <br/> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;????????? ????????? ?????? ????????????</span>
    <div className={`${styles.div3} ${styles.div3_2}`}>
      
      <div className={`${styles.lable_div} ${styles.kk}`} key={workNameDefaultValue} >
              <label className={styles.lable}>?????? ??????:</label>
        <input  className={styles.input}type="text" name="work_name" placeholder='?????? ??????' 
      
        defaultValue={workNameDefaultValue?workNameDefaultValue:undefined} onChange={handleWorkDataChangeInput}/>
        {workNameNull&&<span className={styles.notice_wrong_password}>??????: ?????? ????????? ???????????????</span>}

      </div>

    

      <div className={styles.lable_div} key={workCompletionDateDefaultValue} >
        <label className={styles.lable}>?????? ????????????:</label>
          <input  className={styles.input}type="text" name="work_completion_date" placeholder='??????: 20210401' 
          defaultValue={workCompletionDateDefaultValue?workCompletionDateDefaultValue:undefined} onChange={handleWorkDataChangeInput}/>
          {workCompletionDateNull&&<span className={styles.notice_wrong_password}>??????: ?????? ??????????????? ???????????? ????????? ???????????????</span>}
      
      </div>
    
      <div className={styles.lable_div}>
        <label className={styles.lable}>?????? ??????:</label>
        <div key={workSizeOneDefaultValue}>
        
          <input  className={styles.number_input}type="text" name="work_size_one" defaultValue={workSizeOneDefaultValue} placeholder='??????'onChange={handleWorkDataChangeInput}/>
          <span className={styles.units}>cm x </span>
        </div>
        <div key={workSizeTwoDefaultValue}>
          
            <input  className={styles.number_input}type="text" name="work_size_two" defaultValue={workSizeTwoDefaultValue} placeholder='??????'onChange={handleWorkDataChangeInput}/>
            <span className={styles.units}>cm </span>
        </div>
          {workSizeNull&&<span className={styles.notice_wrong_password}>??????: ????????? ?????? ????????? ????????? ??????????????????	</span>}
      
      </div>
      
      <div className={styles.lable_div} key={workMaterialDefaultValue}>
        <label className={styles.lable}>??? ???:</label>
        <select  className={styles.select} name="work_material" onChange={(e)=> {handleMaterial(e)
        handleWorkDataChangeSelect(e)}}
        defaultValue={workMaterialDefaultValue?workMaterialDefaultValue:undefined}>
          <option value="Acrylic on canvas">Acrylic on canvas</option>
          <option value="Acrylic on paper">Acrylic on paper</option>
          <option value="Mixed media">Mixed media</option>
          <option value="other">??????</option>
        </select>
        {otherSelected&&<input className={styles.input} type="text" name="work_material_other" placeholder='?????? ????????????' onChange={handleWorkDataChangeInput}/>}
      </div>

      
      
      
      

    </div>

    <div className={styles.empty_container_two}></div>
  </div>  
  
  
  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>3. ?????? ?????? ??????</span>
    </div>
    <div className={styles.div3_3}>
    <div className={styles.lable_div} key={workOnSaleDefaultValue}>
        <label className={styles.lable}>?????? ?????? ??????:</label>
        <select className={styles.select} name="work_on_sale" id=""onChange={(e) => {handleSold(e)
          handleWorkDataChangeSelect(e)}} defaultValue={workOnSaleDefaultValue?workOnSaleDefaultValue:undefined}>
          <option value="not_sold">??? ??????</option>
          <option value="sold">??????</option>
        </select>
    </div>
        {soldSelected&& (<div className={styles.customer_info}>

        <div className={styles.customer_info_title_wrapper}>
          <span className={styles.customer_info_title}>?????? ????????? ????????????</span>  
        </div>

        <div className={styles.three} key={workSoldBuyerName}>
          <label className={styles.lable}>?????????: </label>
          <input  className={styles.input}type="text" name="buyer_name" placeholder='??????'
          defaultValue={workSoldBuyerName?workSoldBuyerName:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three} key={workSoldBuyerPhoneNumber}>
          <label className={styles.lable}>????????? ????????????:</label>
          <input  className={styles.input}type="text" name="buyer_phone_number" placeholder='010-****-****'
          defaultValue={workSoldBuyerPhoneNumber?workSoldBuyerPhoneNumber:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three}  key={workSoldBuyerEmail}>
          <label className={styles.lable}>????????? ????????? ??????:</label>
          <input  className={styles.input}type="text" name="buyer_email" placeholder='name123@naver.com' 
          defaultValue={workSoldBuyerEmail?workSoldBuyerEmail:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three} key={workSoldPurchaseLocation}>
          <label className={styles.lable}>?????? ??????:</label>
          <input  className={styles.input}type="text" name="purchase_location" placeholder='?????? ???????????????' 
          defaultValue={workSoldPurchaseLocation?workSoldPurchaseLocation:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three} key={workSoldPurchaseDate}>
          <label className={styles.lable}>?????? ??????:</label>
          <input  className={styles.input}type="text" name="purchase_date" placeholder='??????: 20210401' 
          defaultValue={workSoldPurchaseDate?workSoldPurchaseDate:undefined}
          onChange={handleWorkSoldChangeInput}/>
        </div>

        <div className={styles.three} key={workSoldPurchasePrize}>
          <label className={styles.lable}>?????? ??????:</label>
          <input  className={styles.input}type="text" name="purchase_prize" placeholder='0,000,000???' 
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
      <span className={styles.div2_title}>4. ?????? ??????</span>
    </div>
    <span className={`${styles.caution} ${styles.caution_4}`}>- ?????? ???????????? ????????? ??? ????????? ????????? ???????????? ?????? ??? 
    ??????</span>
    <div className={styles.div3_4}>
      
    <WorkFormExhibitionsSelect 
        exhibitionOnClickArray={exhibitionOnClickArray}
        
        sendExhibitionToUpperComponent={handleExhibitionSelect}/>

    </div>
  </div>  
  
  <div className={styles.div1} key={workMemoDefaultValue}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>5. ??????</span>
    </div>
    
    <textarea  className={styles.textarea} name="work_memo" id="" defaultValue={workMemoDefaultValue?workMemoDefaultValue:undefined}
    onChange={handleWorkDataChangeTextArea}>

    </textarea>


    <div className={styles.empty_container_sixth_last}></div>
  </div>  
  
  
  
  <div className={styles.div1}>
    <div className={styles.div2}>
      <span className={styles.div2_title}>6. ?????? ????????? ??????</span>
    </div>
    <div className={styles.div3}>

          <div className={styles.button_container}>
{!loading?<input type="submit" className={styles.fifth_buttons} value='????????? ?????? ???????????????' />:<div className={styles.loading_box}>
                <div className={styles.loading}></div>
        </div>

}
        
        <button className={styles.fifth_buttons} onClick={handleCancelUpload}>????????? ?????? ????????? ????????????</button>
          </div>

    </div>
  </div>  

</form>



}
export default WorkFixForm;