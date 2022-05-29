import React, { useEffect, useState } from "react"
import WorkMediumDisplay from '../work_medium_display/work_medium_display';
import styles from "./single_work.module.css";
import WorkModal from '../work_modal/work_modal';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { TypeOfWork } from '../../../../../common/project_types';
import { myLogics } from '../../../../../common/project_logics';
import {RemoveScroll} from 'react-remove-scroll';

const SingleWork = () => {

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()



  const [works, setWorks] = useState<Array<TypeOfWork>>([])
  const [worksYear, setWorksYear] = useState<TypeOfWork[]>([])
  const [workId, setWorkId] = useState<number|null>(null)
  const [workNow, setWorkNow] = useState<TypeOfWork|null>(null)
  

  useEffect(() => {
    // 작품들 다가져옴 두가지 (작품들, 작품아이디) 
    const locationState = location.state as Array<TypeOfWork[]>

    // 작품들
    const arrayOfWorks = locationState[0]
    const worksYearArray = locationState[1] as TypeOfWork[]
    setWorks(arrayOfWorks)
    setWorksYear(worksYearArray)

    // 작품 아이디 
    const work_id = searchParams.get('work_id')
    if(work_id){
      setWorkId(parseInt(work_id))
    }


  }, [])



    useEffect(() => {
      for(let i=0; i<works.length; i++ ){
        if(works[i].workSerialNumber==workId){
          setWorkNow(works[i])
        }
      }
    }, [workId])



  
  // 삼총사 이미지 state
  const [workMain, setWorkMain] = useState<string|null|undefined>(null)
  const [workSubMain, setWorkSubMain] = useState<string|null|undefined>(null)
  const [workSubLeft, setWorkSubLeft] = useState<string|null|undefined>(null)
  const [workSubRight, setWorkSubRight] = useState<string|null|undefined>(null)
    
    // 모달 이미지 제일 큰거
    const [workMainAlmostOriginal, setWorkMainAlmostOriginal]  = useState<string|null|undefined>(null)

  // 화살표 눌렀을때 보내줘야할 것들 works, work id 
  const [leftWorkId, setLeftWorkId] = useState<number|null>(null)
  const [rightWorkId, setRightWorkId] = useState<number|null>(null)





  useEffect(() => {
    const arrayNotYear1 = [...works] 

    if(worksYear == [] || worksYear ==undefined){  
      // 연도별이 아닌 경우  

      const result = myLogics.singleWorkImageDistribute(arrayNotYear1, workId)
      const result2 = myLogics.singleWorkComponentNextWorkData(arrayNotYear1, workId)
      setWorkMain(result[0])
      setWorkSubMain(result[1])
      setWorkSubLeft(result[2])
      setWorkSubRight(result[3])
      setWorkMainAlmostOriginal(result[4])
      setLeftWorkId(result2[0])
      setRightWorkId(result2[1])

      
    }else{
      // 연도별일 경우
      const arrayYear1 = [...worksYear]
      
      const result = myLogics.singleWorkImageDistribute(arrayYear1, workId)
      const result2 = myLogics.singleWorkComponentNextWorkData(arrayYear1, workId)

      setWorkMain(result[0])
      setWorkSubMain(result[1])
      setWorkSubLeft(result[2])
      setWorkSubRight(result[3])
      setWorkMainAlmostOriginal(result[4])

      setLeftWorkId(result2[0])
      setRightWorkId(result2[1])

    }






  }, [worksYear])
  



const navigate = useNavigate()

// p 테그에 년도 붙이기 
  let workNowYear
  if(workNow){
    if(workNow.workCompletionDate){
      workNowYear = workNow.workCompletionDate.toString().substring(0,4)
    }
  }





  const handleNextImg:React.MouseEventHandler<HTMLImageElement> = (e) => {
    e.preventDefault()
    // 양 사이드의 작은 이미지들, 누르면 다음 작품을 보여주게된다 

    if(e.currentTarget.dataset.side === 'left'){
      navigate(`/home/works/work?work_id=${leftWorkId}`, {
        state:[works, worksYear]
      })
      window.location.reload()
    }else if(e.currentTarget.dataset.side === 'right'){
      navigate(`/home/works/work?work_id=${rightWorkId}`, {
        state:[works, worksYear]
      })
      window.location.reload()
    }
    

  }
  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalOnClick:React.MouseEventHandler<HTMLButtonElement> = (e)  => {

    e.preventDefault()
    handleModalOpen()
  }
 
  

  const handleModalOff = () => {
    setModalOpen(false)
  }

  const handleGoToFullscreen:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if(worksYear == [] || worksYear ==undefined){
      navigate(`/home/works/fullscreen`, 
      {
        state:[works, workId]
      })
    }else{
      navigate(`/home/works/fullscreen`, 
      {
        state:[worksYear, workId]
      })

    }
    




  }






  return <section className={styles.single_work_container}>
  

  {modalOpen&&
  <RemoveScroll>
  <WorkModal workUrl={workMainAlmostOriginal} modalOff={handleModalOff}/></RemoveScroll>}


  <div className={styles.work_disp_cont_1}>

    <div className={styles.icon_container}>
        {workSubLeft&&<img onClick={handleNextImg}className={styles.icon} data-side='left'src="/icons/side_arrow_left.svg" alt="" />}

    </div>
    
      {workMain&&<WorkMediumDisplay workUrl={workMain} imgClickModalOpen={handleModalOpen}/>}

    <div className={styles.icon_container}>

      {workSubRight&&<img onClick={handleNextImg} className={styles.icon}data-side='right' src="/icons/side_arrow_right.svg" alt="" />}
    </div>  
  
  </div>

  <div className={styles.small_works_display_container}>
    <div className={styles.work_sub_container}>
      {workSubLeft&&<img onClick={handleNextImg}className={styles.mini_img}src={workSubLeft?workSubLeft:'/icons/image_not_avaliable_horizontal.svg'}data-side='left' alt="" />}

    </div>
    <div className={styles.work_sub_main}>
      {workSubMain&&<img className={styles.mini_center_img}src={workSubMain?workSubMain:'/icons/image_not_avaliable_horizontal.svg'} alt="" onClick={handleModalOpen} />}

    </div>
    <div className={styles.work_sub_container}>
      {workSubRight&&<img onClick={handleNextImg}className={styles.mini_img}src={workSubRight?workSubRight:'/icons/image_not_avaliable_horizontal.svg'}data-side='right' alt="" />}

    </div>
    



  </div>

  <div className={styles.metadata} >
      {workNow&&<p className={styles.p1}>{workNow.workName}</p>}
      {workNow&&<p className={styles.p1}>{workNow.workSize}</p>}
      {workNow&&<p className={styles.p1}>{workNow.workMaterial}</p>}
      {workNowYear&&<p className={styles.p1}>{workNowYear}</p>}
  </div>
  <div className={styles.button_container}>
      <button className={styles.b1} onClick={handleModalOnClick}>확대하여 상세보기</button>
      <button className={styles.b1} onClick={handleGoToFullscreen}>풀스크린으로 보기</button>
  </div>

  

</section>

}
export default SingleWork;




