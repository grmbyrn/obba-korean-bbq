"use client";
import { ReactNode } from "react";
import { useParams } from "next/navigation";
import en from "../locales/en.json";
import es from "../locales/es.json";


type Translations = typeof en;
const translations: Record<string, Translations> = { en, es };

export function useLocale() {
  // Get locale from params in [locale] route
  const params = useParams();
  const locale = typeof params?.locale === "string" ? params.locale : Array.isArray(params?.locale) ? params?.locale[0] : undefined;
  return ["en", "es"].includes(locale ?? "") ? locale : "en";
}

export function useTranslations() {
  const locale = useLocale();
  if (locale === "es") return translations.es;
  return translations.en;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // In a real app, you might set up context here
  return children;
}
