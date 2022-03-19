import React from "react"
import styles from "./popup_sample.module.css";







const PopupSample = () => {

  return <div className={styles.popup_container}>
    <span className={styles.s1}>enter, space, esc키를 눌러 네비게이션을 열 수 있습니다.</span>
    <span className={styles.s1}>방향키를 눌러 페이지를 이동할 수 있습니다. </span>

    <button className={styles.okay}>확인</button>
</div>


}
export default PopupSample;