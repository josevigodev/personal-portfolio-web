import { useContext, useRef, useState } from 'react';
import { TasksContext } from '../contexts/tasks';

export function Task({ task, checked, id }) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task);
  const { checkTask, deleteTask, editTask } = useContext(TasksContext);
  const articleRef = useRef(null);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleDelete = () => {
    articleRef.current.classList.add('deleted');

    setTimeout(() => {
      deleteTask(id);
    }, 300);
  };

  const dragStartHandler = (e) => {
    const { dataTransfer } = e;
    dataTransfer.setData('text/plain', articleRef.current.id);
  };

  return (
    <article
      id={id}
      onDragStart={dragStartHandler}
      ref={articleRef}
      className='task'
    >
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
            <label form='' className='task-text'>
              {task}
            </label>
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
          <button className='delete-button' onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </article>
  );
}
