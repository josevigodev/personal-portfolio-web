import { useEffect, useState } from 'react';
import { OpeningHeader } from './Components/OpeningHeader';
import { ProjectsSection } from './Components/ProjectsSection';
import { Navbar } from './Components/Navbar';
import { Technologies } from './Components/Technologies';
import { AnimatePresence, motion } from 'motion/react';
import { Loader } from './Components/Loader';
import Experience from './Components/Experience';

const myExperienceDataEnglish = [
  {
    id: '1',
    role: 'Intern Frontend Web Developer',
    company: 'PitchMatter',
    location: 'Dubai, United Arab Emirates',
    startDate: 'Nov 2025',
    endDate: 'Present',
    description: [
      'Fixed UI bugs and aligned the frontend with Figma designs using React, Tailwind CSS, and TypeScript, improving visual consistency, responsiveness, and overall user experience.',
      'Built reusable and scalable React components, leveraging Redux Toolkit for state management to reduce duplication and accelerate future feature development.',
      'Improved accessibility using semantic HTML, ARIA attributes, and usability best practices, contributing to a more inclusive and accessible interface.',
      'Integrated frontend components with backend APIs, using TypeScript and Zod for data validation and safer data handling, ensuring smooth and predictable UI behavior.',
      'Collaborated with the team using Git, GitHub, pull requests and code reviews, actively communicating ideas, and contributing to shared frontend decisions.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
  },
];

const myExperienceDataSpanish = [
  {
    id: '1',
    role: 'Intern Frontend Web Developer',
    company: 'PitchMatter',
    location: 'Dubai, United Arab Emirates',
    startDate: 'Nov 2025',
    endDate: 'Presente',
    description: [
      'Corregí bugs de UI y alineé el frontend con los diseños de Figma utilizando React, Tailwind CSS y TypeScript, mejorando la consistencia visual, la adaptabilidad y la experiencia general del usuario.',
      'Construí componentes reutilizables y escalables en React, aprovechando Redux Toolkit para la gestión de estado, reduciendo duplicación y acelerando el desarrollo de futuras funcionalidades.',
      'Mejoré la accesibilidad utilizando HTML semántico, atributos ARIA y buenas prácticas de usabilidad, contribuyendo a una interfaz más inclusiva y accesible.',
      'Integré componentes frontend con APIs de backend, utilizando TypeScript y Zod para la validación de datos y un manejo más seguro de la información, asegurando un comportamiento de la UI fluido y predecible.',
      'Colaboré con el equipo utilizando Git, GitHub, pull requests y code reviews, comunicando activamente ideas y contribuyendo a decisiones compartidas del frontend.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
  },
];

export default function App() {
  const [lang, setLang] = useState(true);
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key='loader'
          initial={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.6 }}
        >
          <Loader lang={lang} />
        </motion.div>
      ) : (
        <motion.div
          key='content'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar lang={lang} setLang={() => setLang(!lang)} />
          <main>
            <OpeningHeader lang={lang} />
            <Experience lang={lang} experiences={lang ? myExperienceDataEnglish : myExperienceDataSpanish} />
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
