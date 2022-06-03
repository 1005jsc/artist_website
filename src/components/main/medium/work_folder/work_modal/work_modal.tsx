import React, { useEffect, useRef, useState } from 'react';
import KeyDetector from '../../../../utility/key_detector/key_detector';
import ModalDeleteButton from '../modal_delete_button/modal_delete_button';
import styles from './work_modal.module.css';
import styled from 'styled-components';
import { PopupInModal } from '../popup_in_modal/popup_in_modal';

type WorkModalProps = {
	modalOff: () => void;
	workUrl: string | null | undefined;
};

type FrameProps = {
	ratio: number;
	mouseStartX: number;
	mouseStartY: number;
};

const WorkModal = ({ modalOff, workUrl }: WorkModalProps) => {
	// 줌앤 패닝  줌 비율
	const [ratio, setRatio] = useState(0.5);

	const frameRef = useRef<HTMLDivElement>(null);
	const imageContainerRef = useRef<HTMLDivElement>(null);

	const handleModalOff: React.MouseEventHandler<HTMLDivElement> = (e) => {
		e.preventDefault();

		if (e.currentTarget === e.target) {
			modalOff();
		}
	};

	const handleKeyDetector = (keyValue: string) => {
		if (keyValue === 'Escape') {
			modalOff();
		}
	};

	// 스크롤의 기준점

	const [mouseStartX, setMouseStartX] = useState<number>(0);
	const [mouseStartY, setMouseStartY] = useState<number>(0);

	const wheelHandler: React.WheelEventHandler<HTMLDivElement> = (e) => {
		let imageContainer;
		let offsetX = 0;
		
		if (imageContainerRef.current) {
			imageContainer = imageContainerRef.current;
			offsetX = e.clientX - imageContainer.getBoundingClientRect().left;
			console.log(`e.client: ${e.clientX} ${e.clientY}`)
			console.log(`${imageContainer.getBoundingClientRect().left} ${imageContainer.getBoundingClientRect().top}`)
		
		}

		let offsetY = 0;

		if (imageContainerRef.current) {
			imageContainer = imageContainerRef.current;
			offsetY = e.clientY - imageContainer.getBoundingClientRect().top;
		}

		setMouseStartX(offsetX);
		setMouseStartY(offsetY);

		const ratioValue = ratio - 0.001 * e.deltaY;

		if (ratioValue >= 0.26 && ratioValue < 0.5) {
			const slowDownRatioValue = ratioValue * 0.9;

			setRatio(slowDownRatioValue);
		} else if (ratioValue >= 0.5 && ratioValue < 2.06) {
			setRatio(ratioValue);
		}
	};

	const Frame = styled.div`
		position: relative;
		transition: all 2s ease-out;
	
		transform: scale(
				${({ ratio }: FrameProps) => {
					console.log(2.2*ratio)
					return 2.2 * ratio;
				}}
			);


		transform-origin: ${({ mouseStartX }: FrameProps) => mouseStartX}px
		${({ mouseStartY }: FrameProps) => mouseStartY}px;
		
		
			

	
	`;

	const Picture = styled.div`
    width; 100%;
    `;

	const [popUpShow, setPopUpShow] = useState<boolean>(false);

	useEffect(() => {
		setPopUpShow(true);
	}, []);

	const handlePopupAnimation = () => {
		setPopUpShow(false);
	};

	return (
		<div className={styles.modal_background} onClick={handleModalOff}>
			<section className={styles.modal_container}>
				<div className={styles.grey_background}>
					{workUrl && (
						<div className={styles.img_container} ref={imageContainerRef}>
							<div className={styles.delete_button_cont}>
								<ModalDeleteButton handleDelete={modalOff} />
							</div>
							<Frame
								ratio={ratio}
								mouseStartX={mouseStartX}
								mouseStartY={mouseStartY}
								ref={frameRef}
								onWheel={wheelHandler}
							>
								<Picture>
									<img
										className={styles.work_large_image}
										src={workUrl}
										alt=""
									/>
								</Picture>
							</Frame>
						</div>
					)}
				</div>

				<PopupInModal popUpShow={popUpShow} handleOkay={handlePopupAnimation} />

				<KeyDetector sendKeyValue={handleKeyDetector} />
			</section>
		</div>
	);
};
export default WorkModal;


// top: ${({ ratio, mouseStartX }: FrameProps) => {
// 	return -mouseStartX * ratio + mouseStartX;
// }};

// left: ${({ ratio, mouseStartY }: FrameProps) => {
// 	return -mouseStartY * ratio + mouseStartY;
// }};





