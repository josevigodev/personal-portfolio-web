import { Project } from './Project';

export function ProjectsSection() {
  return (
    <section className='py-32 px-3 bg-surface-container-low' id='projects'>
      <div className='max-w-[1920px] mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-24 gap-8'>
          <div>
            <span className='font-label text-xs tracking-[0.3em] uppercase text-primary mb-4 block'>
              Archive_002
            </span>
            <h2 className='font-headline text-6xl md:text-8xl font-black tracking-tighter uppercase'>
              Selected <br />
              Projects
            </h2>
          </div>
          <p className='max-w-md font-body text-on-surface-variant text-lg'>
            Showcasing frontend projects designed for clarity, impact, and
            seamless user experiences.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/15'>
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    id: 0,
    img: '/personal-portfolio-web/images/buy-home.webp',
    gallery: [
      '/personal-portfolio-web/images/buy-home.webp',
      '/personal-portfolio-web/images/buy-2.webp',
      '/personal-portfolio-web/images/buy-3.webp',
    ],
    alt: 'buy-buy project picture',
    title: 'Buy-Buy e-commerce Web App',
    shortTitle: 'buy-buy',
    shortDescription: 'A modern e-commerce web application',
    description:
      'Buy-Buy is a modern e-commerce web application built with Next.js, React, Tailwind CSS, and TypeScript. It provides a smooth shopping experience with features such as product browsing, cart management, wishlist, and authentication.',
    demoLink: 'https://buy-buy-e-commerce-project.vercel.app/',
    githubLink: 'https://github.com/josevigodev/buy-buy-e-commerce-project',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Typescript',
      'React.js',
      'Cypress',
      'Firebase',
      'HTML',
      'Git',
    ],
  },
  {
    id: 1,
    img: '/personal-portfolio-web/images/modmania-home.webp',
    gallery: [
      '/personal-portfolio-web/images/modmania-home.webp',
      '/personal-portfolio-web/images/modmania-2.webp',
      '/personal-portfolio-web/images/modmania-3.webp',
    ],
    alt: 'modmania project picture',
    title: 'ModMania Landing Page',
    shortTitle: 'modmania',
    shortDescription: 'A modern and visually immersive landing page',
    description:
      'ModMania is a modern and visually immersive landing page for a fictional company that specializes in console modding. Built with performance and interaction in mind, this project leverages smooth scroll animations, stylish visual elements.',
    demoLink: 'https://josevigodev.github.io/modmania-landing-page/',
    githubLink: 'https://github.com/josevigodev/modmania-landing-page',
    technologies: [
      'Vite',
      'React.js',
      'Tailwind CSS',
      'Javascript',
      'HTML',
      'Git',
    ],
  },
];
