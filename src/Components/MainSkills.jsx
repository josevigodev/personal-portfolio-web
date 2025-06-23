import '../styles/MainSkills.css';
import { Skill } from './Skill';
import developer from '/images/developer.png';

export function MainSkills({ lang }) {
  return (
    <section id='about' className='skills-section'>
      <h2>{lang ? 'A little bit about me' : 'Un poco sobre mí'}</h2>
      <article className='skills-wrapper'>
        <p>{lang ? content[0] : content[1]}</p>
        <div className='img-skills-wrapper'>
          <img className='dev-img' src={developer} alt='developer working' />
          <ul className='flex-row-container skills-container'>
            {skills.map((skill) => (
              <Skill key={skill.id} skill={skill.skill} />
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

const skills = [
  {
    id: 0,
    skill: 'HTML5',
  },
  {
    id: 1,
    skill: 'CSS3',
  },
  {
    id: 2,
    skill: 'JavaScript',
  },
  {
    id: 3,
    skill: 'React',
  },
  {
    id: 4,
    skill: 'TailwindCSS',
  },
  {
    id: 5,
    skill: 'Git',
  },
  {
    id: 6,
    skill: 'Github',
  },
  {
    id: 7,
    skill: 'Typescript',
  },
];

const content = [
  "I'm motivated by building clear, functional, and well-designed interfaces. I'm looking to keep growing as a frontend developer, work in a team, and contribute value to meaningful projects. I also have English skills that allow me to collaborate comfortably in technical environments.",
  'Me motiva construir interfaces claras, funcionales y bien diseñadas. Busco seguir creciendo como desarrollador frontend, trabajar en equipo y participar en proyectos donde pueda aportar valor. Además, tengo conocimientos de inglés, lo que me permite colaborar en entornos técnicos sin problema.',
];
