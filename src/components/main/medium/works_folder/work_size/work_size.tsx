import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { myFunctions } from '../../../../../common/project_functions';
import { TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
import WorkBundleContainerSize from '../work_bundle_container_size/work_bundle_container_size';
import styles from "./work_size.module.css";

const WorkSize = () => {
  // 결국 면적을 기준으로  크기가 큰순, 크기가 작은순으로 나눌것임 
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  
  const databaseService= useOutletContext<Database>();
  const [url, setUrl] = useState<string|null>()
  const [checkSmallerOrLarger, setCheckSmallerOrLarger] = useState<boolean|undefined>(undefined)
  useEffect(() => {
    setUrl(window.location.href)
    const bool = myFunctions.checkWordFromUrl('smaller', url)
    setCheckSmallerOrLarger(bool)
    
  })

  

  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      setWorks(data)
      
    })
    return () => yes()
  }, [])

  
  
  
  // 크기가 큰순 로직
  let worksKeys
  let worksValues
  let worksSizes
  if(works){
    worksKeys = Object.keys(works)
    worksValues = Object.values(works)
    worksSizes = worksKeys.map((key) => { return works[parseInt(key)][`workSize`]}) 
    
  }
  let worksSizes2
  let workSizes7 = []
  let workSizes8 = []
  let workSizes9 = []
  let workSizes10 = []
  let workSizes11 = []
  let workSizes12 = []
  let workSizeSmallToBig = []
  let workSizeBigToSmall = []
  if(worksSizes){

    worksSizes2 = worksSizes.map((value) => {
      const yes = value?.replace(/[^0-9]/g, ' ')
      if(yes){
        return yes
      }else{
        return 
      }
      })

      const workSizes3 = worksSizes2.map((value) => {return value?.substring(0,5)})
      const workSizes4 = worksSizes2.map((value) => {return value?.substring(5)})
      const workSizes5 = workSizes3.map((value) => {return parseInt(value!)})
      const workSizes6 = workSizes4.map((value) => {return parseInt(value!)})
      if(workSizes5){
        for(let i = 0; i< workSizes5.length; i++){
          let area = workSizes5[i]*workSizes6[i]
          workSizes7.push(area)
        }
      }
      for(let i = 0; i< workSizes7.length; i++){
        const array1 = [i,workSizes7[i]]
        workSizes8.push(array1)
      }
      // big to small
      workSizes9 = workSizes8.sort((a,b) => {return a[1]-b[1]})
      workSizes10 = workSizes9.map((value) => {return value[0]})
      for(let i = 0; i< workSizes10.length; i++){
        if(worksValues){
          workSizeSmallToBig.push(worksValues[workSizes10[i]])
        }        
      }
      // small to big
      workSizes11 = workSizes8.sort((a,b) => {return b[1]-a[1]})
      workSizes12 = workSizes9.map((value) => {return value[0]})

      for(let i = 0; i< workSizes12.length; i++){
        if(worksValues){
          workSizeBigToSmall.push(worksValues[workSizes12[i]])
        }        
      }
    }










    
  
  return <div className={styles.work_size_container}>
      <div className={`${styles.work_bundle}`}>
      
      {checkSmallerOrLarger?<>
      {workSizeSmallToBig&&<WorkBundleContainerSize works={workSizeSmallToBig}/>}
      </> :<>
      {workSizeBigToSmall&& <WorkBundleContainerSize works={workSizeBigToSmall}/>}
      </>}
      
      
      
      </div>
  </div>

}
export default WorkSize;