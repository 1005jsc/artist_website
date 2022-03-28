import ContentBox from '../content_box/content_box';
import NabvarLeft from '../navbar_left/navbar_left';
import styles from "./home.module.css";

import { HandleLoginType } from '../../../../common/project_types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type HomeProps = {
  login: boolean;
  handleLogin: HandleLoginType;
}


const Home = ({handleLogin, login}:HomeProps) => {

  const [doorknobOpenClicked, setDoorknobOpenClicked] = useState<boolean>(false)


  
  const [urlNotWork, setUrlNotWork] = useState<boolean>(true)
  const [firstRender, setFirstRender] = useState<boolean>(false)
  
  
  
  
  const location = useLocation()
  useEffect(() => {
      if(location.pathname === '/home/works/work'){
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
    <div className={styles.content_box}><ContentBox loginState={login} handleLogin={handleLogin}/></div>

    
</section>

}
export default Home;