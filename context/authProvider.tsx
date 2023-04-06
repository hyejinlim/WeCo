import { getAuth, User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
export const AuthContext = createContext<User | null>(null);
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  /**
   * useEffect
   */
  useEffect(() => {
    return getAuth().onIdTokenChanged((user) => {
      if (!user) {
        setUser(null);
        return;
      }
      setUser(user);
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
