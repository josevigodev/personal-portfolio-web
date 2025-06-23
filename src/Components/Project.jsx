import {
  CSSIcon,
  GithubIcon,
  GitIcon,
  HTMLIcon,
  JavascriptIcon,
  LinkIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from './Icons';

export function Project({
  img,
  alt,
  title,
  description,
  demoLink,
  githubLink,
  tail,
  lang,
  type,
}) {
  return (
    <article className='project-wrapper'>
      <div className='project-img-container'>
        <div className='gradient'></div>
        <img src={img} alt={alt} />
        <ul>
          <li>
            <HTMLIcon />
          </li>
          <li>{tail ? <TailwindIcon /> : <CSSIcon />}</li>
          <li>{type ? <TypescriptIcon /> : <JavascriptIcon />}</li>
          <li>
            <ReactIcon />
          </li>
          <li>
            <GitIcon />
          </li>
        </ul>
      </div>
      <div className='project-info-container'>
        <h4>{title}</h4>
        <p>{lang ? description[0] : description[1]}</p>
        <div className='flex-row-container social-container'>
          <a
            className='flex-row-container social-link'
            href={demoLink}
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <span>
              <LinkIcon />
            </span>
            <span>Demo</span>
          </a>
          <a
            className='flex-row-container social-link'
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <span>
              <GithubIcon />
            </span>
            <span>Github</span>
          </a>
        </div>
      </div>
    </article>
  );
}
