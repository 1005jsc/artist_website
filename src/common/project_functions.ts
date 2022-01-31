

export {}



class artWebsiteExportFunctions{




  checkWordFromUrl = (word:string) => {
    const urlWordSearchRegex = /(\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/
  const urlNow = window.location.href 
  
  const result = urlNow.match(urlWordSearchRegex)
  const wordWithSlash = `/${word}`
  if(result?.includes(wordWithSlash)){
    return true
  }else{
    return false
  }
  }

  useWordFromUrl = (word:string, callback:(youDontHaveToAddAParam: string)=> void) => {
    const urlWordSearchRegex = /(\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/
  const urlNow = window.location.href 
  
  const result = urlNow.match(urlWordSearchRegex)
  const wordWithSlash = `/${word}`
  if(result?.includes(wordWithSlash)){
    callback(wordWithSlash)
  }else{
  }
  }

}

export const myFunctions = new artWebsiteExportFunctions()


// const navigate = useNavigate()
// const navigateTo:React.MouseEventHandler<HTMLButtonElement> = (e) => {
//   e.preventDefault()
//   const path = e.currentTarget.dataset.path
//   if(path){
//     navigate(`/main/works/${path}`)
//   }
// }


































