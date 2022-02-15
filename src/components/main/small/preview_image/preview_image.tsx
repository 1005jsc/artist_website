import React, { useState } from "react"
import DeleteButton from '../../../utility/delete_button/delete_button';
import styles from "./preview_image.module.css";

type PreviewImageProps = {
  url: string;
  index: number;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const PreviewImage = ({url,index, handleDelete}:PreviewImageProps) => {

  const [onHover, setOnHover] = useState<boolean>(false)


  





  return <div className={styles.image_container} onMouseEnter={() => setOnHover(true)}
  onMouseLeave={() => setOnHover(false)} data-index={index} >
    {onHover&&<div className={styles.delete_button_container}>
      <DeleteButton handleDelete={handleDelete}/>
    </div>}
  <img className={styles.img_now}src={`${url}`} alt="" />
  </div>
}
export default PreviewImage;