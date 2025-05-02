import { Gradient } from './Gradient';
import '../styles/OtherServices.css';

export function OtherServices() {
  return (
    <section className='section other-services'>
      <h3>¿Todavía tienes dudas? Encuentra lo que estás buscando</h3>
      <p className='other-services-subtitle'>
        Encuentra tu casa de alquiler o compra entre más de 1.5M de inmuebles
      </p>
      <div className='text-align-center'>
        <Gradient />
      </div>
      <div className='other-services-flex'>
        <article>
          <h4>Inmuebles a la venta</h4>
          <p>
            Encuentra casas en venta, pisos, chalets y mucho más en Fotocasa.
            Utiliza nuestros filtros y alertas para estar al día de todas las
            novedades.
          </p>
          <a href='#'>Ver inmuebles a la venta</a>
        </article>
        <article>
          <h4>Inmuebles en alquiler</h4>
          <p>
            Descubre los mejores pisos en alquiler en cada ciudad. Filtra por
            precio, número de habitaciones, baños, barrios… y contacta
            fácilmente con el propietario.
          </p>
          <a href='#'>Ver inmuebles en alquiler</a>
        </article>
        <article>
          <h4>Compartir piso</h4>
          <p>
            Compara y encuentra el piso perfecto para compartir. Configura tus
            alertas y guárdalos en favoritos para hacer tu búsqueda más fácil.
          </p>
          <a href='#'>Ver inmuebles para compartir</a>
        </article>
      </div>
    </section>
  );
}
