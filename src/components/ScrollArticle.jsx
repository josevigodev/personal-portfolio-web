import '../styles/ScrollArticle.css';

export function ScrollArticle({
  mainTitle,
  mainDescription,
  small,
  linkTitle,
  srcset,
  img,
}) {
  return (
    <>
      <article>
        <a href='#' className='image-link'>
          <picture>
            <source srcSet={srcset} type='image/webp' />
            <img
              alt='Lo último en obra nueva'
              height='180'
              loading='lazy'
              src={img}
              width='328'
            />
          </picture>
        </a>

        <h4>{mainTitle}</h4>

        <div>
          <p className='article-text'>{mainDescription}</p>
          <small>{small}</small>
        </div>

        <a href='' className='button-link'>
          <span>{linkTitle}</span>
        </a>
      </article>
    </>
  );
}
