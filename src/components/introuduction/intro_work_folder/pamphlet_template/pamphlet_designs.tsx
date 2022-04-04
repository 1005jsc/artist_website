import { TextContainer } from './data_divs/text_container/text_container';
import { FirstDiv, MiddleDiv, SecondDiv } from './static_divs/static_divs';
import styled from 'styled-components';
import { ImageContainer } from './data_divs/image_container/image_container';
import { MetadataContainer } from './data_divs/metadata_container/metadata_container';
import { PageCenter, PageLeft, PageRight } from './data_divs/page/page';

import * as T from './data_divs/text_container/text_container.style';
import * as M from './data_divs/metadata_container/metadata_container.style';
import * as I from './data_divs/image_container/image_container.style';

export const No1 = () => {
	const TextContainerNo1 = styled(TextContainer)`
		position: absolute;
		top: 0;
		left: 0;
	`;

	const MetadataContainerNo1 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;

	const ImageContainerNo1 = styled(ImageContainer)`
		width: 60rem;
		height: 41.5rem;
		position: absolute;
		top: 0;
		right: 0;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<TextContainerNo1>
					<T.TextSpan>
						“제 작업의 근원은 문자 추상을 기본으로 합니다. 40년 전 처음 그림을
						시작하면서부터 생각했던 일관된 소재였고 특별히 누구에게서 영향을
						받았거나 문자를 선택한 특별한 계기는 없었습니다. 문자추상을 통해
						나의 생각과 삶을 담을 수 있었고 형태의 변형을 통하여 나름대로의
						즐거움과 작업의 재미를 느낄 수 있었습니다. 문자형태의 변형은 제
						그림에서 가장 중요한 과제이고 창의적인 표현을 할 수 있게 만드는 가장
						기초적인 조형언어입니다.” -작가노트-에서 발췌
					</T.TextSpan>
				</TextContainerNo1>

				<MetadataContainerNo1>
					<M.MetadataSpan1>시간을 담다 Ⅹ</M.MetadataSpan1>
					<M.MetadataSpan2>
						91 ⅹ 60.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo1>

				<ImageContainerNo1>
					<I.ImageHorizontalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647512513/artist-website/pamphlet_assets/A_9528657_600kb_llg9dy.jpg"
						alt=""
					/>
				</ImageContainerNo1>
			</SecondDiv>

			<PageCenter>1</PageCenter>
		</FirstDiv>
	);
};

export const No2 = () => {
	const MetadataContainerNo2One = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;
	const MetadataContainerNo2Two = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo2One = styled(ImageContainer)`
		height: 48.6rem;
		position: absolute;
		top: 0;
		left: 0;
	`;
	const ImageContainerNo2Two = styled(ImageContainer)`
		height: 48.6rem;
		position: absolute;
		top: 0;
		right: 0;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<MetadataContainerNo2One>
					<M.MetadataSpan1>시간을 담다 Ⅳ</M.MetadataSpan1>
					<M.MetadataSpan2>
						40 ⅹ 54cm Acrylic on canvas &nbsp;&nbsp;2019
					</M.MetadataSpan2>
				</MetadataContainerNo2One>

				<MetadataContainerNo2Two>
					<M.MetadataSpan1>시간을 담다 Ⅱ</M.MetadataSpan1>
					<M.MetadataSpan2>
						32 ⅹ 41cm Acrylic on canvas &nbsp;&nbsp;2019
					</M.MetadataSpan2>
				</MetadataContainerNo2Two>

				<ImageContainerNo2One>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515343/artist-website/pamphlet_assets/A_9528677_600kb_rztiiq.jpg"
						alt=""
					/>
				</ImageContainerNo2One>

				<ImageContainerNo2Two>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515346/artist-website/pamphlet_assets/A_9528679_600kb_pnjncn.jpg"
						alt=""
					/>
				</ImageContainerNo2Two>
			</SecondDiv>

			<PageCenter>2</PageCenter>
		</FirstDiv>
	);
};

