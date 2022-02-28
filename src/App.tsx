import  { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from "./app.module.css"
import BackgroundImage from './components/front_door/background_image/background_image';
import Main from './components/main/large/main/main';
import Biography from './components/main/medium/biography_folder/biography/biography';
import Works from './components/main/medium/works_folder/works/works';
import Critics from './components/main/medium/critics_folder/critics/critics';
import Contacts from './components/main/medium/contacts_folder/contacts/contacts';
import BiographyWords from './components/main/medium/biography_folder/biography_words/biography_words';
import BiographyBio from './components/main/medium/biography_folder/biography_bio/biography_bio';
import WorkYear from './components/main/medium/works_folder/work_year/work_year';
import WorkSize from './components/main/medium/works_folder/work_size/work_size';
import WorkExhibition from './components/main/medium/works_folder/work_exhibition/work_exhibition';
import WorkExhibitionWorks from './components/main/medium/works_folder/work_exhibition_works/work_exhibition_works';
import Exhibitions from './components/main/medium/exhibitions_folder/exhibitions/exhibitions';
import Private from './components/main/medium/private_folder/private/private';
import AuthService from './services/auth';
import PrivateRoute from './components/utility/private_route/private_route';
import Login from './components/main/medium/private_folder/login/login';
import LoginSuccess from './components/main/medium/private_folder/login_success/login_success';
import WorkUpload from './components/main/medium/private_folder/work_upload/work_upload';
import WorkUploadDone from './components/main/medium/private_folder/work_upload_done/work_upload_done';
import WorkFixDone from './components/main/medium/private_folder/work_fix_done/work_fix_done';
import ExhibitionUploadDone from './components/main/medium/private_folder/exhibition_upload_done/exhibition_upload_done';
import SuggestionBox from './components/main/medium/private_folder/suggestion_box/suggestion_box';
import WorkUploadForm from './components/main/medium/private_folder/work_upload_form/work_upload_form';
import WorkFix from './components/main/medium/private_folder/work_fix/work_fix';
import WorkFixFormOne from './components/main/medium/private_folder/work_fix_form_one/work_fix_form_one';
import WorkFixFormTwo from './components/main/medium/private_folder/work_fix_form_two/work_fix_form_two';
import ExhibitionUpload from './components/main/medium/private_folder/exhibition_upload/exhibition_upload';
import ExhibitionUploadForm from './components/main/medium/private_folder/exhibition_upload_form/exhibition_upload_form';
import Database from './services/database';
import WorkImageUpload from './services/work_image_uploads';
import Navbar from './components/front_door/navbar/navbar';
import ExhibitionImageUpload from './services/exhibition_image_uploads';
import Modal from 'react-modal';
import SingleWork from './components/main/medium/work_folder/single_work/single_work';


type AppProps = {
  authService : AuthService;
  databaseService:Database;
  workImageUploadService:WorkImageUpload;
  exhibitionImageUploadService:ExhibitionImageUpload;
}


const App = ({authService, databaseService,exhibitionImageUploadService, workImageUploadService}:AppProps) =>{

  const [login, setLogin] = useState<boolean>(false)

  useEffect(() => {
    authService.AuthUserCheck((result:any) => {
      if(result){
        
        setLogin(true)
      }else{
        setLogin(false)
      }
    })
    
  
}, [login, authService])
  




const handleLogin = (password:string|number) => {
  
  if(password===process.env.REACT_APP_ART_WEBSITE_PRIVATE_ADMIN_PASSWORD){
    authService.AuthGooglePopupLogin()
    setLogin(true)
    return true
  }else{
    return false
  }
}



  return <section className={styles.myApp}>
      
      
    <Routes>

    
      <Route path='' element={<BackgroundImage/>}>
          <Route path='' element={<Navbar/>}/>
      </Route>

      <Route path="/main" element={<Main login={login} handleLogin={handleLogin} />} >

        <Route path='' element={<Biography/>}>
          <Route path="" element={<BiographyWords/>}/>
        </Route>
        
        <Route path='biography' element={<Biography/>}>
          <Route path="" element={<BiographyWords/>}/>
          <Route path="note" element={<BiographyWords/>}/>
          <Route path="bio" element={<BiographyBio/>}/>
        </Route>
          
        
        <Route path="works" element={<Works databaseService={databaseService}/>}>
          <Route path="" element={<WorkYear/>}/>
          <Route path="year" element={<WorkYear/>}/>
          <Route path="larger" element={<WorkSize/>}/>
          <Route path="smaller" element={<WorkSize/>}/>
          <Route path="exhibition" element={<WorkExhibition/>}/>
          <Route path="exhibition_works" element={<WorkExhibitionWorks/>}/>
          <Route path="work" element={<SingleWork/>}/>
        </Route>

        
        <Route path="exhibitions" element={<Exhibitions databaseService={databaseService}/>}>
          <Route path="" element={<WorkExhibition/>}/>
          <Route path="exhibition_works" element={<WorkExhibitionWorks/>}/>
        </Route>


        <Route path="critics" element={<Critics/>}>
          <Route path="" element={<Critics/>}/>

        </Route>



        <Route path="contacts" element={<Contacts/>}/>
        
        <Route path="private" element={<Private authService={authService} />}>
          <Route path="" element={<Login authService={authService}/>}/>
          <Route path="loggedin" element={<PrivateRoute login={login}/>}>
              <Route path="" element={<LoginSuccess />}/>
              <Route path="work_upload" element={<WorkUpload databaseService={databaseService}/>}>
                <Route path="" element={<WorkUploadForm workImageUploadService={workImageUploadService}/>}/>
                <Route path="work_upload_done" element={<WorkUploadDone/>}/>
              </Route>

              <Route path="work_fix" element={<WorkFix databaseService={databaseService}/>}>
                <Route path="" element={<WorkFixFormOne/>}/>
                <Route path="work_fix_form_two" element={<WorkFixFormTwo workImageUploadService={workImageUploadService}/>}/>
                <Route path="work_fix_done" element={<WorkFixDone/>}/>

              </Route>

              <Route path="exhibition_upload" element={<ExhibitionUpload databaseService={databaseService}/>}>
                
                <Route path="" element={<ExhibitionUploadForm exhibitionImageUploadService={exhibitionImageUploadService}/>}/>
                <Route path="exhibition_upload_done" element={<ExhibitionUploadDone/>}/>

              </Route>
              

              
              <Route path="suggestion_box" element={<SuggestionBox/>}/>
          </Route>




        </Route>
        
      
      </Route>
    
      













    </Routes>


  </section> 


}
Modal.setAppElement('#root')

export default App;

