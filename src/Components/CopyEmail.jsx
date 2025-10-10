import { useState } from 'react';
import { DoneIcon, MailIcon } from './Icons';

export function CopyEmail({ lang }) {
  const [open, setOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('josevigodev@gmail.com');
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <>
      <button
        title={lang ? 'Copy email' : 'Copiar email'}
        className='block w-fit p-1.5 rounded-md hover:bg-hover-bg-light dark:hover:bg-hover-bg-dark transition-colors duration-150 cursor-pointer'
        onClick={handleCopy}
      >
        <MailIcon className='invert-100 dark:invert-0' />
      </button>
      {open && (
        <article className='copy absolute top-10 right-0 left-0 w-fit mx-auto bg-main-light dark:bg-main-dark flex items-center gap-2 p-3 rounded-md border-3 border-dotted border-border-light dark:border-border-dark shadow-light darl:shadow-dark'>
          <DoneIcon className='invert-100 dark:invert-0' />
          <div className='flex flex-col gap-1'>
            <p className='text-xl text-text-main-light dark:text-text-main-dark'>
              {lang ? 'Copied to clipboard' : 'Copiado al portapapeles'}
            </p>
            <small className='text-md text-text-secundary-light dark:text-text-secundary-dark'>
              josevigodev@gmail.com
            </small>
          </div>
        </article>
      )}
    </>
  );
}
