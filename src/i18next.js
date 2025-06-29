import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "AI Hospitality Assistant",
      region: "Region",
      getTiming: "Get Service Timing",
      recommendedTiming: "Recommended Timing"
    }
  },
  es: {
    translation: {
      title: "Asistente de Hospitalidad AI",
      region: "Región",
      getTiming: "Obtener Tiempo de Servicio",
      recommendedTiming: "Tiempo Recomendado"
    }
  },
  nl: {
    translation: {
      title: "AI Gastvrijheidsassistent",
      region: "Regio",
      getTiming: "Haal Service Timing op",
      recommendedTiming: "Aanbevolen Tijd"
    }
  },
  pap: {
    translation: {
      title: "Asistente di AI pa Hospitalidat",
      region: "Region",
      getTiming: "Haña Tempo di Servicio",
      recommendedTiming: "Tempo Recomendá"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
