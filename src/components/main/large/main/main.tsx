import React from "react"
import ContentBox from '../content_box/content_box';
import NabvarLeft from '../navbar_left/navbar_left';
import styles from "./main.module.css";

const Main = () => {

  return <section className={styles.main}>
    <div className={styles.left}><NabvarLeft/></div>
    <div className={styles.left_empty}></div>
    <div className={styles.content_box}><ContentBox/></div>

    
</section>

}
export default Main;