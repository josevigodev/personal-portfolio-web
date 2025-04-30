import { useId, useState } from 'react';
import '../styles/FormSection.css';
import { SearchIcon } from './Icons';
import { FormLabel } from './FormLabel';

// const number = 840;

export function FormSection() {
  const [showOptions, setShowOptions] = useState('ready');
  const comprarId = useId();
  const alquilarId = useId();
  const obraId = useId();
  const compartirId = useId();

  const handleRadioChange = (e) => {
    const { id } = e.target;
    console.log('os');
    if (id === comprarId || id === alquilarId) {
      setShowOptions('ready');
    }

    if (id === obraId) {
      setShowOptions('waiting');
    }

    if (id === compartirId) {
      setShowOptions('disable');
    }
  };

  return (
    <section className='form-section'>
      <div className='style-width'>
        <div className='container-figures'>
          <h2>25 años ayudándote a encontrar tu sitio</h2>
        </div>

        <div className='container-label'>
          <FormLabel
            title='Comprar'
            id={comprarId}
            handleRadioChange={handleRadioChange}
          />
          <FormLabel
            title='Alquilar'
            id={alquilarId}
            handleRadioChange={handleRadioChange}
          />
          <FormLabel
            title='Obra nueva'
            id={obraId}
            handleRadioChange={handleRadioChange}
          />
          <FormLabel
            title='Compartir'
            id={compartirId}
            handleRadioChange={handleRadioChange}
          />
        </div>

        <div className='container-input'>
          <div className='item-input-container'>
            <select
              className='select-input'
              disabled={showOptions === 'disable'}
            >
              {showOptions === 'waiting' ? (
                <>
                  <option value='viviendas'>Viviendas</option>
                  <option value='promociones'>Promociones</option>
                </>
              ) : (
                <>
                  <option value='vivienda'>Vivienda</option>
                  <option value='obra-nueva'>Obra nueva</option>
                  <option value='promociones'>Promociones</option>
                  <option value='local-nave'>Local y nave</option>
                  <option value='garaje'>Garaje</option>
                  <option value='oficina'>Oficina</option>
                  <option value='trastero'>Trastero</option>
                  <option value='terreno'>Terreno</option>
                  <option value='edificio'>Edificio</option>
                </>
              )}
            </select>
          </div>

          <div className='item-input-container'>
            <form>
              <input
                className='search-input'
                type='search'
                placeholder='Buscar vivienda en minucipio, barrio...'
              />
              <button className='submit-button' type='submit'>
                <span>
                  <SearchIcon />
                </span>
                <span>Buscar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
