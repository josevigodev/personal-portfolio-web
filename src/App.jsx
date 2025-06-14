import { useState } from 'react';
import { OpeningHeader } from './Components/OpeningHeader';
import { ProjectsSection } from './Components/ProjectsSection';
import { MainSkills } from './Components/MainSkills';
import { Navbar } from './Components/Navbar';
import background from '/background.webp';
import { Footer } from './Components/Footer';

export default function App() {
  const [lang, setLang] = useState(true);

  return (
    <>
      <img id='background' src={background} alt='background' />
      <button className='language-button' onClick={() => setLang(!lang)}>
        {lang ? 'En' : 'Es'}
      </button>
      <Navbar />
      <div className='blur'>
        <OpeningHeader lang={lang} />
        <MainSkills lang={lang} />
        <ProjectsSection lang={lang} />
        <Footer />
      </div>
    </>
  );
}
