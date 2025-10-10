import { useState } from 'react';
import { OpeningHeader } from './Components/OpeningHeader';
import { ProjectsSection } from './Components/ProjectsSection';
import { Navbar } from './Components/Navbar';
import { Technologies } from './Components/Technologies';

export default function App() {
  const [lang, setLang] = useState(true);

  return (
    <>
      <Navbar lang={lang} setLang={() => setLang(!lang)} />
      <main className='animate-page'>
        <OpeningHeader lang={lang} />
        <ProjectsSection lang={lang} />
        <Technologies lang={lang} />
      </main>
      <footer className='max-w-maxw mt-10 mx-auto border-t-1 border-border-light dark:border-border-dark'>
        <section className='flex items-center justify-between px-main-container py-8'>
          <h2 className='text-4xl text-text-main-light dark:text-text-main-dark'>
            Jose Vigo.
          </h2>
          <h2 className='text-text-secundary-light dark:text-text-secundary-dark'>
            josevigodev@gmail.com
          </h2>
        </section>
      </footer>
    </>
  );
}
