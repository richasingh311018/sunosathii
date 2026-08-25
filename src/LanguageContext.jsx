import React, { createContext, useContext, useState, useEffect } from "react";
import { getL } from "./i18n";

const LanguageContext = createContext({ lang: "en", setLang: () => {}, L: getL("en") });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("lang") || "en"; } catch (e) { return "en"; }
  });

  useEffect(() => {
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }, [lang]);

  const value = { lang, setLang, L: getL(lang) };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageContext;
