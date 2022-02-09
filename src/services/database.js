
import { myApp } from './firebase';
import { get, getDatabase, off, onValue, ref, remove, set } from "firebase/database";


class Database {

  myDatabase = getDatabase(myApp) 

  writeUserData(uid, id, inputData){
    
      set(ref(this.myDatabase, `${uid}/employees/${id}/`), 
      inputData
      )

    
  }

  getData(uid,  callback){
    const readDataRef = ref(this.myDatabase, `${uid}/employees/`)
    onValue(readDataRef,
    (snapshot) => {
      const data = snapshot.val()
      snapshot&& callback(data)
      
    })
    return () => off(readDataRef)
    // 계속 싱크될수있는 것을 끌수있는 함수를 리턴함 
  }

  deleteData(uid, id){
    remove(ref(this.myDatabase, `${uid}/employees/${id}/`))
    
  }





}export default Database









