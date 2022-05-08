import React from 'react';
import styles from './biography_bio.module.css'

const BiographyBio = () => {
  return <section className={styles.container}> 
  
    <span className={styles.title}>작가연혁</span>

  <div className={styles.bio}>  
  <div className={styles.name_container}>
    <span className={`${styles.profile}`}>조 용 남</span>
    <span className={` ${styles.profile}`}>Cho Yong Nam</span>
    <span className={`${styles.profile}`}>Korea</span>
    <span className={`${styles.profile}`}>1961 ~</span>
  </div>
  <br/>
  <br/>
  <br/>
  <div className={styles.dividers}>
    <p className={styles.p1}>학력 및 경력</p>
    <div className={styles.contents}>
      <p className={styles.p2}>조선대학교 대학원 졸업</p>
    </div>
  </div>

  <div className={styles.dividers}>
    <p className={styles.p1}>수상</p>
    <div className={styles.contents}>
      <p className={styles.p2}>광주광역시 미술대전 34회 우수상 수상</p>
    </div>
  </div>

  <div className={styles.dividers}>
    <p className={styles.p1}>개인전</p>
    <div className={styles.contents}>
      <p className={styles.p2}>2021 국윤미술관 기획초대전 </p>
    </div>
  </div>

  {/* <div className={styles.dividers}>
    <p className={styles.p1}>작품소장</p>
    <div className={styles.contents}>
      <p className={styles.p2}>리움미술관 -Korea Seoul-</p>
      <p className={styles.p2}>도쿄돔 -Japan Tokyo-</p>
      <p className={styles.p2}>파리 루브르박물관 2점 -France Paris-</p>
    </div>
  </div> */}

  </div>


  <p className={styles.bio_note}></p>

  </section>
}

export default BiographyBio;







// <section className={styles.bio_note_container}> 
  
//   <span className={styles.bio_title}>작가연혁</span>

// <div className={styles.bio}>  
// <div className={styles.name_container}>
//   <span className={`${styles.name_korean} ${styles.h2}`}>조 용 남</span>
//   <span className={`${styles.name_english} ${styles.h2}`}>Cho Yong Nam</span>
//   <span className={`${styles.nationality} ${styles.h2}`}>Korea</span>
//   <span className={`${styles.birth} ${styles.h2}`}>1961 ~</span>
// </div>

// <div className={styles.containers}>
//   <p className={styles.container_title}>학력 및 경력</p>
//   <div className={styles.contents}>
//     <p>1989 동국대학교 예술대학 미술학과 졸업/동 교육대학원 졸업1</p>
//     <p>1989 동국대학교 예술대학 미술학과 졸업/동 교육대학원 졸업2</p>
//     <p>1989 동국대학교 예술대학 미술학과 졸업/동 교육대학원 졸업3</p>
//     <p>1989 동국대학교 예술대학 미술학과 졸업/동 교육대학원 졸업4</p>
//   </div>
// </div>

// <div className={styles.containers}>
//   <p className={styles.container_title}>수상</p>
//   <div className={styles.contents}>
//     <p>1989 동국대학교 예술대학 미술학과 졸업/동 교육대학원 졸업1</p>
//     <p>1989 동국대학교 예술대학 미술학과 졸업/동 교육대학원 졸업2</p>
//   </div>
// </div>

// <div className={styles.containers}>
//   <p className={styles.container_title}>개인전</p>
//   <div className={styles.contents}>
//     <p>2021 국윤미술관 기획초대전 </p>
//   </div>
// </div>

// <div className={styles.containers}>
//   <p className={styles.container_title}>작품소장</p>
//   <div className={styles.contents}>
//     <p>리움미술관 -Korea Seoul-</p>
//     <p>도쿄돔 -Japan Tokyo-</p>
//     <p>파리 루브르박물관 2점 -France Paris-</p>
//   </div>
// </div>

// </div>


// <p className={styles.bio_note}></p>

// </section>

