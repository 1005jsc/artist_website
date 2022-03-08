import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { myLogics } from '../../../../../common/project_logics';
import { TypeOfWork, TypeOfWorks } from '../../../../../common/project_types';
import WorkBundleContainerYear from '../work_bundle_container_year/work_bundle_container_year';
import { ContextType } from '../work_exhibition/work_exhibition';
import styles from "./work_year.module.css";



const WorkYear = () => {
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  const {databaseService}= useOutletContext<ContextType>();

  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      setWorks(data)
    })
    return () => yes()
  }, [])



  const yearAndWorksSortedByYearResult = myLogics.yearAndWorksSortedByYear(works)
  
  const okay = myLogics.worksSortedByYear(yearAndWorksSortedByYearResult)
  
  
  return <div className={styles.container3}>
    {yearAndWorksSortedByYearResult&&yearAndWorksSortedByYearResult.map((array, index) => 
    {return <WorkBundleContainerYear key={index} arrayAboutWorkYearAndWork={array} worksYear={okay}/>})}

    
</div>

}
export default WorkYear;