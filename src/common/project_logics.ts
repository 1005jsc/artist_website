import { TypeOfExhibitions, TypeOfWorks } from './project_types'


class artistWebsiteExportLogics {

  urlWordSearchRegex = /(?:\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/



  worksByYearSort=(works:TypeOfWorks|null) => {
    if(works==null){
      console.log('database is null')
      return
    }
    let worksKeys
    let workYears: string[] 
    let worksYears: string[] 
    let worksDates
    workYears=[]
    worksYears= []
    if(works){
      let yes 
      worksKeys = Object.keys(works)
      worksDates = worksKeys.map((key) => { return works[parseInt(key)][`workCompletionDate`]}) 
      for(let i = 0; i< worksDates.length; i++){
        yes =worksDates[i] as string
        workYears.push(yes.substring(0,4))
      } 
      worksYears = [... new Set(workYears)]
      worksYears.sort((a,b) => parseInt(b)-parseInt(a))
    }
  
    
    // 1) worksByYear 만들기 
    let worksByYear = [] as any[]
    let worksByYearFilter = [] as any[]
    let worksByYearFilter2 = [] as any[]
    let worksByYearFilter3 = [] as any[]
    let worksByYearFilter4 = [] as any[]
    {for(let i = 0; i< worksYears.length; i++){
        worksByYear.push(worksYears[i])
        if(works){
          worksByYearFilter = Object.values(works).filter((work) => 
          work[`workCompletionDate`]?.toString().substring(0,4) === worksYears[i] )
        }
        worksByYearFilter2.push(worksByYearFilter)
      }
      for(let i = 0; i< worksByYear.length; i++){
        worksByYearFilter3= [worksByYear[i], ...worksByYearFilter2[i]]
        worksByYearFilter4.push(worksByYearFilter3)
      }
    }

    return worksByYearFilter4

  }



  returnWorkSizeBigToSmallArray = (works:TypeOfWorks|null) => {
    if(works==null){
      console.log('database is null')
      return
    }

    let worksKeys
    let worksValues
    let worksSizes
    if(works){
      worksKeys = Object.keys(works)
      worksValues = Object.values(works)
      worksSizes = worksKeys.map((key) => { return works[parseInt(key)][`workSize`]}) 
      
    }
    let worksSizes2
    let workSizes7 = []
    let workSizes8 = []
    let workSizes9 = []
    let workSizes10 = []
    let workSizeSmallToBig = []
    if(worksSizes){
  
      worksSizes2 = worksSizes.map((value) => {
        const yes = value?.replace(/[^0-9]/g, ' ')
        if(yes){
          return yes
        }else{
          return 
        }
        })
  
        const workSizes3 = worksSizes2.map((value) => {return value?.substring(0,5)})
        const workSizes4 = worksSizes2.map((value) => {return value?.substring(5)})
        const workSizes5 = workSizes3.map((value) => {return parseInt(value!)})
        const workSizes6 = workSizes4.map((value) => {return parseInt(value!)})
        if(workSizes5){
          for(let i = 0; i< workSizes5.length; i++){
            let area = workSizes5[i]*workSizes6[i]
            workSizes7.push(area)
          }
        }
        for(let i = 0; i< workSizes7.length; i++){
          const array1 = [i,workSizes7[i]]
          workSizes8.push(array1)
        }
        // big to small
        workSizes9 = workSizes8.sort((a,b) => {return a[1]-b[1]})
        workSizes10 = workSizes9.map((value) => {return value[0]})
        for(let i = 0; i< workSizes10.length; i++){
          if(worksValues){
            workSizeSmallToBig.push(worksValues[workSizes10[i]])
          }        
        }
        return workSizeSmallToBig


  }
}

  returnWorkSizeSmallToBigArray = (works:TypeOfWorks|null) => {
    if(works==null){
      console.log('database is null')
      return
    }
    let worksKeys
    let worksValues
    let worksSizes
    if(works){
      worksKeys = Object.keys(works)
      worksValues = Object.values(works)
      worksSizes = worksKeys.map((key) => { return works[parseInt(key)][`workSize`]}) 
      
    }
    let worksSizes2
    let workSizes7 = []
    let workSizes8 = []
    let workSizes9 = []
    let workSizes10 = []
    let workSizeBigToSmall = []
    if(worksSizes){
  
      worksSizes2 = worksSizes.map((value) => {
        const yes = value?.replace(/[^0-9]/g, ' ')
        if(yes){
          return yes
        }else{
          return 
        }
        })
  
        const workSizes3 = worksSizes2.map((value) => {return value?.substring(0,5)})
        const workSizes4 = worksSizes2.map((value) => {return value?.substring(5)})
        const workSizes5 = workSizes3.map((value) => {return parseInt(value!)})
        const workSizes6 = workSizes4.map((value) => {return parseInt(value!)})
        if(workSizes5){
          for(let i = 0; i< workSizes5.length; i++){
            let area = workSizes5[i]*workSizes6[i]
            workSizes7.push(area)
          }
        }
        for(let i = 0; i< workSizes7.length; i++){
          const array1 = [i,workSizes7[i]]
          workSizes8.push(array1)
        }
        // big to small
       
        // small to big
        workSizes9 = workSizes8.sort((a,b) => {return b[1]-a[1]})
        workSizes10 = workSizes9.map((value) => {return value[0]})
  
        for(let i = 0; i< workSizes10.length; i++){
          if(worksValues){
            workSizeBigToSmall.push(worksValues[workSizes10[i]])
          }        
        }
        return workSizeBigToSmall
      }


  }

  returnExhibitionWorkAndYearArray = (exhibitions:TypeOfExhibitions|null) => {
    let exhibitionsKeys
  let exhibitionYears: string[] 
  let exhibitionsYears: string[] 
  let exhibitionsDates
  exhibitionYears=[]
  exhibitionsYears= []
  if(exhibitions){
    let yes 
    exhibitionsKeys = Object.keys(exhibitions)
    exhibitionsDates = exhibitionsKeys.map((key) => { return exhibitions[parseInt(key)][`exhibitionStartDate`]}) 
    for(let i = 0; i< exhibitionsDates.length; i++){
      yes =exhibitionsDates[i] as string
      exhibitionYears.push(yes.substring(0,4))
    } 
    exhibitionsYears = [... new Set(exhibitionYears)]
    exhibitionsYears.sort((a,b) => parseInt(b)-parseInt(a))
  }

  let exhibitionsByYear = [] as any[]
  let exhibitionsByYearFilter = [] as any[]
  let exhibitionsByYearFilter2 = [] as any[]
  let exhibitionsByYearFilter3 = [] as any[]
  let exhibitionsByYearFilter4 = [] as any[]
  {for(let i = 0; i< exhibitionsYears.length; i++){
      exhibitionsByYear.push(exhibitionsYears[i])
      if(exhibitions){
        exhibitionsByYearFilter = Object.values(exhibitions).filter((exhibition) => 
        exhibition[`exhibitionStartDate`]?.toString().substring(0,4) === exhibitionsYears[i] )
      }
      exhibitionsByYearFilter2.push(exhibitionsByYearFilter)
    }
    for(let i = 0; i< exhibitionsByYear.length; i++){
      exhibitionsByYearFilter3= [exhibitionsByYear[i], ...exhibitionsByYearFilter2[i]]
      exhibitionsByYearFilter4.push(exhibitionsByYearFilter3)
    }
  }
  return exhibitionsByYearFilter4


  }



}


export const myLogics = new artistWebsiteExportLogics()






