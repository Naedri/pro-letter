import { useState, useEffect, useRef, useCallback } from "react";
import {} from "@/components";
import type { CoverLetter, Locale } from "@/types";
import { useLanguage } from "@/hooks";
import { useTranslation } from "react-i18next";

export interface AppProps {
  data: CoverLetter;
}

export default function App({ data }: AppProps) {
  return (
    <div className="cover-letter-container">
      <main className="main-content">{/* TODO */}</main>
    </div>
  );
}
