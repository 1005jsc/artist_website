

export {}



class artWebsiteExportFunctions{




  checkWordFromUrl = (word:string) => {
    const urlWordSearchRegex = /(?:\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/
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
  const urlWordSearchRegex = /(?:\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/
  const urlNow = window.location.href 
  
  const result = urlNow.match(urlWordSearchRegex)
  const wordWithSlash = `/${word}`
  if(result?.includes(wordWithSlash)){
    callback(wordWithSlash)
  }else{
    return
  }
  }

}

export const myFunctions = new artWebsiteExportFunctions()

































