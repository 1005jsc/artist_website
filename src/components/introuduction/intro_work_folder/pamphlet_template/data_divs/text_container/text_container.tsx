import { TextDiv, TextSpan } from './text_container.style'


type TextContainerProps = {
  children: React.ReactNode;
  className?: string;
}


export const TextContainer = ({children, className}:TextContainerProps) => {





  return <TextDiv className={className}>


   {children}

  </TextDiv>




}






