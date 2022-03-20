import React, { useState } from 'react';
import styles from './navbar_left.module.css'
import NavbarLeftInside from '../navbar_left_inside/navbar_left_inside';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

type NavbarLeftProps = {
  loginState:boolean;
  doorknobOpen:boolean;
  closeDoorknob: () => void
  openDoorknob: () => void
}




const NabvarLeft = ({loginState, doorknobOpen, closeDoorknob, openDoorknob}:NavbarLeftProps) => {

  const [urlNotWork, setUrlNotWork] = useState<boolean>(true)
  const [urlWordWorkCheck, setUrlWordWorkCheck] = useState<boolean>(false)
  const [firstRender, setFirstRender] = useState<boolean>(false)
  const location = useLocation()
  useEffect(() => {
      if(location.pathname === '/home/works/work'){
        setUrlWordWorkCheck(true)
        setUrlNotWork(false)
        setFirstRender(true)

      }else{
        setUrlNotWork(true)
      }
      return () => {
        
        setUrlWordWorkCheck(false)
      }

  }, [location])


const handleDoorknobClose:React.MouseEventHandler<HTMLImageElement> = (e) => {
  e.preventDefault()

  closeDoorknob()
  
  setFirstRender(false)
  setTimeAdd(false)
  setAnimationing(true)
  setTimeout(() => {setAnimationing(false)}, 500)

}


const handleDoorknobOpen:React.MouseEventHandler<HTMLImageElement> = (e) => {
  e.preventDefault()

  openDoorknob()
  
  setAnimationing(true)
  setTimeout(() => {setTimeAdd(true)}, 500)
  setTimeout(() => {setAnimationing(false)}, 500)
}




const [onHoverOpenBubble, setOnHoverOpenBubble] = useState<boolean>(false)
const [onHoverCloseBubble, setOnHoverCloseBubble] = useState<boolean>(false)
const [timeAdd, setTimeAdd] = useState<boolean>(false)
const [animationing, setAnimationing] = useState<boolean>(false)




return <nav className={firstRender?styles.navbar_first_render:(urlNotWork?styles.navbar_not_work:(doorknobOpen? styles.navbar_shrink : styles.navbar_left))}>
  
  {( firstRender||urlNotWork ||(!doorknobOpen&&timeAdd))&&<NavbarLeftInside loginState={loginState}/>}
  
  {(urlWordWorkCheck&&doorknobOpen)&& <div className={styles.open_cont}>
    {(onHoverCloseBubble&&!animationing)&&<img className={styles.text_bubble_open} src="/icons/text_bubble_open.svg" alt="" />}
    <img data-tag='click-to-open'className={styles.open}src="/icons/open.svg"
    onMouseEnter={() => setOnHoverCloseBubble(true)}
    onMouseLeave={() => setOnHoverCloseBubble(false)}
    onClick={handleDoorknobOpen}alt="" />
    </div>}
  
  {(urlWordWorkCheck&&!doorknobOpen)&& <div className={styles.close_cont}>
    {(onHoverOpenBubble&&!animationing)&&<img className={styles.text_bubble_close} src="/icons/text_bubble_close.svg" alt="" />}
    <img data-tag='click-to-close'className={styles.close}src="/icons/close.svg"
    onMouseEnter={() => setOnHoverOpenBubble(true)}
    onMouseLeave={() => setOnHoverOpenBubble(false)}
    onClick={handleDoorknobClose}alt="" />
    </div>}
</nav>

}

export default NabvarLeft;
