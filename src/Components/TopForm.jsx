import { useContext, useEffect, useRef, useState } from 'react';
import { TasksContext } from '../contexts/tasks';

const initialWidth = window.innerWidth;

export function TopForm() {
  const { addTask } = useContext(TasksContext);
  const inputRef = useRef(null);
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    const handleResize = (e) => {
      const { innerWidth } = e.target;
      setWidth(innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, setWidth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div className='background'>
      {width > 1020 && <h2>TO-DO APP ✔️</h2>}
      <form onSubmit={handleSubmit} className='todo-form'>
        <input
          ref={inputRef}
          className='todo-form-input'
          type='text'
          placeholder='Water the plants'
          required
        />
        <button className='todo-form-button'>Add</button>
      </form>
    </div>
  );
}
