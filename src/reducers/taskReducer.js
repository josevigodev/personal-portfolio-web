const initialTask = [
  { id: 0, task: 'This is an example of a task', checked: true },
];

export const initialTasks = JSON.parse(window.localStorage.getItem('tasks')) || initialTask

let nextId = JSON.parse(window.localStorage.getItem('nextId')) || 1;

const updateStorage = (newTask) => {
  window.localStorage.setItem('tasks', JSON.stringify(newTask))
}

const updateNextId = () => {
  window.localStorage.setItem('nextId', nextId++)
}

export function taskReducer(tasks, action) {
  const { type, newTask, id } = action;
  switch (type) {
    case 'added_task': {
      updateNextId()
      const newTasks = [...tasks, { id: nextId++, task: newTask, checked: false }];
      updateStorage(newTasks);
      return newTasks
    }

    case 'checked_task': {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: !task.checked,
          };
        }
        return task;
      });
      updateStorage(newTasks)
      return newTasks
    }

    case 'edited_task': {
      const newTasks = tasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            task: newTask,
          };
        } else {
          return item;
        }
      });
      updateStorage(newTasks)
      return newTasks
    }

    case 'deleted_task': {
      const newTasks = tasks.filter((task) => task.id !== id);
      updateStorage(newTasks)
      return newTasks
    }

    default: {
      throw new Error('Undefined action');
    }
  }
}