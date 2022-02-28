import React from "react"
import DeleteButton from '../../../../utility/delete_button/delete_button';
import ModalDeleteButton from '../modal_delete_button/modal_delete_button';
import styles from "./work_modal.module.css";

type WorkModalProps = {
  modalOff: () => void
}



const WorkModal = ({modalOff}:WorkModalProps) => {


const handleModalOff:React.MouseEventHandler<HTMLDivElement> = (e) => {
  e.preventDefault()

  if(e.currentTarget ===e.target){
    modalOff()
  }
}





  return <div className={styles.modal_background} onClick={handleModalOff} >

    <section className={styles.modal_container}>
      <div className={styles.grey_background}>
        <div className={styles.delete_button_cont}><ModalDeleteButton handleDelete={modalOff}/></div>
      
          <img className={styles.work_large_image} src="/img/works_img/work_sample.jpg" alt="" />
      </div>

      <div className={styles.tip_container}>
        <span className={styles.tip}>Tip : 그림을 클릭하시면 해당영역을 더 상세하게 볼 수 있습니다</span>
      </div>


    </section>

</div>

}
export default WorkModal;