import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp);
  }
  login(providerName) {
    console.log('providerName : ' + providerName);
    const authProvider =
      providerName === 'Google'
        ? new GoogleAuthProvider()
        : new GithubAuthProvider();
    signInWithPopup(this.auth, authProvider);
  }
}

export default AuthService;