export const No3 = () => {
	const MetadataContainerNo3 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;

	const ImageContainerNo3 = styled(ImageContainer)`
		height: 58rem;
		position: absolute;
		top: 7rem;
		right: 0;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<MetadataContainerNo3>
					<M.MetadataSpan1>시간을 걷다 Ⅲ </M.MetadataSpan1>
					<M.MetadataSpan2>
						91 ⅹ 65cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo3>
			</SecondDiv>

			<ImageContainerNo3>
				<I.ImageVerticalImg
					src="https://res.cloudinary.com/koreachief/image/upload/v1647515345/artist-website/pamphlet_assets/A_9528659_600kb_ulidk1.jpg"
					alt=""
				/>
			</ImageContainerNo3>

			<PageCenter>3</PageCenter>
		</FirstDiv>
	);
};

export const No4 = () => {
	const MetadataContainerNo4 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo4 = styled(ImageContainer)`
		width: 144rem;
		height: 58rem;
		position: absolute;
		bottom: 14rem;
		left: 0;
	`;
	const ImageHorizontalImgNo4 = styled(I.ImageHorizontalImg)`
		position: absolute;
		bottom: 0;
	`;

	const FirstDivNo4 = styled(FirstDiv)`
		overflow: hidden;
	`;

	return (
		<FirstDivNo4>
			<ImageContainerNo4>
				<ImageHorizontalImgNo4
					src="https://res.cloudinary.com/koreachief/image/upload/v1647515345/artist-website/pamphlet_assets/A_9528649_600kb_ncjx4o.jpg"
					alt=""
				/>
			</ImageContainerNo4>
			<SecondDiv></SecondDiv>

			<PageRight>4</PageRight>
		</FirstDivNo4>
	);
};

export const No5 = () => {
	const MetadataContainerNo5One = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;
	const MetadataContainerNo5Two = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo5One = styled(ImageContainer)`
		position: absolute;
		top: 50%;
		left: 0;
		height: 19rem;
	`;
	const ImageContainerNo5Two = styled(ImageContainer)`
		position: absolute;
		top: 0;
		right: 0;
		width: 60rem;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<MetadataContainerNo5One>
					<M.MetadataSpan1>시간을 담다 Ⅵ</M.MetadataSpan1>
					<M.MetadataSpan2>
						162 ⅹ 97cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo5One>
				<MetadataContainerNo5Two>
					<M.MetadataSpan1>무제</M.MetadataSpan1>
					<M.MetadataSpan2>
						34.5 ⅹ 27cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2022
					</M.MetadataSpan2>
				</MetadataContainerNo5Two>

				<ImageContainerNo5One>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515345/artist-website/pamphlet_assets/A_9528649_600kb_ncjx4o.jpg"
						alt=""
					/>
				</ImageContainerNo5One>
				<ImageContainerNo5Two>
					<I.ImageHorizontalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647621303/artist-website/pamphlet_assets/A_9534126_600kb_voif1k.jpg"
						alt=""
					/>
				</ImageContainerNo5Two>
			</SecondDiv>
			<PageCenter>5</PageCenter>
		</FirstDiv>
	);
};

export const No6 = () => {
	const MetadataContainerNo6 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo6 = styled(ImageContainer)`
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<MetadataContainerNo6>
					<M.MetadataSpan1>시간을 담다 Ⅲ</M.MetadataSpan1>
					<M.MetadataSpan2>
						91 ⅹ 65cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo6>
			</SecondDiv>

			<ImageContainerNo6>
				<I.ImageVerticalImg
					src="https://res.cloudinary.com/koreachief/image/upload/v1647515345/artist-website/pamphlet_assets/A_9528655_600kb_tb7rpo.jpg"
					alt=""
				/>
			</ImageContainerNo6>

			<PageRight>6</PageRight>
		</FirstDiv>
	);
};

export const No7 = () => {
	const MetadataContainerNo7 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo7 = styled(ImageContainer)`
		margin: auto;
		height: 100%;
	`;

	return (
		<FirstDiv>
			<MiddleDiv>
				<ImageContainerNo7>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515343/artist-website/pamphlet_assets/A_9528671_600kb_sxjpmk.jpg"
						alt=""
					/>
				</ImageContainerNo7>
			</MiddleDiv>

			<SecondDiv>
				<MetadataContainerNo7>
					<M.MetadataSpan1>삶을 담다Ⅳ</M.MetadataSpan1>
					<M.MetadataSpan2>
						19 ⅹ 33cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2019
					</M.MetadataSpan2>
				</MetadataContainerNo7>
			</SecondDiv>
			<PageRight>7</PageRight>
		</FirstDiv>
	);
};

export const No8 = () => {
	const MetadataContainerNo8 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo8 = styled(ImageContainer)`
		position: absolute;
		top: 2rem;
		left: 0;
		height: 54rem;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<ImageContainerNo8>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515346/artist-website/pamphlet_assets/A_9528662_600kb_hvbizm.jpg"
						alt=""
					/>
				</ImageContainerNo8>

				<MetadataContainerNo8>
					<M.MetadataSpan1>시간을 담다 Ⅺ</M.MetadataSpan1>
					<M.MetadataSpan2>
						91 x 60.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo8>
			</SecondDiv>

			<PageCenter>8</PageCenter>
		</FirstDiv>
	);
};

