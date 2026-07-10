import { createContext, useContext, useEffect, useState } from 'react';
import {
  getToken,
  setToken,
  clearToken,
  getStoredUser,
  setStoredUser,
} from '../utils/storage.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    const stored = getStoredUser();
    if (token && stored) setUser(stored);
    setLoading(false);
  }, []);

  // Static/mock login — accept any email+password of correct shape.
  const login = async ({ email }) => {
    await new Promise((r) => setTimeout(r, 500));
    const fakeUser = {
      id: 'user-1',
      email,
      full_name: email.split('@')[0].replace(/\./g, ' '),
    };
    setToken('mock-jwt-token');
    setStoredUser(fakeUser);
    setUser(fakeUser);
    return fakeUser;
  };

  const register = async ({ email, full_name }) => {
    await new Promise((r) => setTimeout(r, 500));
    const fakeUser = { id: 'user-1', email, full_name };
    setToken('mock-jwt-token');
    setStoredUser(fakeUser);
    setUser(fakeUser);
    return fakeUser;
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthenticated: !!user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
