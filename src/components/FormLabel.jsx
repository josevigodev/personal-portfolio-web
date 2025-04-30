export function FormLabel({ handleRadioChange, id, title }) {
  return (
    <div className='item-label-container'>
      <input
        name='radio-input'
        onChange={handleRadioChange}
        type='radio'
        id={id}
        hidden
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
}
