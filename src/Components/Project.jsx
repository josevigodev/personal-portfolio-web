import { useEffect, useState } from 'react';
import { SeeMoreProject } from './SeeMoreProject';
import { AnimatePresence } from 'motion/react';

export function Project({
  icon,
  title,
  technologies,
  shortDescription,
  description,
  shortTitle,
  demoLink,
  githubLink,
  id,
  img,
  alt,
  gallery,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className='group relative bg-background p-12 aspect-[4/5] md:aspect-square flex flex-col justify-between hover:bg-surface-container-high transition-all duration-500'
      >
        <div className='flex justify-between items-start'>
          <span className='font-headline text-4xl font-bold text-outline-variant group-hover:text-primary transition-colors'>
            {id.toString().padStart(2, '0')}
          </span>
          <span className='font-label text-xs tracking-widest uppercase py-1 px-3 border border-outline-variant'>
            {shortTitle}
          </span>
        </div>
        <div className='relative w-full h-1/2 overflow-hidden mb-8'>
          <img
            alt={alt}
            className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100'
            data-alt={shortDescription}
            src={img}
          />
        </div>
        <div>
          <h3 className='font-headline text-4xl font-bold uppercase tracking-tighter mb-4'>
            {title}
          </h3>
          <p className='font-body text-on-surface-variant line-clamp-2 mb-8'>
            {description}
          </p>
          <button className='flex items-center gap-2 text-primary font-headline font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity'>
            Inspect Case Study{' '}
            <span className='material-symbols-outlined text-sm'>
              open_in_new
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <SeeMoreProject
            title={title}
            description={description}
            technologies={technologies}
            demoLink={demoLink}
            githubLink={githubLink}
            img={img}
            icon={icon}
            alt={alt}
            gallery={gallery}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
