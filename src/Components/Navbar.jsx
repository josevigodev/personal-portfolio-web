import { CopyEmail } from './CopyEmail';
import { CVIcon, Language, LinkedinIcon } from './Icons';
import { SwitchTheme } from './SwitchTheme';

export function Navbar({ setLang, lang }) {
  return (
    <header className='sticky top-0 bg-main-opacity-light dark:bg-main-opacity-dark backdrop-blur-xs px-main-container z-10'>
      <div className='flex flex-col sm:flex-row justify-between items-center py-2 max-w-maxw mx-auto '>
        <a href='/' className='text-text-main-light dark:text-text-main-dark'>
          josevigo.dev
        </a>
        <nav className='flex items-center gap-2'>
          <ul className='flex items-center gap-2'>
            <li>
              <a
                className='block w-fit p-1.5 rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-dark transition-colors duration-150'
                href='https://linkedin.com/in/josevigodev'
                title={lang ? 'LinkedIn account' : 'Cuenta de LinkedIn'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedinIcon className='invert-100 dark:invert-0' />
              </a>
            </li>
            <li>
              <a
                className='block w-fit p-1.5 rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-dark transition-colors duration-150'
                href='https://github.com/josevigodev'
                title={lang ? 'GitHub account' : 'Cuenta de GitHub'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  className='size-6 invert-100 dark:invert-0'
                  src='/personal-portfolio-web/svg/GitHub.svg'
                  alt='GitHub'
                />
              </a>
            </li>
            <li>
              <a
                className='block w-fit p-1.5 rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-dark transition-colors duration-150'
                download
                href='/personal-portfolio-web/Jose Vigo CV English.docx'
                title={lang ? 'Download CV' : 'Descargar CV'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <CVIcon className='invert-100 dark:invert-0' />
              </a>
            </li>
          </ul>
          <div className='flex items-center gap-2'>
            <CopyEmail lang={lang} />
            <button
              title={lang ? 'Change language' : 'Cambiar idioma'}
              className='cursor-pointer w-fit p-1.5 rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-dark transition-colors duration-150'
              onClick={setLang}
            >
              <Language className='invert-100 dark:invert-0' />
            </button>
            <SwitchTheme lang={lang} />
          </div>
        </nav>
      </div>
    </header>
  );
}
