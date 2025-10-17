import { DotIcon } from './Icons';

export function OpeningHeader({ lang }) {
  return (
    <section className='mt-5 px-main-container'>
      <div className='flex flex-col sm:flex-row gap-2 items-center justify-between max-w-maxw mx-auto '>
        <h2 className='flex items-center gap-1 text-lg text-text-main-light dark:text-text-main-dark'>
          <DotIcon className='size-3 flex items-center justify-center text-text-secundary-light dark:text-text-secundary-dark' />
          {lang ? 'Frontend Web Developer' : 'Desarrollador Frontend Web'}
        </h2>
        <small className='animated-background animated-background bg-linear-270 from-green-400 via-green-100 to-green-300 dark:from-green-800 dark:via-green-700 dark:to-green-900 bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-300 font-bold p-0.5 px-1.5 rounded-full flex items-center gap-1'>
          <DotIcon className='size-3 flex items-center justify-center' />
          {lang ? 'AVAILABLE FOR WORK' : 'DISPOLIBE PARA TRABAJAR'}
        </small>
      </div>
      <article className='mt-10 max-w-maxw mx-auto'>
        <p className='flex flex-col text-text-secundary-light dark:text-text-secundary-dark'>
          <strong className='text-2xl text-text-main-light dark:text-text-main-dark'>
            {lang ? "I'm Jose Vigo" : 'Soy Jose Vigo'}
          </strong>
          {lang ? content[0] : content[1]}
        </p>
      </article>
    </section>
  );
}

const content = [
  "Frontend web developer from Cuba. Motivated by building clear, functional, and well-designed interfaces. I'm looking to keep growing as a frontend developer, work in a team, and contribute value to meaningful projects.",
  'Desarrollador frontend web. Me motiva construir interfaces claras, funcionales y bien diseñadas. Busco seguir creciendo como desarrollador frontend, trabajar en equipo y participar en proyectos donde pueda aportar valor.',
];
