import ContentBox from '../content_box/content_box';
import NabvarLeft from '../navbar_left/navbar_left';
import styles from "./main.module.css";

import { HandleLoginType } from '../../../../common/project_types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type MainProps = {
  login: boolean;
  handleLogin: HandleLoginType;
}


const Main = ({handleLogin, login}:MainProps) => {

  const [doorknobOpenClicked, setDoorknobOpenClicked] = useState<boolean>(false)


  
  const [urlNotWork, setUrlNotWork] = useState<boolean>(true)
  const [firstRender, setFirstRender] = useState<boolean>(false)
  
  
  
  
  const location = useLocation()
  useEffect(() => {
      if(location.pathname === '/main/works/work'){
        setUrlNotWork(false)
        setFirstRender(true)

      }else{
        setUrlNotWork(true)
      }

  }, [location])

  

  const handleDoorknobClose = () => {
    setDoorknobOpenClicked(true)
    setFirstRender(false)
  }
  
  const handleDoorknobOpen = () => {
    setDoorknobOpenClicked(false)
    
  }

  return <section className={styles.main}>
    <div className={styles.left}><NabvarLeft 
    doorknobOpen={doorknobOpenClicked}
    closeDoorknob={handleDoorknobClose} 
    openDoorknob={handleDoorknobOpen}
    loginState={login}/></div>
    <div className={urlNotWork?styles.left_empty_not_work:firstRender?styles.left_empty_first_render:((doorknobOpenClicked?styles.left_empty_closed:styles.left_empty))}></div>
    {/* <div className={firstRender?styles.left_empty_first_render:(urlNotWork?styles.left_empty_not_work:(doorknobOpenClicked?styles.left_empty_closed:styles.left_empty))}></div> */}
    {/* <div className={(doorknobOpenClicked?styles.left_empty_closed:styles.left_empty)}></div> */}
    <div className={styles.content_box}><ContentBox loginState={login} handleLogin={handleLogin}/></div>

    
</section>

}
export default Main;