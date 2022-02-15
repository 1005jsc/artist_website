
import { myApp } from './firebase';
import { getDatabase, off, onValue, ref, remove, set } from "firebase/database";


class Database {

  myDatabase = getDatabase(myApp) 



  uploadExhibitionData(id, inputData){
    set(ref(this.myDatabase, `root/exhibitions/${id}`), inputData)
  }


  uploadWorkData(id, inputData){
    set(ref(this.myDatabase, `root/works/${id}`), inputData)
  }

  uploadExhibitionBuildingPhotoUrl(id, museumPhotoId, url){
    set(ref(this.myDatabase,
      `root/exhibitions/${id}/exhibitionBuildingPhotoUrl/${museumPhotoId}`), url)
  }

 

  getExhibitionData(callback){
    const readDataRef = ref(this.myDatabase, `root/exhibitions/`)
    onValue(readDataRef, (snapshot)=> {
      const data = snapshot.val()
      snapshot&&callback(data)
    })
    return () => off(readDataRef)
  }


  getWorkData(callback){
    const readDataRef = ref(this.myDatabase, `root/works/`)
    onValue(readDataRef, (snapshot)=> {
      const data = snapshot.val()
      snapshot&&callback(data)
    })
    return () => off(readDataRef)
  }


  deleteWorkData(id){
    remove(ref(this.myDatabase, `root/works/${id}`))
  }


  deleteExhibitionData(id){
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









