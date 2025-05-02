import { ScrollArticle } from './ScrollArticle';
import '../styles/SectionScroll.css';
import { useScroll } from '../hooks/useScroll';
import { useState } from 'react';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { FloatingButton } from './FloatingButton';
import { Gradient } from './Gradient';

export function SectionScroll({ articleList, title, subtitle, logo, button }) {
  const { scrollToArticle, getMap } = useScroll();
  const [id, setId] = useState(0);
  const width = useWindowWidth();

  const handleButtonClick = (e) => {
    const elementId = e.target.id;
    console.log(elementId);
    setId(elementId);
    scrollToArticle(articleList[elementId]);
  };

  return (
    <section className='section'>
      {logo && (
        <img
          alt='Fotocasa Life'
          className='fotocasaLife-logo'
          height='20'
          src='https://frtassets.fotocasa.es/statics/img/home_fotocasa_life_logo.svg'
          title='Fotocasa Life'
          width='160'
          loading='lazy'
        />
      )}
      <div className='titles-flex'>
        <div className='title-items'>
          <h3>{title}</h3>
          <p className='top-p'>{subtitle}</p>
        </div>
        {button && width >= 960 && (
          <FloatingButton title='Mostrar mas actualidad' />
        )}
      </div>
      <Gradient />
      <ul className='flex-articles'>
        {articleList.map((item) => (
          <li
            className='item-scroll'
            key={item.id}
            ref={(node) => {
              const map = getMap();
              map.set(item, node);

              return () => {
                map.delete(item);
              };
            }}
          >
            <ScrollArticle {...item} />
          </li>
        ))}
      </ul>

      {width < 960 && (
        <nav className='flex-buttons'>
          {articleList.map((item) => (
            <button
              key={item.id}
              id={item.id}
              className={`buttons-item ${id === `${item.id}` ? 'active' : ''}`}
              onClick={handleButtonClick}
            ></button>
          ))}
        </nav>
      )}
      {button && width < 960 && (
        <FloatingButton title='Mostrar mas actualidad' />
      )}
    </section>
  );
}
