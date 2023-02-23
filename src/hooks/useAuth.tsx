import {
  useMemo,
  useState,
  useContext,
  createContext,
  useEffect,
} from 'react';

import {
  User,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from 'next/router';
import { auth } from '@/db/firebase';

interface IAuth {
  loading: boolean;
  user: User | null;
  error: string | null;
  logout: () => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuth>({
  user: null,
  error: null,
  loading: false,
  signIn: async () => { },
  signUp: async () => { },
  logout: async () => { },
})

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {

  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => onAuthStateChanged(auth, (auth) => {
    if (user) {
      // logged in
      setUser(user);
      setLoading(false);
    } else {
      // not logged in
      setUser(null);
      setLoading(true);
      router.push('/login');
    }
    setInitialLoading(false);
  }), [auth]);

  async function signUp(email: string, password: string) {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      setUser(userCredentials.user);

      router.push('/');

      setLoading(false);
    }).catch(error => {
      alert(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }

  async function signIn(email: string, password: string) {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      setUser(userCredentials.user);

      router.push('/');

      setLoading(false);
    }).catch(error => {
      alert(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }

  async function logout() {
    setLoading(true);

    signOut(auth).then(() => {
      setUser(null);
    }).catch(error => {
      alert(error.message);
    }).finally(() => {
      setLoading(false);
    })
  }

  const memoedValue = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      loading,
      logout,
      error,
    }), [user, loading]);

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}