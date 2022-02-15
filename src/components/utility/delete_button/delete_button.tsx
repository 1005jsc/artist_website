import React from "react"
import styles from "./delete_button.module.css";
import { faXmark, faPlusSquare, faMinusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type DeleteButtonProps = {
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton = ({handleDelete}:DeleteButtonProps) => {

  return <button className={styles.delete_btn} onClick={handleDelete}>

      <FontAwesomeIcon className={styles.x_mark} icon={faXmark} />
  </button>

}
export default DeleteButton;