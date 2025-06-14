import { ResponsiveImage } from './ResponsiveImage';
import '../styles/OpeningHeader.css';
import { GithubIcon, LinkedinIcon } from './Icons';
import { EmailContact } from './EmailContact';

export function OpeningHeader({ lang }) {
  return (
    <header
      id='home'
      className='width-padding-container full-height flex-container opening-header'
    >
      <div className='flex-column-container principal-title-container'>
        <small>{lang ? content.greet[0] : content.greet[1]}</small>
        <h1 className='animated-gradient-text'>Jose Vigo</h1>
        <h2>{lang ? content.job[0] : content.job[1]}</h2>
        <EmailContact />
        <a
          className='cv'
          target='_blank'
          rel='noopener noreferrer nofollow'
          href='/personal-portfolio-web/Jose Vigo CV - Frontend Web Developer.pdf'
        >
          {lang ? 'See CV' : 'Ver curriculum'}
        </a>
        <div className='flex-row-container social-container'>
          <a
            className='flex-row-container social-link'
            href='https://www.linkedin.com/in/jose-vigo-a9a728365'
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            <span>
              <LinkedinIcon />
            </span>
            <span>Linkedin</span>
          </a>
          <a
            className='flex-row-container social-link'
            href='https://github.com/josevigodev'
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
      <div className='presentation-img-container'>
        <ResponsiveImage />
      </div>
    </header>
  );
}

const content = {
  greet: ["Hi I'm", 'Hola soy'],
  job: ['Frontend Web Developer', 'Desarrollador Web Frontend'],
};
