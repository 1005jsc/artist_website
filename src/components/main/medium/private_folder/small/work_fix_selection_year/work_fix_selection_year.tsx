import  { useEffect, useState } from "react"
import { myLogics } from '../../../../../../common/project_logics';
import {  TypeOfWork, TypeOfWorks } from '../../../../../../common/project_types';
import Database from '../../../../../../services/database';
import WorkFixSelectionBundleContainerYear from '../work_fix_selection_bundle_container_year/work_fix_selection_bundle_container_year';
import styles from "./work_fix_selection_year.module.css";

type WorkFixSelectionYearProps = {
  databaseService:Database;
  passSelectedWorkToUpper: (workNumber:number, work:TypeOfWork) => void
  exhibitionWorksOnClickArray:  number[]

}



const WorkFixSelectionYear = ({databaseService, exhibitionWorksOnClickArray, passSelectedWorkToUpper}:WorkFixSelectionYearProps) => {
  const [works, setWorks] = useState<TypeOfWorks|null>(null)
  useEffect(() => {
    const yes = databaseService.getWorkData((data) => {
      setWorks(data)
      
    })
    return () => yes()
  }, [])


  const yearAndWorksSortedByYearResult = myLogics.yearAndWorksSortedByYear(works)
  

  return <div className={styles.container3}>



{yearAndWorksSortedByYearResult&&yearAndWorksSortedByYearResult.map((array, index) => 
    {return <WorkFixSelectionBundleContainerYear exhibitionWorksOnClickArray={exhibitionWorksOnClickArray} passSelectedWorkToUpper={passSelectedWorkToUpper} key={index} arrayAboutWorkYearAndWork={array}/>})}

  
</div>

}
export default WorkFixSelectionYear;