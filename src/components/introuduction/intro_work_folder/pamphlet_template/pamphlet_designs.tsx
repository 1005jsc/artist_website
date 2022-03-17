import { TextContainer } from './data_divs/text_container/text_container'
import { FirstDiv, SecondDiv } from './static_divs/static_divs'
import  styled  from 'styled-components';
import * as T  from './data_divs/text_container/text_container.style';
import * as M  from './data_divs/metadata_container/metadata_container.style';

import { MetadataContainer } from './data_divs/metadata_container/metadata_container';
import { Page } from './data_divs/page/page';
import * as P from './data_divs/page/page.style';
import { ImageContainer } from './data_divs/image_container/image_container';
import * as I from './data_divs/image_container/image_container.style';



export const No1 = () => {

  return <FirstDiv>

  <SecondDiv>
      <TextContainerNo1 >
        <T.TextSpan>
              “제 작업의 근원은 문자 추상을 기본으로 합니다. 40년 전 처음 그림을 시작하면서부터 생각했던 일관된 소재였고 특별히 누구에게서 영향을 받았거나 문자를 선택한 특별한 계기는 없었습니다. 문자추상을 통해 나의 생각과 삶을 담을 수 있었고 형태의 변형을 통하여 나름대로의 즐거움과 작업의 재미를 느낄 수 있었습니다. 문자형태의 변형은 제 그림에서 가장 중요한 과제이고 창의적인 표현을 할 수 있게 만드는 가장 기초적인 조형언어입니다.” 
          -작가노트-에서 발췌 
        </T.TextSpan>
      </TextContainerNo1>

    <MetadataContainerNo1>
      <M.MetadataSpan1>시간을 담다 10</M.MetadataSpan1>
      <M.MetadataSpan2>91 x 60.5cm Acrylic on canvas &nbsp;&nbsp;2020</M.MetadataSpan2>
    
    </MetadataContainerNo1>

    <ImageContainerNo1>
      <I.ImageImg src="/img/works_img/work_sample.jpg" alt=""/>
    </ImageContainerNo1>

    


  </SecondDiv>

  <PageNo1>
      <P.PageSpan>
        16
      </P.PageSpan>
    </PageNo1>

  </FirstDiv>

}


const TextContainerNo1 = styled(TextContainer)`
  position: absolute;
	top: 0;
	left: 0;
  border: 1px solid black;
`

const MetadataContainerNo1 = styled(MetadataContainer)`
  border: 1px solid black;
	position: absolute;
	bottom: 0;
	left: 0;
`
const PageNo1 = styled(Page)`
  position: absolute;
	bottom: 2.8rem;
	left: 50%;
`

const ImageContainerNo1 = styled(ImageContainer)`
position: absolute;
top: 0;
right: 0;

`





