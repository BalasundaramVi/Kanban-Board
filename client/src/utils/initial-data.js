const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Do Laundry' },
    'task-2': { id: 'task-2', content: 'Watch TV' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      tasks: ['task-1', 'task-2'],
    },
  },
  columnOrder: [],
  taskCount: 2,
};

export default initialData;