export const No9 = () => {
	const MetadataContainerNo9 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;

	const ImageContainerNo9 = styled(ImageContainer)`
		position: absolute;
		height: 100%;
		right: 0;
	`;

	return (
		<FirstDiv>
			<ImageContainerNo9>
				<I.ImageVerticalImg
					src="https://res.cloudinary.com/koreachief/image/upload/v1647515344/artist-website/pamphlet_assets/A_9528647_600kb_a3cle8.jpg"
					alt=""
				/>
			</ImageContainerNo9>

			<SecondDiv>
				<MetadataContainerNo9>
					<M.MetadataSpan1>시간을 담다 Ⅶ</M.MetadataSpan1>
					<M.MetadataSpan2>
						162 ⅹ 112cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo9>
			</SecondDiv>
			<PageLeft>9</PageLeft>
		</FirstDiv>
	);
};

export const No10 = () => {
	const ImageContainerNo10 = styled(ImageContainer)`
		height: 100%;
	`;

	return (
		<ImageContainerNo10>
			<I.ImageHorizontalImg
				src="https://res.cloudinary.com/koreachief/image/upload/v1647636843/artist-website/pamphlet_assets/A_9528648_700kb_cropped_lvieqc.jpg"
				alt=""
			/>
		</ImageContainerNo10>
	);
};

export const No11 = () => {
	const MetadataContainerNo11One = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;

	const MetadataContainerNo11Two = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo11One = styled(ImageContainer)`
		position: absolute;
		height: 19rem;
		bottom: 7rem;
		left: 0;
	`;

	const ImageContainerNo11Two = styled(ImageContainer)`
		position: absolute;
		top: 0;
		right: 0;
		width: 60rem;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<ImageContainerNo11One>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515345/artist-website/pamphlet_assets/A_9528648_600kb_xxwtkd.jpg"
						alt=""
					/>
				</ImageContainerNo11One>

				<ImageContainerNo11Two>
					<I.ImageHorizontalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515344/artist-website/pamphlet_assets/A_9528658_600kb_bbs3yk.jpg"
						alt=""
					/>
				</ImageContainerNo11Two>

				<MetadataContainerNo11One>
					<M.MetadataSpan1>시간을 담다 Ⅷ</M.MetadataSpan1>
					<M.MetadataSpan2>
						162 ⅹ 112cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo11One>

				<MetadataContainerNo11Two>
					<M.MetadataSpan1>시간을 담다 Ⅸ</M.MetadataSpan1>
					<M.MetadataSpan2>
						91 ⅹ 65cm &nbsp;Mixed media &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo11Two>
			</SecondDiv>

			<PageCenter>11</PageCenter>
		</FirstDiv>
	);
};

export const No12 = () => {
	const MetadataContainerNo12 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo12 = styled(ImageContainer)`
		position: absolute;
		height: 54rem;

		left: 0;
	`;

	return (
		<FirstDiv>
			<ImageContainerNo12>
				<I.ImageVerticalImg
					src="https://res.cloudinary.com/koreachief/image/upload/v1647515345/artist-website/pamphlet_assets/A_9528656_600kb_z8lr2z.jpg"
					alt=""
				/>
			</ImageContainerNo12>

			<SecondDiv>
				<MetadataContainerNo12>
					<M.MetadataSpan1>삶을 담다 Ⅴ</M.MetadataSpan1>
					<M.MetadataSpan2>
						91 x 60.5cm &nbsp;Mixed media &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo12>
			</SecondDiv>

			<PageCenter>12</PageCenter>
		</FirstDiv>
	);
};

export const No13 = () => {
	const MetadataContainerNo13 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;

	const ImageContainerNo13 = styled(ImageContainer)`
		position: absolute;
		top: 0;
		right: 0;
		width: 60rem;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<ImageContainerNo13>
					<I.ImageHorizontalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515346/artist-website/pamphlet_assets/A_95286721_600kb_dudhhj.jpg"
						alt=""
					/>
				</ImageContainerNo13>

				<MetadataContainerNo13>
					<M.MetadataSpan1>삶을 담다 Ⅰ</M.MetadataSpan1>
					<M.MetadataSpan2>
						23 ⅹ 16cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2019
					</M.MetadataSpan2>
				</MetadataContainerNo13>
			</SecondDiv>

			<PageCenter>13</PageCenter>
		</FirstDiv>
	);
};

