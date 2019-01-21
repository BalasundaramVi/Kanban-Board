const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Do Laundry' },
    'task-2': { id: 'task-2', content: 'Watch TV' },
    'task-3': { id: 'task-3', content: 'Clean Apartment' },
    'task-4': { id: 'task-4', content: 'Read Book' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      tasks: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Finished',
      tasks: ['task-3', 'task-4'],
    }
  },
  columnOrder: ['column-1', 'column-2'],
  taskCount: 2,
  columnCount: 1,
};

export default initialData;
