

export {}



class artWebsiteExportFunctions{
  static urlWordSearchRegex = /(?:\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/



  checkWordFromUrl = (word:string, url: string|null|undefined) => {
    if(url==undefined){
      return 
    }
    if(url==null){
      return 
    }
  const result = url.match(artWebsiteExportFunctions.urlWordSearchRegex)
  const wordWithSlash = `/${word}`
  if(result?.includes(wordWithSlash)){
    return true
  }else{
    console.log('hi')
    return false
  }
  }

  useWordFromUrl = (word:string, url: string|null|undefined, callback:(youDontHaveToAddAParam: string)=> void) => {
  
    if(url==undefined){
      return 
    }
    if(url==null){
      return 
    }

  const result = url.match(artWebsiteExportFunctions.urlWordSearchRegex)
  const wordWithSlash = `/${word}`
  if(result?.includes(wordWithSlash)){
    callback(wordWithSlash)
  }else{
    return
  }
  }

}

export const myFunctions = new artWebsiteExportFunctions()


class artWebsiteExportLogics{

  urlWordSearchRegex = /(?:\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/



}


export const myLogics = new artWebsiteExportLogics()































