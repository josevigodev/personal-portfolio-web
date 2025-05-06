import { ResponsiveImage } from './ResponsiveImage';
import '../styles/OpeningHeader.css';

export function OpeningHeader() {
  return (
    <div className='blur'>
      <header className='width-padding-container full-height flex-container opening-header'>
        <div className='flex-column-container principal-title-container'>
          <small>Hola</small>
          <h1>
            Soy <span className='animated-gradient-text'>Jose Vigo</span>
          </h1>
          <h2>Desarrollador Web Frontend</h2>
        </div>
        <div className='presentation-img-container'>
          <ResponsiveImage />
        </div>
      </header>
    </div>
  );
}
