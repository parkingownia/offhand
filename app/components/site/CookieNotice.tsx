"use client";

import { useState } from "react";

const COOKIE_CONSENT_KEY = "offhand-cookie-consent";

type ConsentMode = "all" | "essential";

function getStoredConsent(): ConsentMode | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "all" || value === "essential" ? value : null;
}

export default function CookieNotice() {
  const [consent, setConsent] = useState<ConsentMode | null>(() => {
    if (typeof document === "undefined") {
      return "essential";
    }

    return getStoredConsent();
  });

  const saveConsent = (mode: ConsentMode) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, mode);
    setConsent(mode);
  };

  if (consent !== null) {
    return null;
  }

  return (
    <aside
      className="cookie-notice"
      role="dialog"
      aria-live="polite"
      aria-label="Informacja o wykorzystywaniu ciasteczek"
    >
      <span className="cookie-notice__line cookie-notice__line--a" aria-hidden="true" />
      <span className="cookie-notice__line cookie-notice__line--b" aria-hidden="true" />

      <p className="cookie-notice__eyebrow">Ciasteczka</p>
      <h2 className="cookie-notice__title display-font">Prywatność i komfort korzystania</h2>
      <p className="cookie-notice__copy">
        Używamy ciasteczek, aby portal działał stabilnie i zapamiętywał Twoje ustawienia, na
        przykład wybrany motyw interfejsu. Możesz zaakceptować wszystko albo zostawić tylko
        niezbędne.
      </p>

      <div className="cookie-notice__actions">
        <button
          type="button"
          className="btn btn--primary cookie-notice__button"
          onClick={() => saveConsent("all")}
        >
          Akceptuję wszystkie
        </button>
        <button
          type="button"
          className="btn btn--secondary cookie-notice__button"
          onClick={() => saveConsent("essential")}
        >
          Tylko niezbędne
        </button>
      </div>
    </aside>
  );
}
