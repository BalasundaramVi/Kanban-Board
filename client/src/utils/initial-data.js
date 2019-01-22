const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Do Laundry' },
    'task-2': { id: 'task-2', content: 'Watch TV' },
    'task-3': { id: 'task-3', content: 'Clean Apartment' },
    'task-4': { id: 'task-4', content: 'Read Book' },
    'task-5': { id: 'task-5', content: 'Well I have a lot of things to do but I am not sure exactly how to do it' },
    'task-6': { id: 'task-6', content: 'Write Code' },
    'task-7': { id: 'task-7', content: 'Study HTTP Verbs' },
    'task-8': { id: 'task-8', content: 'Read Cracking the Coding Interview' },
    'task-9': { id: 'task-9', content: 'Take Nap' },
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
      tasks: ['task-3', 'task-4', 'task-5'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Long Term',
      tasks: ['task-6', 'task-7', 'task-8', 'task-9'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
  taskCount: 9,
  columnCount: 3,
};

export default initialData;
