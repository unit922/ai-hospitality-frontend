import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "AI Hospitality Assistant",
      region: "Region",
      getTiming: "Get Service Timing",
      recommendedTiming: "Recommended Timing",
      minutesBetweenDrinks: "minutes between drink orders"
    }
  },
  es: {
    translation: {
      title: "Asistente de Hospitalidad AI",
      region: "Región",
      getTiming: "Obtener Tiempo de Servicio",
      recommendedTiming: "Tiempo Recomendado",
      minutesBetweenDrinks: "minutos entre pedidos de bebidas"
    }
  },
  nl: {
    translation: {
      title: "AI Gastvrijheidsassistent",
      region: "Regio",
      getTiming: "Haal Service Timing op",
      recommendedTiming: "Aanbevolen Tijd",
      minutesBetweenDrinks: "minuten tussen drankbestellingen"
    }
  },
  pap: {
    translation: {
      title: "Asistente di AI pa Hospitalidat",
      region: "Region",
      getTiming: "Haña Tempo di Servicio",
      recommendedTiming: "Tempo Recomendá",
      minutesBetweenDrinks: "minutunan entre orden di bebida"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
