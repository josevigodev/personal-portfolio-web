import { useContext, useRef } from 'react';
import { TasksContext } from '../contexts/tasks';

export function TopForm() {
  const { addTask } = useContext(TasksContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
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
  );
}
