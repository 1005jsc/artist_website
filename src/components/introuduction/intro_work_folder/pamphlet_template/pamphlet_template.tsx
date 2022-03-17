import React from "react"
import styled from 'styled-components';
import { TextContainer } from './data_divs/text_container/text_container';
import { FirstDiv, SecondDiv } from './static_divs/static_divs';

type PamphletTemplateProps = {
  className? : string;
}


export const PamphletTemplate = ({className}:PamphletTemplateProps) => {

  return <FirstDiv >
  
  
  <SecondDiv>

    <TextContainerNo1/>

  </SecondDiv>
  
  
  
  
  
  </FirstDiv>

}



const TextContainerNo1 = styled(TextContainer)`
  position: absolute;
	top: 20rem;
	left: 0;
  border: 1px solid black;
`