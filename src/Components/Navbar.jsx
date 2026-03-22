import { useEffect, useState } from 'react';
import { CopyEmail } from './CopyEmail';
import { CVIcon, GithubIcon, LinkedinIcon } from './Icons';

export function Navbar() {
  const [activeSection, setActiveSection] = useState('experience');

  useEffect(() => {
    const sectionIds = ['experience', 'projects', 'about'];

    const getNearestSection = () => {
      const viewportMiddle = window.innerHeight * 0.4;

      let bestId = activeSection;
      let bestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportMiddle);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      });

      return bestId;
    };

    const onScroll = () => {
      const nearest = getNearestSection();
      setActiveSection(nearest);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [activeSection]);

  return (
    <nav className='fixed top-0 w-full z-50 bg-[#131314]/70 backdrop-blur-xl transition-all duration-300'>
      <div className='flex flex-col sm:flex-row justify-between items-center w-full px-12 py-6 max-w-[1920px] mx-auto'>
        <div className="text-2xl font-black tracking-tighter text-[#9cff93] font-['Space_Grotesk'] uppercase">
          JOSEVIGO.DEV
        </div>
        <div className='hidden md:flex items-center gap-12'>
          <a
            className={`font-['Space_Grotesk'] font-bold tracking-tighter uppercase nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            href='#experience'
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </a>
          <a
            className={`font-['Space_Grotesk'] font-bold tracking-tighter uppercase nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            href='#projects'
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </a>
          <a
            className={`font-['Space_Grotesk'] font-bold tracking-tighter uppercase nav-link ${activeSection === 'about' ? 'active' : ''}`}
            href='#about'
            onClick={() => setActiveSection('about')}
          >
            About
          </a>
        </div>
        {/* <a
          href='/personal-portfolio-web/assets/Jose Vigo CV English.pdf'
          className='relative bg-primary text-on-primary px-8 py-3 font-["Space_Grotesk"] font-bold uppercase tracking-widest hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(156,255,147,0.2)] transition-all active:scale-95 group'
          download='Jose Vigo CV English.pdf'
        >
          Resume
          <div className='absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity'></div>
          <div className='absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity'></div>
        </a> */}
        <ul className='flex items-center gap-2'>
          <li>
            <a
              className='block w-fit p-1.5 rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-dark transition-colors duration-150'
              href='https://linkedin.com/in/josevigodev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon className='hover:text-primary' />
            </a>
          </li>
          <li>
            <a
              className='block w-fit p-1.5 rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-dark transition-colors duration-150'
              href='https://github.com/josevigodev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon className='hover:text-primary' />
            </a>
          </li>
          {/* <li>
            <a
              className='block w-fit p-1.5 rounded-md hover:bg-hover-bg-light transition-colors duration-150'
              download
              href='/personal-portfolio-web/Jose Vigo CV English.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              <CVIcon className='hover:text-primary' />
            </a>
          </li> */}
          <CopyEmail />
        </ul>
      </div>
    </nav>
  );
}
