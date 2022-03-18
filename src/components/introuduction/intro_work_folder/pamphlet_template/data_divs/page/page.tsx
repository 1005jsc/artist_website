import { PageCenterSpan, PageLeftSpan, PageRightSpan} from './page.style';



type PageProps = {
  children?: React.ReactNode;
  className?:string;
}


export const PageCenter = ({children, className}:PageProps) => {

  return <PageCenterSpan className={className}>{children}</PageCenterSpan>

}


export const PageLeft = ({children, className}:PageProps) => {

  return <PageLeftSpan className={className}>{children}</PageLeftSpan>

}

export const PageRight = ({children, className}:PageProps) => {

  return <PageRightSpan className={className}>{children}</PageRightSpan>

}

