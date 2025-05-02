import '../styles/PosterSection.css';

export function PosterSection() {
  return (
    <section className='section'>
      <article className='poster'>
        <a href='#' className='poster-link'>
          <div className='poster-img-wrapper'>
            <img
              src='https://frtassets.fotocasa.es/statics/img/home_house_project_campaign_image.webp'
              alt='woman holdind a child'
            />
          </div>

          <div className='poster-text-buttom-content'>
            <h3>Proyecto Vivienda de Fotocasa</h3>
            <p>
              Una iniciativa centrada en ayudar con las problemáticas de la
              vivienda a las personas que más lo necesitan, con herramientas,
              ayudas económicas, información y todo tipo de acciones para que,
              entre todos, podamos darle la vuelta a los datos.
            </p>
            <button>Descubre el Proyecto Vivienda</button>
          </div>
        </a>
      </article>
    </section>
  );
}
