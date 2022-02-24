import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { myLogics } from '../../../../../common/project_logics';
import { TypeOfWorks } from '../../../../../common/project_types';
import Database from '../../../../../services/database';
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




  const worksByYearFilter4 = myLogics.worksByYearSort(works)


  return <div className={styles.container3}>

    {worksByYearFilter4&&worksByYearFilter4.map((array, index) => 
    {return <WorkBundleContainerYear key={index} arrayAboutWorkYearAndWork={array}/>})}

    
</div>

}
export default WorkYear;