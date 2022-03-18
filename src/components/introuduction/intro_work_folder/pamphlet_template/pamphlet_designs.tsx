import { TextContainer } from './data_divs/text_container/text_container'
import { FirstDiv, SecondDiv } from './static_divs/static_divs'
import  styled  from 'styled-components';
import { ImageContainer } from './data_divs/image_container/image_container';
import { MetadataContainer } from './data_divs/metadata_container/metadata_container';
import { Page } from './data_divs/page/page';

import * as T  from './data_divs/text_container/text_container.style';
import * as M  from './data_divs/metadata_container/metadata_container.style';
import * as P from './data_divs/page/page.style';
import * as I from './data_divs/image_container/image_container.style';



export const No1 = () => {

  const TextContainerNo1 = styled(TextContainer)`
  position: absolute;
	top: 0;
	left: 0;
`

const MetadataContainerNo1 = styled(MetadataContainer)`
	position: absolute;
	bottom: 0;
	left: 0;
`
const PageNo1 = styled(Page)`
  display: inline-block;
  position: absolute;
	bottom: 2.8rem;
  width: 1.4rem;
	left: calc(50%-0.7rem);
`

const ImageContainerNo1 = styled(ImageContainer)`
width: 60rem;
height: 41.5rem;
position: absolute;
top: 0;
right: 0;

`

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
      <M.MetadataSpan2>91 x 60.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020</M.MetadataSpan2>
    
    </MetadataContainerNo1>

    <ImageContainerNo1>
      <I.ImageHorizontalImg src="https://res.cloudinary.com/koreachief/image/upload/v1647515343/artist-website/pamphlet_assets/A_9528653_600kb_mb5qre.jpg" alt=""/>
    </ImageContainerNo1>

  </SecondDiv>

    <PageNo1>
      <P.PageSpan>
        16
      </P.PageSpan>
    </PageNo1>

  </FirstDiv>

}




export const No2 = () => {



const MetadataContainerNo2One = styled(MetadataContainer)`
  position: absolute;
  bottom: 0;
  left: 0;
`
const MetadataContainerNo2Two = styled(MetadataContainer)`
  position: absolute;
  bottom: 0;
  right: 0;
`

const ImageContainerNo2One = styled(ImageContainer)`
height: 48.6rem;
position: absolute;
top: 0;
left: 0;

`
const ImageContainerNo2Two = styled(ImageContainer)`
height: 48.6rem;
position: absolute;
top: 0;
right: 0;

`
const PageNo2 = styled(Page)`
  position: absolute;
  bottom: 2.8rem;
  left: 50%;
`




 return <FirstDiv>  

  <SecondDiv>

  <MetadataContainerNo2One>
      <M.MetadataSpan1>시간을 담다 10</M.MetadataSpan1>
      <M.MetadataSpan2>91 x 60.5cm Acrylic on canvas &nbsp;&nbsp;2020</M.MetadataSpan2>
    
    </MetadataContainerNo2One>

    <MetadataContainerNo2Two>
      <M.MetadataSpan1>시간을 담다 10</M.MetadataSpan1>
      <M.MetadataSpan2>91 x 60.5cm Acrylic on canvas &nbsp;&nbsp;2020</M.MetadataSpan2>
    
    </MetadataContainerNo2Two>

    <ImageContainerNo2One>
      <I.ImageVerticalImg src="https://res.cloudinary.com/koreachief/image/upload/v1647515343/artist-website/pamphlet_assets/A_9528677_600kb_rztiiq.jpg" alt=""/>
    </ImageContainerNo2One>

    <ImageContainerNo2Two>
      <I.ImageVerticalImg src="https://res.cloudinary.com/koreachief/image/upload/v1647515346/artist-website/pamphlet_assets/A_9528679_600kb_pnjncn.jpg" alt=""/>
    </ImageContainerNo2Two>



  </SecondDiv>  

  <PageNo2>
      <P.PageSpan>
        17
      </P.PageSpan>
    </PageNo2>


</FirstDiv>

}

export const No3= () => {


const MetadataContainerNo3= styled(MetadataContainer)`
  position: absolute;
  bottom: 0;
  left: 0;
`
const PageNo3= styled(Page)`
  position: absolute;
  bottom: 2.8rem;
  right: 6rem;
`

const ImageContainerNo3 = styled(ImageContainer)`
height: 58rem;
position: absolute;
top: 7rem;
right: 0;

`



 return <FirstDiv>  

<SecondDiv>

<MetadataContainerNo3>
      <M.MetadataSpan1>시간을 담다 10</M.MetadataSpan1>
      <M.MetadataSpan2>91 x 60.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020</M.MetadataSpan2>
    
    </MetadataContainerNo3>

    
  </SecondDiv>  

  <ImageContainerNo3>
      <I.ImageVerticalImg src="https://res.cloudinary.com/koreachief/image/upload/v1647515343/artist-website/pamphlet_assets/A_9528653_600kb_mb5qre.jpg" alt=""/>
    </ImageContainerNo3>

  <PageNo3>
      <P.PageSpan>
        18
      </P.PageSpan>
    </PageNo3>
</FirstDiv>

}


export const No4 = () => {


const MetadataContainerNo4 = styled(MetadataContainer)`
  position: absolute;
  bottom: 0;
  right: 0;
`
const PageNo4 = styled(Page)`
  position: absolute;
  bottom: 2.8rem;
  right: 6rem;
`

const ImageContainerNo4 = styled(ImageContainer)`
height: 100%;
position: absolute;
top: 0;
left: 0;

`

return <FirstDiv>  




<SecondDiv>

<MetadataContainerNo4>
      <M.MetadataSpan1>시간을 담다 10</M.MetadataSpan1>
      <M.MetadataSpan2>91 x 60.5cm &nbsp;Acrylic on canvas &nbsp;&nbsp;2020</M.MetadataSpan2>
    
    </MetadataContainerNo4>




  </SecondDiv>  


  <ImageContainerNo4>
      <I.ImageVerticalImg src="https://res.cloudinary.com/koreachief/image/upload/v1647515343/artist-website/pamphlet_assets/A_9528653_600kb_mb5qre.jpg" alt=""/>
    </ImageContainerNo4>

    <PageNo4>
      <P.PageSpan>
        19
      </P.PageSpan>
    </PageNo4>

</FirstDiv>

}
