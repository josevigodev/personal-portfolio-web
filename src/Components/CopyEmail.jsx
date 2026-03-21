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
        <MailIcon className='hover:text-primary' />
      </button>
      {open && (
        <article className='bg-surface-container-low copy absolute top-10 right-0 left-0 w-fit mx-auto flex items-center gap-2 p-3 rounded-md border-3 border-dotted border-primary shadow-lg shadow-primary/20'>
          <DoneIcon className='text-primary' />
          <div className='flex flex-col gap-1'>
            <p className='text-xl text-primary'>Copied to clipboard</p>
            <small className='text-md text-primary/80'>
              josevigodev@gmail.com
            </small>
          </div>
        </article>
      )}
    </>
  );
}
