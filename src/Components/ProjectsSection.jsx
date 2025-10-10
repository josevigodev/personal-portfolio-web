import { DotIcon } from './Icons';
import { Project } from './Project';

export function ProjectsSection({ lang }) {
  return (
    <section className='mt-15 px-main-container'>
      <div className=' max-w-maxw mx-auto'>
        <h2 className='flex items-center gap-1 text-lg text-text-main-light dark:text-text-main-dark mb-5'>
          <DotIcon className='size-3 flex items-center justify-center text-text-secundary-light dark:text-text-secundary-dark' />
          {lang ? 'Projects' : 'Proyectos'}
        </h2>
        <ul className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          {projects.map((project) => (
            <li key={project.id}>
              <Project key={project.id} {...project} lang={lang} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const projects = [
  {
    id: 0,
    icon: '/personal-portfolio-web/images/cart.png',
    img: '/personal-portfolio-web/images/buy-buy-project.png',
    alt: 'buy-buy project picture',
    title: 'Buy-Buy e-commerce Web App',
    shortTitle: 'buy-buy',
    shortDescription: [
      'A modern e-commerce web application',
      'Una moderna aplicación web de comercio electrónico',
    ],
    description: [
      'Buy-Buy is a modern e-commerce web application built with Next.js, React, Tailwind CSS, and TypeScript. It provides a smooth shopping experience with features such as product browsing, cart management, wishlist, and authentication.',
      'Buy-Buy es una moderna aplicación web de comercio electrónico creada con Next.js, React, Tailwind CSS y TypeScript. Proporciona una experiencia de compra fluida con funciones como navegación de productos, gestión de carritos, lista de deseos y autenticación.',
    ],
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
    id: 0,
    icon: '/personal-portfolio-web/images/game-controller.png',
    img: '/personal-portfolio-web/images/modmania-project.png',
    alt: 'modmania project picture',
    title: 'ModMania Landing Page',
    shortTitle: 'modmania',
    shortDescription: [
      'A modern and visually immersive landing page',
      'una landing page moderna y visualmente inmersiva',
    ],
    description: [
      'ModMania is a modern and visually immersive landing page for a fictional company that specializes in console modding. Built with performance and interaction in mind, this project leverages smooth scroll animations, stylish visual elements.',
      'ModMania es una landing page moderna y visualmente inmersiva para una empresa ficticia especializada en la modificación de consolas. Construida con el rendimiento y la interacción en mente, este proyecto aprovecha animaciones suaves al hacer scroll y elementos visuales con estilo.',
    ],
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
  {
    id: 1,
    icon: '/personal-portfolio-web/images/case.png',
    img: '/personal-portfolio-web/images/job-project.png',
    alt: 'job hunting project picture',
    title: 'Job Hunting Organizer',
    shortTitle: 'job',
    shortDescription: [
      'A modern job tracking application',
      'Aplicación de seguimiento de empleos moderna',
    ],
    description: [
      'A modern job tracking application that helps you organize your job search process using a clean and interactive Kanban board. You can add jobs, group them by status (Offer, Applied, Interview, Rejected), and move them between columns with drag & drop. All data is saved locally using localStorage, so nothing is lost between sessions.',
      'Aplicación de seguimiento de empleos moderna que te ayuda a organizar tu proceso de búsqueda laboral usando un tablero Kanban limpio e interactivo. Puedes agregar empleos, agruparlos por estado (Oferta, Aplicado, Entrevista, Rechazado) y moverlos entre columnas con arrastrar y soltar. Todos los datos se guardan localmente usando localStorage, por lo que no se pierde nada entre sesiones.',
    ],
    demoLink: 'https://josevigodev.github.io/job-hunting-organizer/',
    githubLink: 'https://github.com/josevigodev/job-hunting-organizer',
    technologies: [
      'Vite',
      'React.js',
      'Cypress',
      'Javascript',
      'CSS',
      'HTML',
      'Git',
    ],
  },
  {
    id: 2,
    icon: '/personal-portfolio-web/images/dollar.png',
    img: '/personal-portfolio-web/images/expense-project.png',
    alt: 'expenses tracker project picture',
    title: 'Smart Expenses Tracker',
    shortTitle: 'expenses',
    shortDescription: [
      'Help users efficiently track their expenses',
      'Ayudar a los usuarios a rastrear, categorizar y analizar sus gastos',
    ],
    description: [
      'A professional, frontend-focused web application designed to help users efficiently track, categorize, analyze their expenses. This app provides intuitive UI components, dynamic charts, and responsive design to deliver a smooth experience across devices.',
      'Aplicación web profesional enfocada en frontend diseñada para ayudar a los usuarios a rastrear, categorizar y analizar sus gastos de forma eficiente. Esta app ofrece componentes de interfaz intuitivos, gráficos dinámicos y un diseño responsivo para brindar una experiencia fluida en todos los dispositivos.',
    ],
    demoLink: 'https://josevigodev.github.io/smart-expenses-tracker/',
    githubLink: 'https://github.com/josevigodev/smart-expenses-tracker',
    technologies: ['Vite', 'React.js', 'Javascript', 'CSS', 'HTML', 'Git'],
  },
];
