import React, { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom';
import { No1 } from '../../intro_work_folder/pamphlet_template/pamphlet_designs';
import { NavigatorSection } from './navigator.style';

const Navigator = () => {

  const [searchParams] = useSearchParams()
  const [pageNow, setPageNow] = useState<string|null>(null)
  
  
  useEffect(() => {
    const page = searchParams.get('page')
    setPageNow(page)
  }, [])

  console.log(pageNow)



  return <NavigatorSection >
      {pageNow==='1'&& <No1/>}
    </NavigatorSection> 
}
export default Navigator;





