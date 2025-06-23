import '../styles/ProjectsSection.css';
import { Project } from './Project';

export function ProjectsSection({ lang }) {
  return (
    <section className='width-padding-container full-height'>
      <h3 className='project-section-title'>
        {lang ? 'Something of my own work' : 'Algo de mi propio trabajo'}
        <small id='projects' className='atachment'></small>
      </h3>
      {projects.map((project) => (
        <Project key={project.id} {...project} lang={lang} />
      ))}
    </section>
  );
}

const projects = [
  {
    id: 0,
    img: '/personal-portfolio-web/images/modmania-project.png',
    alt: 'modmania project picture',
    title: 'ModMania Landing Page',
    description: [
      'ModMania is a modern and visually immersive landing page for a fictional company that specializes in console modding. Built with performance and interaction in mind, this project leverages smooth scroll animations, stylish visual elements.',
      'ModMania es una landing page moderna y visualmente inmersiva para una empresa ficticia especializada en la modificación de consolas. Construida con el rendimiento y la interacción en mente, este proyecto aprovecha animaciones suaves al hacer scroll y elementos visuales con estilo.',
    ],
    demoLink: 'https://josevigodev.github.io/modmania-landing-page/',
    githubLink: 'https://github.com/josevigodev/modmania-landing-page',
    tail: true,
  },
  {
    id: 1,
    img: '/personal-portfolio-web/images/job-project.png',
    alt: 'job hunting project picture',
    title: 'Job Hunting Organizer',
    description: [
      'A modern job tracking application that helps you organize your job search process using a clean and interactive Kanban board. You can add jobs, group them by status (Offer, Applied, Interview, Rejected), and move them between columns with drag & drop. All data is saved locally using localStorage, so nothing is lost between sessions.',
      'Aplicación de seguimiento de empleos moderna que te ayuda a organizar tu proceso de búsqueda laboral usando un tablero Kanban limpio e interactivo. Puedes agregar empleos, agruparlos por estado (Oferta, Aplicado, Entrevista, Rechazado) y moverlos entre columnas con arrastrar y soltar. Todos los datos se guardan localmente usando localStorage, por lo que no se pierde nada entre sesiones.',
    ],
    demoLink: 'https://josevigodev.github.io/job-hunting-organizer/',
    githubLink: 'https://github.com/josevigodev/job-hunting-organizer',
    type: true,
  },
  {
    id: 2,
    img: '/personal-portfolio-web/images/expense-project.png',
    alt: 'expenses tracker project picture',
    title: 'Smart Expenses Tracker',
    description: [
      'A professional, frontend-focused web application designed to help users efficiently track, categorize, analyze their expenses. This app provides intuitive UI components, dynamic charts, and responsive design to deliver a smooth experience across devices.',
      'Aplicación web profesional enfocada en frontend diseñada para ayudar a los usuarios a rastrear, categorizar y analizar sus gastos de forma eficiente. Esta app ofrece componentes de interfaz intuitivos, gráficos dinámicos y un diseño responsivo para brindar una experiencia fluida en todos los dispositivos.',
    ],
    demoLink: 'https://josevigodev.github.io/smart-expenses-tracker/',
    githubLink: 'https://github.com/josevigodev/smart-expenses-tracker',
  },
];
