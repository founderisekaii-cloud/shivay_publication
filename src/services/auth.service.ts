import { auth } from './firebase.client';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';

export class AuthService {
  /**
   * Sign up a new user
   */
  static async signUp(email: string, password: string, metadata?: any) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    if (metadata && metadata.full_name) {
      await updateProfile(user, { displayName: metadata.full_name });
    }
    
    return { user };
  }

  /**
   * Sign in an existing user
   */
  static async signIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user };
  }

  /**
   * Sign out the current user
   */
  static async signOut() {
    await signOut(auth);
  }

  /**
   * Get the current user session
   */
  static async getSession() {
    const user = await this.getUser();
    return user ? { user } : null;
  }

  /**
   * Get the current user
   */
  static getUser(): Promise<any> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe(); // ensure it only fires once
        if (user) {
          // Map to Supabase-like object for compatibility
          resolve({ id: user.uid, email: user.email, user_metadata: { full_name: user.displayName } });
        } else {
          resolve(null);
        }
      });
    });
  }
}
