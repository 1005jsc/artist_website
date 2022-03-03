import ContentBox from '../content_box/content_box';
import NabvarLeft from '../navbar_left/navbar_left';
import styles from "./main.module.css";

import { HandleLoginType } from '../../../../common/project_types';
import { useState } from 'react';

type MainProps = {
  login: boolean;
  handleLogin: HandleLoginType;
}


const Main = ({handleLogin, login}:MainProps) => {

  const [doorknobOpenClicked, setDoorknobOpenClicked] = useState<boolean>(false)


  const handleDoorknobClose = () => {
    setDoorknobOpenClicked(true)
  }
  
  const handleDoorknobOpen = () => {
    setDoorknobOpenClicked(false)
    
  }


  return <section className={styles.main}>
    <div className={styles.left}><NabvarLeft doorknobOpen={doorknobOpenClicked} closeDoorknob={handleDoorknobClose} openDoorknob={handleDoorknobOpen}loginState={login}/></div>
    <div className={doorknobOpenClicked?styles.left_empty_closed:styles.left_empty}></div>
    <div className={styles.content_box}><ContentBox loginState={login} handleLogin={handleLogin}/></div>

    
</section>

}
export default Main;