export const No14 = () => {
	const TextContainerNo14 = styled(TextContainer)`
		position: absolute;
		top: 0;
		left: 0;
	`;

	const TextSpanForNameNo14 = styled(T.TextSpan)`
		position: absolute;
		top: 43.2rem;
		right: 0;
		line-height: 3.6rem;
	`;

	const MetadataContainerNo14 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;

	const ImageContainerNo14 = styled(ImageContainer)`
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<TextContainerNo14>
					<T.TextSpan>
						“‘빛을 담다’ 연작의 경우는 어두운 바탕으로부터 차츰 색조를
						달리해가며 반투명 한지 띠들을 여러 겹 겹쳐 올린 듯한 선묘 이미지가
						많다. ‘시간’ 작업들과 비슷한 맥락이지만, 강한 색채들을 적극적으로
						사용하고, 검은 무채색 선들과 대비를 통해 선명하고 윤기 나는 채색들이
						강조되어져 있다. 특히 빛은 희망의 상징이듯 연푸름이나 연두색들로
						생명의 개화를 담아내었다. 이와 함께 ‘세월’ 작업들도 몇 겹의 다져진
						바탕 위에 최종 이미지를 올리는 방식은 같다. 하지만, 문자형상이거나
						두터운 필선의 조형적 구성이 아닌 묽은 안료의 필선들이 물결 지듯,
						수면에 잔상들이 어른거리듯, 드리핑 기법처럼 담담하게 풀어놓은 점이
						다르다. 그의 여러 연작 작업 가운데 가장 매임 없이 자유롭게
						소요유(逍遙遊)를 즐긴 화폭이 아닌가 싶다.”
					</T.TextSpan>

					<TextSpanForNameNo14>
						<br />
						광주미술문화연구소 대표 조인호 <br />
					</TextSpanForNameNo14>
					<TextSpanForNameNo14>
						<br />
						<br /> -&nbsp;시간속에 담아 낸 내면의 추상언어 - 중
					</TextSpanForNameNo14>
				</TextContainerNo14>

				<MetadataContainerNo14>
					<M.MetadataSpan1>빛을 담다 Ⅰ </M.MetadataSpan1>
					<M.MetadataSpan2>
						72.5 ⅹ 72.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo14>

				<ImageContainerNo14>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515346/artist-website/pamphlet_assets/A_9528660_600kb_teixo9.jpg"
						alt=""
					/>
				</ImageContainerNo14>
			</SecondDiv>

			<PageCenter>14</PageCenter>
		</FirstDiv>
	);
};

export const No15 = () => {
	const MetadataContainerNo15One = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;

	const MetadataContainerNo15Two = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo15One = styled(ImageContainer)`
		position: absolute;
		top: 0;
		left: 0;
		width: 54rem;
	`;
	const ImageContainerNo15Two = styled(ImageContainer)`
		position: absolute;
		top: 0;
		right: 0;
		width: 54rem;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<MetadataContainerNo15One>
					<M.MetadataSpan1>빛을 담다 Ⅱ</M.MetadataSpan1>
					<M.MetadataSpan2>
						91 ⅹ 65cm &nbsp;Mixed media &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo15One>

				<MetadataContainerNo15Two>
					<M.MetadataSpan1>빛을 담다 Ⅲ</M.MetadataSpan1>
					<M.MetadataSpan2>
						91 x 65cm &nbsp;Mixed media &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo15Two>

				<ImageContainerNo15One>
					<I.ImageHorizontalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515346/artist-website/pamphlet_assets/A_9528663_600kb_ssdmy1.jpg"
						alt=""
					/>
				</ImageContainerNo15One>

				<ImageContainerNo15Two>
					<I.ImageHorizontalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515346/artist-website/pamphlet_assets/A_9528664_600kb_crjz4o.jpg"
						alt=""
					/>
				</ImageContainerNo15Two>
			</SecondDiv>

			<PageCenter>15</PageCenter>
		</FirstDiv>
	);
};

