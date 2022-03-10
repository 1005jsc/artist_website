import React, { useEffect, useState } from "react"
import { useOutletContext } from 'react-router-dom';
import { TypeOfExhibitions } from '../../../../../../common/project_types';
import Database from '../../../../../../services/database';
import styles from "./work_form_exhibitions_select.module.css";
import WorkFormExhibitionsSelectBundleContainer from './../work_form_exhibitions_select_bundle_container/work_form_exhibitions_select_bundle_container';
import { myLogics } from '../../../../../../common/project_logics';

type WorkFormExhibitionsSelectProps = {
  sendExhibitionToUpperComponent:(exhibitionSerialNumber:number, exhibitionName:string) => void
  exhibitionOnClickArray: number[];
}

const WorkFormExhibitionsSelect = ({sendExhibitionToUpperComponent, exhibitionOnClickArray}:WorkFormExhibitionsSelectProps) => {

  const [exhibitions, setExhibitions] = useState<TypeOfExhibitions|null>(null)
  const databaseService= useOutletContext<Database>();

  useEffect(() => {
    const yes = databaseService.getExhibitionData((data) => {
      setExhibitions(data)
      
    })
    return () => yes()
  }, [databaseService])




  const exhibitionsByYearFilter4 = myLogics.returnExhibitionWorkAndYearArray(exhibitions)
  



  return <div className={styles.container3}>



      {exhibitionsByYearFilter4&&exhibitionsByYearFilter4.map((array, index) => 
    {return <WorkFormExhibitionsSelectBundleContainer
      exhibitionOnClickArray={exhibitionOnClickArray}
      sendExhibitionToUpperComponent={sendExhibitionToUpperComponent}
     key={index} arrayAboutWorkYearAndWork={array}/>})}





  </div>

}
export default WorkFormExhibitionsSelect;