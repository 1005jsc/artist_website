import { PageSpan } from './page.style';



type PageProps = {
  children?: React.ReactNode;
  className?:string;
}


export const Page = ({children, className}:PageProps) => {

  return <PageSpan className={className}>{children}</PageSpan>

}