export const No16 = () => {
	const MetadataContainerNo16 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo16One = styled(ImageContainer)`
		position: absolute;
		top: 0;
		left: 0;
		height: 72rem;
	`;
	const ImageContainerNo16Two = styled(ImageContainer)`
		position: absolute;
		top: 0;
		right: 0;
		height: 38rem;
	`;

	return (
		<FirstDiv>
			<ImageContainerNo16One>
				<I.ImageVerticalImg
					src="https://res.cloudinary.com/koreachief/image/upload/v1647515345/artist-website/pamphlet_assets/A_9528661_600kb_vtkbol.jpg"
					alt=""
				/>
			</ImageContainerNo16One>

			<SecondDiv>
				<ImageContainerNo16Two>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515345/artist-website/pamphlet_assets/A_9528661_600kb_vtkbol.jpg"
						alt=""
					/>
				</ImageContainerNo16Two>

				<MetadataContainerNo16>
					<M.MetadataSpan1>빛을 담다 Ⅳ</M.MetadataSpan1>
					<M.MetadataSpan2>
						72.7 ⅹ 72.7cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo16>
			</SecondDiv>

			<PageRight>16</PageRight>
		</FirstDiv>
	);
};

export const No17 = () => {
	const MetadataContainerNo17One = styled(MetadataContainer)`
		position: absolute;
		bottom: 4.4rem;
		right: 0;
	`;
	const MetadataContainerNo17Two = styled(MetadataContainer)`
		position: absolute;
		bottom: 2.2rem;
		right: 0;
	`;
	const MetadataContainerNo17Three = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo17 = styled(ImageContainer)`
		position: absolute;
		top: 10rem;
		left: 0;
		height: 38rem;
	`;
	const SecondDivNo17 = styled(SecondDiv)``;

	return (
		<FirstDiv>
			<SecondDivNo17>
				<ImageContainerNo17>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515343/artist-website/pamphlet_assets/A_9528675_600kb_yewbbb.jpg"
						alt=""
					/>
				</ImageContainerNo17>

				<MetadataContainerNo17One>
					<M.MetadataSpan1>길을 걷다 Ⅰ</M.MetadataSpan1>
					<M.MetadataSpan2>
						25 ⅹ 33.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2019
					</M.MetadataSpan2>
				</MetadataContainerNo17One>
				<MetadataContainerNo17Two>
					<M.MetadataSpan1>길을 걷다 Ⅱ</M.MetadataSpan1>
					<M.MetadataSpan2>
						25 ⅹ 33.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo17Two>
				<MetadataContainerNo17Three>
					<M.MetadataSpan1>길을 걷다 Ⅲ</M.MetadataSpan1>
					<M.MetadataSpan2>
						25 ⅹ 33.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo17Three>
			</SecondDivNo17>

			<PageCenter>17</PageCenter>
		</FirstDiv>
	);
};

