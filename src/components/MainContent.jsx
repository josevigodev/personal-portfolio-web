import { AddSection } from './AddSection';
import { FormSection } from './FormSection';
import '../styles/MainContent.css';
import { SectionScroll } from './SectionScroll';
import { articleList } from '../mocks/articleList.js';
import { PosterSection } from './PosterSection.jsx';
import { blogList } from '../mocks/blogList.js';
import { ServicesSection } from './ServicesSection.jsx';
import { SellSection } from './SellSection.jsx';
import { DownloadSection } from './DownloadSection.jsx';
import { OtherServices } from './OtherServices.jsx';

export function MainContent() {
  return (
    <main>
      <div className='first-section'>
        <FormSection />
        <AddSection />
      </div>
      <div className='second-section'>
        <SectionScroll
          articleList={articleList}
          title='¿Necesitas inspiración?'
          subtitle='Descubre que mas te ofrece Fotocasa'
        />
      </div>
      <div className='third-section'>
        <PosterSection />
      </div>
      <div className='forth-section'>
        <SectionScroll
          button
          logo
          articleList={blogList}
          title='Te acompañamos para encontrar tu casa de alquiler o compra'
          subtitle='Toda la ayuda que necesitas con consejos y herramientas'
        />
      </div>
      <div className='fifth-section'>
        <ServicesSection />
      </div>
      <div className='sixth-section'>
        <SellSection />
      </div>
      <div className='seventh-section'>
        <DownloadSection />
      </div>
      <div className='eighth-section'>
        <OtherServices />
      </div>
      <div className='footer-section'>
        <footer>
          Created by{' '}
          <a href='https://github.com/josevigodev' target='_blank'>
            @josevigodev
          </a>
        </footer>
      </div>
    </main>
  );
}
