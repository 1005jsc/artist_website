import React, { useState } from 'react';
import styles from './navbar_left.module.css'
import NavbarLeftInside from '../navbar_left_inside/navbar_left_inside';

type NavbarLeftProps = {
  loginState:boolean;
  doorknobOpen:boolean;
  closeDoorknob: () => void
  openDoorknob: () => void
}




const NabvarLeft = ({loginState, doorknobOpen, closeDoorknob, openDoorknob}:NavbarLeftProps) => {

 
  





const handleDoorknobClose:React.MouseEventHandler<HTMLImageElement> = (e) => {
  e.preventDefault()

  closeDoorknob()


}


const handleDoorknobOpen:React.MouseEventHandler<HTMLImageElement> = (e) => {
  e.preventDefault()

  openDoorknob()


}


return <nav className={doorknobOpen? styles.navbar_shrink : styles.navbar_left}>
  
  {!doorknobOpen&&<NavbarLeftInside loginState={loginState}/>}
  
  {doorknobOpen&&<img data-tag='click-to-close'className={styles.open_door}src="/icons/open_door.svg" onClick={handleDoorknobOpen}alt="" />}
  
  {!doorknobOpen&& <img data-tag='click-to-open'className={styles.doorknob_handle}src="/icons/door_handle5.svg" onClick={handleDoorknobClose}alt="" />}
</nav>

}

export default NabvarLeft;
