import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return <DarkModeContext.Provider value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}>{children}</DarkModeContext.Provider>;
}

/**
 * Context는 우산 -> 우산은 필요한 곳에 씌워야한다.
 * 필요한 부분만 Provider로 감싸준다.
 * 어플리케이션 전체에 씌우지말고 필요한 곳에 씌우자
 */