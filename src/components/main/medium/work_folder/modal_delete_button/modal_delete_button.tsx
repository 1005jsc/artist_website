import React from "react"
import styles from "./modal_delete_button.module.css";
import { faXmark, faPlusSquare, faMinusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ModalDeleteButtonProps = {
  handleDelete: () => void
}

const ModalDeleteButton = ({handleDelete}:ModalDeleteButtonProps) => {

  return <button className={styles.delete_btn} onClick={handleDelete}>

      <FontAwesomeIcon className={styles.x_mark} icon={faXmark} />
  </button>

}
export default ModalDeleteButton;