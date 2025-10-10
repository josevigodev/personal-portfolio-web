import { DotIcon } from './Icons';

export function Technologies({ lang }) {
  return (
    <section className='mt-15 px-main-container'>
      <div className=' max-w-maxw mx-auto'>
        <h2 className='flex items-center gap-1 text-lg text-text-main-light dark:text-text-main-dark mb-5'>
          <DotIcon className='size-3 flex items-center justify-center text-text-secundary-light dark:text-text-secundary-dark' />
          {lang ? 'Technologies' : 'Tecnologías'}
        </h2>
        <ul className='flex items-center flex-wrap gap-3'>
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
      </div>
    </section>
  );
}

const technologies = [
  'Next.js',
  'Vite',
  'React.js',
  'Typescript',
  'Javascript',
  'Tailwind CSS',
  'Cypress',
  'Firebase',
  'CSS',
  'HTML',
  'Git',
];
