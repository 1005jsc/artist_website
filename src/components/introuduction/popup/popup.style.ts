import  styled  from 'styled-components';


export type PopupDivProps = {
  popUpShow: boolean;
}



export const PopupDiv = styled.div`
position: fixed;
bottom: 17rem;
left: ${({popUpShow}:PopupDivProps) => (popUpShow?"5rem":'-60rem')};
width: 48rem;
height: 16rem;
background-color: #e6e6e6;
border-radius: 0.8rem;
display: flex;
flex-direction: column;
padding: 2.4rem;
transition: all  ${({popUpShow}:PopupDivProps) => 
(popUpShow?"cubic-bezier(.06,.34,0,1.02)":"cubic-bezier(.69,.17,0,1.02)")}  1s;
animation-timing-function: ease-out;
`
