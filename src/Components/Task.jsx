import { useContext, useState } from 'react';
import { TasksContext } from '../contexts/tasks';

export function Task({ task, checked, id }) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task);
  const { checkTask, deleteTask, editTask } = useContext(TasksContext);

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <article className='task'>
      <div className='text-wrapper'>
        {editing ? (
          <input
            type='text'
            className='edit-input'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          <>
            <input
              onChange={() => checkTask(id)}
              className='task-check'
              type='checkbox'
              checked={checked}
            />
            <span className='task-text'>{task}</span>
          </>
        )}
      </div>
      <div className='buttons-wrapper'>
        {editing ? (
          <button
            className='save-button'
            onClick={() => {
              editTask(id, inputValue);
              handleEdit();
            }}
          >
            Save
          </button>
        ) : (
          <button className='edit-button' onClick={handleEdit}>
            Edit
          </button>
        )}
        {editing ? (
          <button
            className='delete-button'
            onClick={() => {
              handleEdit();
              setInputValue(task);
            }}
          >
            Discard
          </button>
        ) : (
          <button className='delete-button' onClick={() => deleteTask(id)}>
            Delete
          </button>
        )}
      </div>
    </article>
  );
}
