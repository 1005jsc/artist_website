import React from "react"
import styles from "./navigater.module.css";

type NavigaterProps = {
  title: string
}


const Navigater = ({title}:NavigaterProps) => {

  return <button className={styles.navigater}>
    <span className={styles.title}>{title}</span>
</button>

}
export default Navigater;