
import { myApp } from './firebase';
import { getDatabase, off, onValue, ref, remove, set } from "firebase/database";
import { AllImageOrPhotoList } from '../common/project_types';


class Database {

  myDatabase = getDatabase(myApp) 



  uploadExhibitionData(id:string|number, inputData:any){
    set(ref(this.myDatabase, `root/exhibitions/${id}`), inputData)
  }


  uploadWorkData(id:string|number, inputData:any){
    set(ref(this.myDatabase, `root/works/${id}`), inputData)
  }



  uploadPhotoUrl(worksOrExhibitions:'works'|'exhibitions',workOrExhibitionid:string|number, imageOrPhotoType:AllImageOrPhotoList,museumPhotoId:string|number, url:string){
    set(ref(this.myDatabase,
      `root/${worksOrExhibitions}/${workOrExhibitionid}/${imageOrPhotoType}/${museumPhotoId}`), url)
  }
  

 

  getExhibitionData(callback:(sth:any)=> void){
    const readDataRef = ref(this.myDatabase, `root/exhibitions/`)
    onValue(readDataRef, (snapshot)=> {
      const data = snapshot.val()
      snapshot&&callback(data)
    })
    return () => off(readDataRef)
  }


  getWorkData(callback:(sth:any)=> void){
    const readDataRef = ref(this.myDatabase, `root/works/`)
    onValue(readDataRef, (snapshot)=> {
      const data = snapshot.val()
      snapshot&&callback(data)
    })
    return () => off(readDataRef)
  }


  deleteWorkData(id:string|number){
    remove(ref(this.myDatabase, `root/works/${id}`))
  }


  deleteExhibitionData(id:string|number){
    remove(ref(this.myDatabase, `root/exhibitions/${id}`))
  }




  // deleteData(uid, id){
  //   remove(ref(this.myDatabase, `${uid}/employees/${id}/`))
    
  // }

   // getData(uid,  callback){
  //   const readDataRef = ref(this.myDatabase, `${uid}/employees/`)
  //   onValue(readDataRef,
  //   (snapshot) => {
  //     const data = snapshot.val()
  //     snapshot&& callback(data)
      
  //   })
  //   return () => off(readDataRef)
  //   // 계속 싱크될수있는 것을 끌수있는 함수를 리턴함 
  // }



}export default Database








