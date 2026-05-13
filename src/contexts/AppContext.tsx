import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale } from '@/lib/i18n';

type Theme = 'light' | 'dark' | 'system';
type UserRole = 'admin' | 'user' | null;

interface User {
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AppContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  user: User | null;
  setUser: (u: User | null) => void;
  isAuthenticated: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const THEME_KEY = 'smarnet:theme';

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const v = window.localStorage.getItem(THEME_KEY);
  return v === 'dark' || v === 'light' || v === 'system' ? v : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  const resolved =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt-BR');
  const [theme, setThemeState] = useState<Theme>(() => readStoredTheme());
  const [user, setUser] = useState<User | null>(null);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      window.localStorage.setItem(THEME_KEY, t);
    } catch {
      // ignore
    }
  };

  // Apply theme to <html> whenever it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // React to OS-level theme changes when in 'system' mode
  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme('system');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  // Sync theme across browser tabs
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === THEME_KEY && e.newValue) {
        const v = e.newValue as Theme;
        if (v === 'light' || v === 'dark' || v === 'system') setThemeState(v);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  return (
    <AppContext.Provider value={{
      locale, setLocale,
      theme, setTheme,
      user, setUser,
      isAuthenticated: !!user,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
