import React, { Component, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from "./app.module.css"
import ContentBox from './components/main/large/content_box/content_box';
import BackgroundImage from './components/front_door/background_image/background_image';
import NabvarLeft from './components/main/large/navbar_left/navbar_left';
import Main from './components/main/large/main/main';
import Biography from './components/main/medium/biography_folder/biography/biography';
import Works from './components/main/medium/works_folder/works/works';
import Exhibition from './components/main/medium/exhibitions_folder/exhibition/exhibition';
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
import PrivateRoute2 from './components/utility/private_route2/private_route2';
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



type AppProps = {
  authService : AuthService
}


const App = ({authService}:AppProps) =>{

  const [login, setLogin] = useState<boolean>(false)

  useEffect(() => {
    authService.AuthUserCheck((result:any) => {
      if(result){
        
        setLogin(true)
      }else{
        setLogin(false)
      }
    })
    
  
}, [login])
  



















const handleLogin = (password:string|number) => {
  
  if(password==process.env.REACT_APP_ART_WEBSITE_PRIVATE_ADMIN_PASSWORD){
    authService.AuthGooglePopupLogin()
    setLogin(true)
    return true
  }else{
    return false
  }
}



const hi = 'hi'





  return <section className={styles.myApp}>
      
      
    <Routes>

    
      <Route index element={<BackgroundImage/>}/>

      <Route path="/main" element={<Main login={login} handleLogin={handleLogin} />} >

        <Route path='' element={<Biography/>}>
          <Route path="" element={<BiographyWords/>}/>
        </Route>
        
        <Route path='biography' element={<Biography/>}>
          <Route path="" element={<BiographyWords/>}/>
          <Route path="note" element={<BiographyWords/>}/>
          <Route path="bio" element={<BiographyBio/>}/>
        </Route>
          
        
        <Route path="works" element={<Works/>}>
          <Route path="" element={<WorkYear/>}/>
          <Route path="year" element={<WorkYear/>}/>
          <Route path="larger" element={<WorkSize/>}/>
          <Route path="smaller" element={<WorkSize/>}/>
          <Route path="exhibition" element={<WorkExhibition/>}/>
          <Route path="exhibition_works" element={<WorkExhibitionWorks/>}/>
        </Route>

        
        <Route path="exhibitions" element={<Exhibitions/>}>
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
              <Route path="work_upload" element={<WorkUpload/>}>
                <Route path="" element={<WorkUploadForm />}/>
                <Route path="work_upload_done" element={<WorkUploadDone/>}/>
              </Route>

              <Route path="work_fix" element={<WorkFix/>}>
                <Route path="" element={<WorkFixFormOne/>}/>
                <Route path="work_fix_form_two" element={<WorkFixFormTwo/>}/>
                <Route path="work_fix_done" element={<WorkFixDone/>}/>

              </Route>

              <Route path="exhibition_upload" element={<ExhibitionUpload/>}>
                
                <Route path="" element={<ExhibitionUploadForm/>}/>
                <Route path="exhibition_upload_done" element={<ExhibitionUploadDone/>}/>

              </Route>
              

              
              <Route path="suggestion_box" element={<SuggestionBox/>}/>
          </Route>




        </Route>
        
      
      </Route>
    
      













    </Routes>


  </section> 


}

export default App;

