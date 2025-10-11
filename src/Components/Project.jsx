import { useState } from 'react';
import { LinkIcon } from './Icons';
import { SeeMoreProject } from './SeeMoreProject';

export function Project({
  icon,
  title,
  technologies,
  shortDescription,
  description,
  shortTitle,
  demoLink,
  githubLink,
  img,
  alt,
  lang,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className='relative pb-12 rounded-md shadow-light dark:shadow-dark border-1 border-border-light dark:border-border-dark p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img
              className='bg-linear-to-br from-50% from-white to-black dark:from-black dark:to-white flex items-center justify-center rounded-md size-7 p-1'
              src={icon}
              alt='Project logo'
            />
            <a
              target='_blank'
              title='Visit Website'
              href={demoLink}
              className='text-text-main-light dark:text-text-main-dark flex items-center gap-1 group border-b-3 border-dotted border-b-transparent hover:border-b-text-main-light dark:hover:border-b-text-main-dark transition-colors duration-150'
            >
              {shortTitle}
              <LinkIcon className='size-4 text-text-main-light dark:text-text-main-dark stroke-1 group-hover:stroke-2 group-hover:translate-x-0.5 transition-all duration-150' />
            </a>
          </div>
          <a target='_blank' href={githubLink} title='Code in GitHub'>
            <img
              className='size-6 invert-100 dark:invert-0'
              src='/personal-portfolio-web/svg/GitHub.svg'
              alt='GitHub'
            />
          </a>
        </div>
        <p className='text-text-secundary-light dark:text-text-secundary-dark mt-1'>
          {lang ? shortDescription[0] : shortDescription[1]}
        </p>
        <ul className='flex flex-wrap items-center gap-3 mt-3 relative'>
          {technologies.slice(0, 3).map((tech) => (
            <li
              key={tech}
              className='flex select-none items-center gap-2 rounded-md shadow-light dark:shadow-dark border-1 border-border-light dark:border-border-dark p-2 py-1'
            >
              <img
                className='size-4'
                src={`/personal-portfolio-web/svg/${tech}.svg`}
                alt=''
              />
              <span className='text-text-main-light text-nowrap dark:text-text-main-dark'>
                {tech}
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(true)}
          className='animated-background bg-linear-270 from-[#eee] via-[#ccc] to-[#eee] dark:from-[#222] dark:via-[#333] dark:to-[#222] absolute bottom-2 right-4 flex items-center gap-2 text-text-main-light p-1 px-2 rounded-md dark:text-text-main-dark underline underline-offset-2 cursor-pointer'
        >
          See more
        </button>
      </article>
      {open && (
        <SeeMoreProject
          title={title}
          description={description}
          technologies={technologies}
          demoLink={demoLink}
          githubLink={githubLink}
          img={img}
          lang={lang}
          icon={icon}
          alt={alt}
          setOpen={setOpen}
        />
      )}
    </>
  );
}
