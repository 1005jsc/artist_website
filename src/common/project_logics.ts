import { myFunctions } from './project_functions'
import { TypeOfExhibitions, TypeOfWork, TypeOfWorks } from './project_types'


class artistWebsiteExportLogics {

  urlWordSearchRegex = /(?:\/main?)(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?(\/[\w\d]+)?/



  yearAndWorksSortedByYear=(works:TypeOfWorks|null) => {
    if(works==null){
      // console.log('database is null')
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
      worksYears = [...new Set(workYears)]
      worksYears.sort((a,b) => parseInt(b)-parseInt(a))
    }
  
    
    // 1) worksByYear 만들기 
    let worksByYear = [] as string[]
    let worksByYearFilter = [] as TypeOfWork[]
    let worksByYearFilter2 = [] as TypeOfWork[][]
    let worksByYearFilter3 = [] as (string|TypeOfWork)[]
    let worksByYearFilter4 = [] as (string|TypeOfWork)[][]
    for(let i = 0; i< worksYears.length; i++){
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
    

    return worksByYearFilter4

  }




  returnWorkSizeSmallToBigArray = (works:TypeOfWorks|null) => {
    if(works==null){
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

  returnWorkSizeBigToSmallArray = (works:TypeOfWorks|null) => {
    if(works==null){
      // console.log('database is null')
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
    exhibitionsYears = [...new Set(exhibitionYears)]
    exhibitionsYears.sort((a,b) => parseInt(b)-parseInt(a))
  }

  let exhibitionsByYear = [] as any[]
  let exhibitionsByYearFilter = [] as any[]
  let exhibitionsByYearFilter2 = [] as any[]
  let exhibitionsByYearFilter3 = [] as any[]
  let exhibitionsByYearFilter4 = [] as any[]
  for(let i = 0; i< exhibitionsYears.length; i++){
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
  
  return exhibitionsByYearFilter4


  }


  singleWorkImageDistribute=(array1:TypeOfWork[], workId:number|null) => {
    let workMain = '' as string|undefined|null
    let workSubMain = '' as string|undefined|null
    let workLeft = '' as string|undefined|null
    let workRight = '' as string|undefined|null
    let workMainAlmostOriginal = '' as string|undefined|null
    array1.forEach((work, index) => {
      if(work.workSerialNumber === workId){


        const workMain1 = array1[index]['workImageUrl']
        if( workMain1 !== null){
          workMain=myFunctions.imageUrlMakerByRequestedQuality(
            Object.values(workMain1)[0],'medium'
          )
          
        }else{
          workMain = null
        }

        const workMainAlmostOriginal1 = array1[index]['workImageUrl']
        if( workMainAlmostOriginal1 !== null){
          workMainAlmostOriginal=myFunctions.imageUrlMakerByRequestedQuality(
            Object.values(workMainAlmostOriginal1)[0],'original'
          )
          
        }else{
          workMainAlmostOriginal = null
        }



          const workSubMain1 = array1[index]['workImageUrl']
        
          if( workSubMain1 !== null){
            workSubMain=myFunctions.imageUrlMakerByRequestedQuality(
              Object.values(workSubMain1)[0], 'mini', 'null', 90 )
          }else{
            workSubMain=null
          }
        

        
        if(index-1>=0){
          const workLeft1 = array1[index-1]['workImageUrl']
        
          if( workLeft1 !== null){
            workLeft=myFunctions.imageUrlMakerByRequestedQuality(
              Object.values(workLeft1)[0], 'mini', 'null', 90 )

          }else{
            workLeft=null
          }
        }else{
          workLeft=null
        }
        
        
        
        if(index+1 < array1.length){
          const workRight1 = array1[index+1]['workImageUrl']
          const workRightSerialNumber = array1[index+1]['workSerialNumber']
          if( workRight1 !== null){
            workRight = 
            myFunctions.imageUrlMakerByRequestedQuality(
              Object.values(workRight1)[0], 'mini', 'null', 90 )
            
          }else{
            workRight=null
          }
        }else{
          workRight= null
        }
        
      
   
        
      }
    }
    )

    return [workMain, workSubMain, workLeft, workRight, workMainAlmostOriginal] 
  }

  singleWorkComponentNextWorkData=(array1:TypeOfWork[], workId:number|null) => {
    let workLeftSerialNumber = 0 as number|null
    let workRightSerialNumber = 0 as number|null

    array1.forEach((work, index) => {
      if(work.workSerialNumber === workId){


        
        if(index-1>=0){
          workLeftSerialNumber = array1[index-1]['workSerialNumber']
        
        }
        
        
        
        if(index+1 < array1.length){
          workRightSerialNumber = array1[index+1]['workSerialNumber']
          
          }
        }
      }
    )

    return [workLeftSerialNumber,  workRightSerialNumber] 
  }


  worksSortedByYear = (yearAndWorksSortedByYearResult:(string|TypeOfWork)[][]|undefined) => {
    let worksByYearFilter5 = [] as (string|TypeOfWork)[][]
   
   
    if(yearAndWorksSortedByYearResult){
      worksByYearFilter5 = [...yearAndWorksSortedByYearResult]
    }
  
    let okay = [] as  TypeOfWork[]
      if(worksByYearFilter5){
  
        worksByYearFilter5.forEach((cocopop) => {
          const array1 = cocopop.slice(1) as  TypeOfWork[]
          let array2 = [] as TypeOfWork[]
          if(okay){
            array2 = [...okay, ...array1]
          }else{
            array2=[...array1]
          }
  
          okay = array2
          
        })
      }
      return okay
  }

  // workSize의 타입을 제대로 할 수 있는 방법이 있을까?

  workSizeValueDividerIntoWorkSizeOneAndWorkSizeTwo= (workSize:(string|null)) => {

    let hi
    let hi3
    let hi4
    let workSizeOneOne =0
    let workSizeTwoTwo =0
    if(workSize){
      hi = workSize 
      if(hi.length >= 6){
        hi3 = hi.replace(/[^0-9]/g, ' ')?.substring(0,5)
        hi4 = hi?.replace(/[^0-9]/g, ' ')?.substring(5)
      }else{
        hi3 = '0'
        hi4 = '0'
      }
        workSizeOneOne = parseInt(hi3)
        workSizeTwoTwo = parseInt(hi4)
    }

    return [workSizeOneOne, workSizeTwoTwo]



  }





}


export const myLogics = new artistWebsiteExportLogics()






