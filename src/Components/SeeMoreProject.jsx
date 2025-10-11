import { useRef } from 'react';
import { CloseIcon, LinkIcon } from './Icons';

export function SeeMoreProject({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
  img,
  lang,
  alt,
  setOpen,
  icon,
}) {
  const articleRef = useRef(null);
  const divRef = useRef(null);

  const handleClose = () => {
    setTimeout(() => setOpen(false), 1000);
    const articleClass = 'translate-y-full';
    const divClass = 'opacity-0';
    articleRef.current.classList.add(articleClass);
    divRef.current.classList.add(divClass);
  };
  return (
    <div
      ref={divRef}
      className={`flex flex-col w-full min-h-dvh fixed top-0 left-0 right-0 z-20 backdrop-blur-md transition-all duration-400`}
    >
      <div onClick={handleClose} className='flex-1'></div>
      <article
        ref={articleRef}
        className={`project max-w-maxw mx-auto bg-gray-200/50 dark:bg-black/50 px-main-container py-4 rounded-2xl transition-transform duration-400`}
      >
        <div className='flex items-center justify-between'>
          <img
            className='bg-linear-to-br from-50% from-white to-black dark:from-black dark:to-white flex items-center justify-center rounded-md size-9 p-1'
            src={icon}
            alt='Project logo'
          />
          <button onClick={handleClose}>
            <CloseIcon className='cursor-pointer invert-100 dark:invert-0' />
          </button>
        </div>
        <h2 className='mt-4 text-text-main-light dark:text-text-main-dark font-semibold text-2xl w-fit'>
          {title}
        </h2>
        <p className='mt-4 text-text-secundary-light dark:text-text-secundary-dark'>
          {lang ? description[0] : description[1]}
        </p>
        <div className='mt-4 flex items-center gap-4'>
          <a
            target='_blank'
            href={demoLink}
            className='bg-main-dark dark:bg-main-light p-1 px-2 text-text-main-dark dark:text-text-main-light flex items-center gap-1 w-fit rounded-md hover:scale-105 transition-transform duration-150'
          >
            Visit Website
            <LinkIcon className='size-4 text-text-main-dark dark:text-text-main-light' />
          </a>
          <a
            target='_blank'
            href={githubLink}
            className='bg-main-dark dark:bg-main-light p-1 px-2 text-text-main-dark dark:text-text-main-light flex items-center gap-1 w-fit rounded-md hover:scale-105 transition-transform duration-150'
          >
            GitHub Code
            <img
              className='size-6 dark:invert-100 invert-0'
              src='/personal-portfolio-web/svg/GitHub.svg'
              alt='GitHub'
            />
          </a>
        </div>
        <div className='mt-4 overflow-hidden rounded-md mx-auto max-w-[750px]'>
          <img
            src={img}
            alt={alt}
            className='aspect-video w-full object-cover'
          />
        </div>
        <footer className='mt-4'>
          <ul className='flex items-center flex-wrap gap-x-3 gap-y-2'>
            {technologies.map((tech) => (
              <li
                key={tech}
                className='flex items-center gap-2 rounded-md shadow-light dark:shadow-dark border-1 border-border-light dark:border-border-dark p-2 py-1'
              >
                <img
                  className='size-4'
                  src={`/personal-portfolio-web/svg/${tech}.svg`}
                  alt=''
                />
                <span className='text-text-main-light dark:text-text-main-dark'>
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </div>
  );
}
