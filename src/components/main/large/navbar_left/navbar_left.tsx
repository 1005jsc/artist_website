import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar_left.module.css'


const NabvarLeft = () => {

  const navigate = useNavigate()

  

  const navigateTo:React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault()
    const path = e.currentTarget.dataset.path
    if(path){
      navigate(`/main/${path}`)
    }


  }


return <nav className={styles.navbar_left}>
  
  <div className={styles.logo_sample}>Logo</div>

  <div className={styles.navbar_container}>

      <div className={`${styles.biography} ${styles.c1} `}>
        <span className={` ${styles.s1} `}data-path="biography" onClick={navigateTo}>작가소개</span>
        <span className={`${styles.s2}`}data-path="biography/note" onClick={navigateTo}>- 작가노트</span>
        <span className={`${styles.s2}`}data-path="biography/bio" onClick={navigateTo}>- 작가연혁</span>
      </div>

      <div className={`${styles.works} ${styles.c1} `}>
      
        <span className={`${styles.s1} `} data-path="works" onClick={navigateTo}>작품</span>
      </div>
      <div className={`${styles.critics} ${styles.c1} `}>
        <span className={`${styles.s1}`} data-path="exhibitions" onClick={navigateTo}>전시</span>
      </div>
      
      <div className={`${styles.critics} ${styles.c1} `}>
        <span className={`${styles.critics_left} ${styles.s1}`} data-path="critics" onClick={navigateTo}> 평론가의 글</span>
        <span className={`${styles.s2}`} data-path="critics" onClick={navigateTo}>- 시간속에 담아낸 내면의 추상언어 &lt;조인호&gt;</span>
      </div>

      <div className={`${styles.critics} ${styles.c1} `}>
        <span className={`${styles.contacts_left} ${styles.s1}`} data-path="contacts" onClick={navigateTo}>연락처</span>
      </div>

  </div>
  

</nav>

}

export default NabvarLeft;


// <span className={`${styles.biography_left} ${styles.span_first} 
// ${styles.biography_left_onclick}`}>작가소개</span>
// <div className={`${styles.biography_container} ${styles.biography_left_onclick_invisible_on}`}>
//   <span className={`${styles.artist_note} ${styles.h2}`}>- 작가노트</span>
//   <span className={`${styles.bio} ${styles.h2}`}>- 작가연혁</span>
// </div>

// <span className={`${styles.works_left} ${styles.span_first} ${styles.works_left_onclick}`}>작품</span>
//   {/* <div className={`${styles.works_container} ${styles.works_left_onclick_invisible_on}`}>
  
//     <div className={`${styles.work} ${styles.work_국윤미술관_기획초대전}`}>
//       <span className={styles.h2}>- 국윤미술관 기획초대전</span>
//       <div className={styles.work_국윤미술관_기획초대전_onclick}>
//         <span className={styles.h3}>- 시간을 담다</span>
//         <span className={styles.h3}>- 빛을 담다</span>
//         <span className={styles.h3}>- 길을 걷다</span>
//       </div>
//     </div>
//   <div className={`${styles.work} ${styles.work_국윤미술관_기획초대전}`}>
//     <span className={styles.h2}>- 국윤미술관 기획초대전</span>
//     <div className={styles.work_국윤미술관_기획초대전_onclick}>
//       <span className={styles.h3}>- 시간을 담다</span>
//       <span className={styles.h3}>- 빛을 담다</span>
//       <span className={styles.h3}>- 길을 걷다</span>
//     </div>
//   </div>

//   </div> */}

//   <span className={`${styles.exhibition_left} ${styles.span_first}`}>전시</span>




// <span className={`${styles.critics_left} ${styles.span_first} ${styles.critics_left_onclick}`}>평론가의 글</span>
//   <div className={`${styles.critics_container} ${styles.critics_left_onclick_invisible_on}`}>
//     <span className={styles.h2}>- 시간속에 담아낸 내면의 추상언어 &lt;조인호&gt;</span>
//     <span className={styles.h2}>- 시간속에 담아낸 내면의 추상언어 &lt;조인호&gt;</span>
//   </div>
// <span className={`${styles.contacts_left} ${styles.span_first}`}>연락처</span>