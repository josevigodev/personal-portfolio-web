import { useWindowWidth } from '../hooks/useWindowWidth';
import { FloatingButton } from './FloatingButton';

export function ServiceItem({
  iconImage,
  iconTitle,
  title,
  info,
  buttonTitle,
  poster,
  invert,
}) {
  const width = useWindowWidth();

  return (
    <article className='service-flex-box'>
      <div className='service-content'>
        <div className='service-icon-wrapper'>
          <span>
            <img src={iconImage} alt='service-icon' />
          </span>
          <span>{iconTitle}</span>
        </div>

        <h4 className='service-content-title'>{title}</h4>
        <p className='service-content-info'>{info}</p>
        {width > 840 && <FloatingButton title={buttonTitle} />}
      </div>

      <div className={`service-poster ${invert && 'invert'}`}>
        <img src={poster} alt='service-diagram' loading='lazy' />
      </div>
      {width < 840 && <FloatingButton title={buttonTitle} />}
    </article>
  );
}
