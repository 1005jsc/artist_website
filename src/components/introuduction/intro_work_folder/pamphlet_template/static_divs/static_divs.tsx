import React from "react"
import * as B from './static_divs.style';



type FirstDivProps = {
  children: React.ReactNode;
}


export const FirstDiv = ({children}:FirstDivProps) => {

  return <B.BasicTemplateSection>

  {children}

  </B.BasicTemplateSection>

}


type SecondDivProps = {
  children: React.ReactNode;
}

export const SecondDiv = ({children}:SecondDivProps) => {

  return <B.BasicTemplateSecondDiv>

  {children}
  </B.BasicTemplateSecondDiv>

}
