import React from "react"
import styles from "./basic_template.module.css";

const BasicTemplate = () => {









  return <section className={styles.basic_template_section}>

  <div className={styles.second_div}>
    {/* <div className={styles.text_sample}>
      <span className={styles.text_sample_span}>“제 작업의 근원은 문자 추상을 기본으로 합니다. 40년 전 처음 그림을 시작하면서부터 생각했던 일관된 소재였고 특별히 누구에게서 영향을 받았거나 문자를 선택한 특별한 계기는 없었습니다. 문자추상을 통해 나의 생각과 삶을 담을 수 있었고 형태의 변형을 통하여 나름대로의 즐거움과 작업의 재미를 느낄 수 있었습니다. 문자형태의 변형은 제 그림에서 가장 중요한 과제이고 창의적인 표현을 할 수 있게 만드는 가장 기초적인 조형언어입니다.” 
	-작가노트-에서 발췌 </span>
    </div> */}
    <div className={styles.image_sample}>
      <img className={styles.image} src="/img/works_img/work_sample.jpg" alt="" />
    </div>









    {/* <div className={styles.work_spec_div}>
      <span className={styles.s1}>시간을 담다 10 </span>
      <span className={styles.s2}>91 x 60.5cm Acrylic on canvas 2020 </span>
    </div> */}
  </div>

  {/* <span className={styles.page}>16</span> */}

</section>

}
export default BasicTemplate;