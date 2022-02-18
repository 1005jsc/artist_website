import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkBundleContainer from '../work_bundle_container/work_bundle_container';
import styles from "./work_year.module.css";

type WorkYearProps ={

}

const WorkYear = () => {
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  const databaseService= useOutletContext<Database>();

  useEffect(() => {
    console.log('1')
    const yes = databaseService.getWorkData((data) => {
      setWorks(data)
      
    })
    return () => yes()
  }, [])


  let worksKeys
  let workYears: string[] 
  let worksYears: string[] 
  let worksDates
  workYears=[]
  worksYears= []
  if(works){
    let yes 
    worksKeys = Object.keys(works)
    worksDates = worksKeys.map((key) => { return works[parseInt(key)][`workCompletionDate`]}) 
    for(let i = 0; i< worksDates.length; i++){
      yes =worksDates[i] as string
      workYears.push(yes.substring(0,4))
    } 
    worksYears = [... new Set(workYears)]
    worksYears.sort((a,b) => parseInt(b)-parseInt(a))
  }

  // 연도 만들기 끝 
  // 1) works를 연도별로 나누고 worksByYear [2021, '작품1', '작품3', '작품2']
  // 2) 나눈 것들을 sort 로 더 빠른 애들로 나누고 worksByYearSorted [2021, '작품1', '작품2', '작품3'] 
  // work bundle container 를 컴포넌트로 만들고
  // 각각의 bundle container에 worksByYearSorted를 전달하고 work를  imageurlmakerbyrequestedquality로 전달해주면 될듯 
  
  // 1) worksByYear 만들기 
  let worksByYear = [] as any[]
  let worksByYearFilter = [] as any[]
  let worksByYearFilter2 = [] as any[]
  let worksByYearFilter3 = [] as any[]
  let worksByYearFilter4 = [] as any[]
  {for(let i = 0; i< worksYears.length; i++){
      worksByYear.push(worksYears[i])
      if(works){
        worksByYearFilter = Object.values(works).filter((work) => 
        work[`workCompletionDate`]?.toString().substring(0,4) === worksYears[i] )
      }
      worksByYearFilter2.push(worksByYearFilter)
    }
    for(let i = 0; i< worksByYear.length; i++){
      worksByYearFilter3= [worksByYear[i], ...worksByYearFilter2[i]]
      worksByYearFilter4.push(worksByYearFilter3)
    }
  }




  return <div className={styles.container3}>

    {worksByYearFilter4&&worksByYearFilter4.map((array, index) => 
    {return <WorkBundleContainer key={index} arrayAboutWorkYearAndWork={array}/>})}

    
</div>

}
export default WorkYear;