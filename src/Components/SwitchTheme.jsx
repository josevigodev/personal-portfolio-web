import { useEffect, useState } from 'react';
import { BrightIcon, DarkIcon } from './Icons';

export function SwitchTheme({ lang }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      return;
    } else if (theme === 'light') {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, element]);

  return (
    <button
      title={lang ? 'Toggle theme' : 'Cambiar tema'}
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      className='cursor-pointer size-9 rounded-md p-0.5 hover:bg-hover-bg-light dark:hover:bg-hover-bg-dark transition-colors duration-150 overflow-hidden'
    >
      <span
        className={`flex flex-col items-center gap-4 w-fit ${
          theme === 'dark' ? '-translate-y-11' : ''
        } transition-transform duration-300 ease-out`}
      >
        <BrightIcon className='size-8 fill-text-main-light' />
        <DarkIcon className='size-6' />
      </span>
    </button>
  );
}
