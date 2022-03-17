import { MetadataDiv } from './metadata_container.style';


type MetadataContainerProps = {
  children: React.ReactNode;
  className?: string;
}


export const MetadataContainer = ({children, className}:MetadataContainerProps) => {



  return <MetadataDiv className={className}>
  
    {children}
  
  
  
  
  </MetadataDiv>
}