
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "AI Hospitality Assistant",
      europe: "Europe",
      usa: "USA",
      caribbean: "Caribbean",
      asia: "Asia",
      getTiming: "Get Service Timing",
      recommended: "Recommended Timing",
      defaultTiming: "5-10 minutes",
      defaultPrompt: "Press button to get timing"
    }
  },
  nl: {
    translation: {
      title: "AI Hospitality Assistent",
      europe: "Europa",
      usa: "VS",
      caribbean: "Cariben",
      asia: "Azië",
      getTiming: "Haal Service Tijd",
      recommended: "Aanbevolen Tijd",
      defaultTiming: "5-10 minuten",
      defaultPrompt: "Druk op de knop voor tijd"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
