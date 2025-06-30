
import { useState } from "react";
import { useTranslation } from "react-i18next";
import './i18n';

function App() {
  const [region, setRegion] = useState("USA");
  const [timing, setTiming] = useState("");
  const { t } = useTranslation();

  const getServiceTiming = () => {
    fetch(`/api/service-timing?region=${region}`)
      .then((res) => res.json())
      .then((data) => setTiming(data.timing || t('defaultTiming')))
      .catch(() => setTiming(t('defaultTiming')));
  };

  return (
    <div className="App">
      <h1>{t('title')}</h1>
      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="Europe">{t('europe')}</option>
        <option value="USA">{t('usa')}</option>
        <option value="Caribbean">{t('caribbean')}</option>
        <option value="Asia">{t('asia')}</option>
      </select>
      <button onClick={getServiceTiming}>{t('getTiming')}</button>
      <h2>{t('recommended')}: {timing || t('defaultPrompt')}</h2>
    </div>
  );
}

export default App;
