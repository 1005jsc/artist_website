import { PopupDiv } from './popup.style';
import styles from './popup.module.css'

type PopupProps = {
  children: React.ReactNode;
  className?: string;
  handleOkay:() => void;
  popUpShow:boolean;
}


export const Popup = ({children, className, handleOkay, popUpShow}:PopupProps) => {



  return <PopupDiv popUpShow={popUpShow} className={className} onClick={handleOkay}>
  
    {children}
    <span className={styles.s1}>'enter', 'space', 'esc'키를 눌러 네비게이션을 열 수 있습니다.</span>
    <span className={styles.s1}>방향키 '←' '→' 를 눌러 페이지를 이동할 수 있습니다. </span>

    <button className={styles.okay}>확인</button>
  
  
  
  </PopupDiv>
}