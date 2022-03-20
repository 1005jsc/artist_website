import { ImageQualityTypes } from './project_types'





class artWebsiteExportFunctions{
  static urlWordSearchRegex = /(?:\/home?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/
  static cloudinaryImageUrlRegex = /(https?:\/\/res\.cloudinary\.com\/koreachief\/image\/upload\/)([a-zA-Z0-9\W]+)/

  checkVacantUrl = ( url: string|null|undefined) => {
    if(url===undefined){
      return 
    }
    if(url==null){
      return 
    }
  const result = url.match(artWebsiteExportFunctions.urlWordSearchRegex)
  if(result![1]===undefined){
    return true
  }else{
    return false
  }
  }


  checkWordFromUrl = (word:string, url: string|null|undefined) => {
    if(url===undefined){
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
    return false
  }
  }

  useWordFromUrl = (word:string, url: string|null|undefined, callback:(youDontHaveToAddAParam: string)=> void) => {
  
    if(url===undefined){
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


  generateAKey = (i:number) => {
    const dateNow = Math.floor(Date.now()/100)+i
    return dateNow
  }



  imageUrlMakerByRequestedQuality = (url: string, quality:ImageQualityTypes,width?: number|'null', height?:number|'null' ) => {

    if(url===undefined){
      return '1'
    }
    if(url==null){
      return '2'
    }
    const result = url.match(artWebsiteExportFunctions.cloudinaryImageUrlRegex)
    if(result== null){
      return '3'
    }
    const urlFormer = result[1]
    const urlLater = result[2]

    let width1
    let height1
    if(width == 'null'){
      width1 = null
    }else{
      width1 = width
    }
    if(height == 'null'){
      height1 = null
    }else{
      height1 = height
    }

    switch (quality) {
      case 'mini':
        if(width1&&height1){
          return `${urlFormer}w_${width1},h_${height1}/q_auto:best/${urlLater}`
        }else if(width1&&!height1) { 
          return `${urlFormer}w_${width}/q_auto:best/${urlLater}`
          
        }else if(!width1&&height1) { 
          return `${urlFormer}h_${height1}/q_auto:best/${urlLater}`
          
        }else{
          return `${urlFormer}/q_auto:best/${urlLater}`
        }
        
      case 'small':
        if(width1&&height1){
          return `${urlFormer}w_${width1},h_${height1}/q_auto:best/${urlLater}`
        }else if(width1&&!height1) { 
          return `${urlFormer}w_${width}/q_auto:best/${urlLater}`
          
        }else if(!width1&&height1) { 
          return `${urlFormer}h_${height}/q_auto:best/${urlLater}`
          
        }else{
          return `${urlFormer}/q_auto:best/${urlLater}`
        }
      case 'medium':
        return `${urlFormer}q_15/${urlLater}`
      case 'large':
        return `${urlFormer}q_20/${urlLater}`;
      case 'full-screen':
        return `${urlFormer}q_10/${urlLater}`;
      case 'almost-original':
        return `${urlFormer}q_60/${urlLater}`;
      case 'original':
        return   `${urlFormer}${urlLater}`
      default:
        console.log('no match ')
    }
    
  }



  snakeCaseToLowerCamelCase = (str:string) =>{
    return str.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
  }
  





  










}

export const myFunctions = new artWebsiteExportFunctions()










































