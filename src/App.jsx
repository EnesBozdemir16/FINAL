import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [step, setStep] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      // Form sayfasında sadece gönder butonuna veya form dışına tıklayınca ilerlesin
      if (step === 4) {
        const tag = e.target.tagName;
        const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'LABEL';
        const isSubmit = tag === 'BUTTON' && e.target.type === 'submit';
        if (!isSubmit && isInput) return;
      }
      setStep((s) => (s + 1) % 6);
      setFadeKey((k) => k + 1);
    };

    window.addEventListener('click', handler);
    window.addEventListener('contextmenu', handler);
    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('click', handler);
      window.removeEventListener('contextmenu', handler);
      window.removeEventListener('keydown', handler);
    };
  }, [step]);

  const renderContent = () => {
    switch (step) {
      case 0:
        return <h1>Ben kimim?</h1>;
      case 1:
        return (
          <p className="paragraph">
            Benim İsmi Enes Bozdemir. 
            Balıkesir Üniversitesi Bilgisayar Mühendisliği Fakültesi'de 3. Sınıf Ögrencisiyim.
            Frontend konusunda ilerliyorum. Daha önce 1 aylık bir staj deneyimim oldu.


          </p>
        );
      case 2:
        return <h1>Neler yapabilirim?</h1>;
      case 3:
        return (
          <p className="paragraph">
            PHP, JavaScript, HTML, CSS, JAVA, C# ve Python konularında deneyimim var.
            
          </p>
        );
      case 4:
        return (
          <div>
            <h2>İletişim</h2>
            <form className="contact-form">
              <label>
                Ad Soyad
                <input type="text" name="name" />
              </label>
              <label>
                Mail
                <input type="email" name="email" />
              </label>
              <label>
                İçerik
                <textarea name="message" rows={4} />
              </label>
              <button type="submit">Gönder</button>
            </form>
          </div>
        );
      case 5:
        return (
          <div>
            <h2>GitHub Hesabım</h2>
            <a href="https://github.com/EnesBozdemir16" target="_blank" rel="noopener noreferrer">
              https://github.com/EnesBozdemir16
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div key={fadeKey} className="app-container fade">
      {renderContent()}
    </div>
  );
}