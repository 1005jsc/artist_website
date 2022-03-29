import { PopupDiv } from '../../../../introuduction/popup/popup.style';
import styles from './popup_in_modal.module.css';

type PopupProps = {
	children?: React.ReactNode;
	className?: string;
	handleOkay: () => void;
	popUpShow: boolean;
};

export const PopupInModal = ({
	children,
	className,
	handleOkay,
	popUpShow,
}: PopupProps) => {
	return (
		<PopupDiv popUpShow={popUpShow} className={className} onClick={handleOkay}>
			{children}
			<span className={styles.s1}>
				Tip : 그림을 마우스 휠로 스크롤하시면 해당영역을{' '}
			</span>
			<span className={styles.s1}>더 상세하게 볼 수 있습니다</span>

			<button className={styles.okay}>확인</button>
		</PopupDiv>
	);
};