export const No18 = () => {
	const MetadataContainerNo18 = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo18 = styled(ImageContainer)`
		position: absolute;
		left: 0;
		height: 100%;
	`;
	const MetaDataSpanNo18One = styled(M.MetadataSpan1)`
		color: white;
	`;

	const MetaDataSpanNo18Two = styled(M.MetadataSpan2)`
		margin-left: 1rem;
		color: white;
	`;
	const MetaDataSpanNo18Three = styled(M.MetadataSpan2)`
		margin-left: 1rem;
	`;

	return (
		<FirstDiv>
			<ImageContainerNo18>
				<I.ImageVerticalImg
					src="https://res.cloudinary.com/koreachief/image/upload/v1647515344/artist-website/pamphlet_assets/A_9528645_600kb_twn1vu.jpg"
					alt=""
				/>
			</ImageContainerNo18>

			<SecondDiv>
				<MetadataContainerNo18>
					{/* <M.MetadataSpan1>시간을 걷다 Ⅳ</M.MetadataSpan1>
<M.MetadataSpan2>162 ⅹ 97cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2019</M.MetadataSpan2> */}
					<MetaDataSpanNo18One>시간을 걷다 Ⅳ</MetaDataSpanNo18One>
					<MetaDataSpanNo18Two>162</MetaDataSpanNo18Two>
					<MetaDataSpanNo18Three>
						ⅹ 97cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</MetaDataSpanNo18Three>
				</MetadataContainerNo18>
			</SecondDiv>

			<PageRight>18</PageRight>
		</FirstDiv>
	);
};

export const No19 = () => {
	const ImageContainerNo19 = styled(ImageContainer)`
		height: 100%;
	`;

	return (
		<ImageContainerNo19>
			<I.ImageHorizontalImg
				src="https://res.cloudinary.com/koreachief/image/upload/v1647640218/artist-website/pamphlet_assets/A_9528644_600kb_cropped_yb13i6.jpg"
				alt=""
			/>
		</ImageContainerNo19>
	);
};

export const No20 = () => {
	const MetadataContainerNo20One = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		left: 0;
	`;

	const MetadataContainerNo20Two = styled(MetadataContainer)`
		position: absolute;
		bottom: 0;
		right: 0;
	`;

	const ImageContainerNo20One = styled(ImageContainer)`
		position: absolute;
		top: 29rem;
		left: 0;
		height: 22rem;
	`;
	const ImageContainerNo20Two = styled(ImageContainer)`
		position: absolute;
		top: 0;
		right: 0;
		width: 60rem;
	`;

	return (
		<FirstDiv>
			<SecondDiv>
				<MetadataContainerNo20One>
					<M.MetadataSpan1>길을 걷다 Ⅷ</M.MetadataSpan1>
					<M.MetadataSpan2>
						162 ⅹ 112cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020
					</M.MetadataSpan2>
				</MetadataContainerNo20One>
				<MetadataContainerNo20Two>
					<M.MetadataSpan1>시간을 담다 Ⅴ</M.MetadataSpan1>
					<M.MetadataSpan2>
						41 ⅹ 31cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2019
					</M.MetadataSpan2>
				</MetadataContainerNo20Two>

				<ImageContainerNo20One>
					<I.ImageVerticalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647640216/artist-website/pamphlet_assets/A_9528644_600kb_rhkrto.jpg"
						alt=""
					/>
				</ImageContainerNo20One>

				<ImageContainerNo20Two>
					<I.ImageHorizontalImg
						src="https://res.cloudinary.com/koreachief/image/upload/v1647515343/artist-website/pamphlet_assets/A_9528678_600kb_vekjdh.jpg"
						alt=""
					/>
				</ImageContainerNo20Two>
			</SecondDiv>

			<PageCenter>20</PageCenter>
		</FirstDiv>
	);
};

export const No21 = () => {
	const ImageContainerNo21 = styled(ImageContainer)`
		height: 100%;
	`;

	return (
		<ImageContainerNo21>
			<I.ImageVerticalImg
				src="https://res.cloudinary.com/koreachief/image/upload/v1648167604/artist-website/pamphlet_assets/opening_last_page_egjiho.png"
				alt=""
			/>
		</ImageContainerNo21>
	);
};
