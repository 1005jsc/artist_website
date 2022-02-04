import { myApp } from './firebase';
import { signInWithRedirect, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";




class AuthService {

  auth = getAuth(myApp)
  googleProvider = new GoogleAuthProvider();

  AuthGooglePopupLogin = () => {
    signInWithPopup(this.auth, this.googleProvider)
    
  }


  AuthGoogleLogout = (callback) => {
    signOut(this.auth).then(callback).catch(()=> {
      console.log('logout failed')
    })
  }
  
  AuthUserCheck = (callback) => {
    onAuthStateChanged(this.auth, (user) => {
      callback(user)
    })
  }







} export default AuthService














