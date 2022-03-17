import { Children } from 'react';
import { ImageDiv } from './image_container.style';



type ImageContainerProps = {
  children: React.ReactNode;
  className?: string;
}


export const ImageContainer = ({children, className}:ImageContainerProps) => {


  return <ImageDiv className={className}>

  {children}


  </ImageDiv>



}