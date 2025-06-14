import {
  CSSIcon,
  GithubIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  ReactIcon,
  TailwindIcon,
} from './Icons';

export function Skill({ skill }) {
  return (
    <li>
      <span className='skill-icon'>
        {skill === 'HTML5' ? (
          <HTMLIcon />
        ) : skill === 'CSS3' ? (
          <CSSIcon />
        ) : skill === 'TailwindCSS' ? (
          <TailwindIcon />
        ) : skill === 'JavaScript' ? (
          <JavascriptIcon />
        ) : skill === 'React' ? (
          <ReactIcon />
        ) : skill === 'Git' ? (
          <GitIcon />
        ) : skill === 'Github' ? (
          <GithubIcon />
        ) : null}
      </span>
    </li>
  );
}
