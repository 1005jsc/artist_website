export{}

export type HandleLoginType = (password:string|number) => boolean;


// 여기 다시한번 다루기
export type LoginContextType = {
  handleLogin: HandleLoginType,
  loginState: boolean
  

}






