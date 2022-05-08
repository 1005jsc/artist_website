import React from "react"
import styles from "./delete_button.module.css";
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type DeleteButtonProps = {
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const DeleteButton = ({handleDelete}:DeleteButtonProps) => {

  return <button className={styles.delete_btn} onClick={handleDelete}>

      <FontAwesomeIcon className={styles.x_mark} icon={faXmark as IconProp} />
  </button>

}
export default DeleteButton;