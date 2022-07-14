import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

class AuthService {
  constructor(firebaseApp) {
    this.firebaseAuth = getAuth(firebaseApp);
  }
  login(providerName) {
    const authProvider =
      providerName === 'Google'
        ? new GoogleAuthProvider()
        : new GithubAuthProvider();
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(this.firebaseAuth, (user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
