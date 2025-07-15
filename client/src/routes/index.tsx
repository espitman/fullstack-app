import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { TaskDto, CreateTaskDto } from '@my-fullstack-app/shared-dtos';
import { useApiQuery, useApiMutation } from '../hook/useApiService';

export const Route = createFileRoute()({
  component: TaskList,
});

function TaskList() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  // Query for tasks
  const {
    data: tasks = [],
    error,
    isLoading,
    refetch,
  } = useApiQuery<TaskDto[]>('/tasks');

  // Mutation for creating a task
  const createTaskMutation = useApiMutation<TaskDto, CreateTaskDto>(
    'POST',
    '/tasks',
    {
      onSuccess: () => {
        setTitle('');
        setDate('');
        refetch();
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTaskMutation.mutate({ title, ...(date ? { date } : {}), ...(description ? { description } : {}) });
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Task Lists</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          minLength={3}
          required
          style={{ padding: 8, width: '50%' }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ padding: 8, width: '35%', marginLeft: 8 }}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          style={{ padding: 8, width: '100%', marginTop: 8 }}
        />
        <button type="submit" disabled={createTaskMutation.status === 'pending'} style={{ padding: 8, marginLeft: 8 }}>
          Add Task
        </button>
      </form>
      {error && <div style={{ color: 'red', marginBottom: 16 }}>{(error as any).message}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{ textDecoration: task.isDone ? 'line-through' : 'none', marginBottom: 8 }}
            >
              <Link to={`/tasks/${task.id}`} style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>
                {task.title}
              </Link>
              {task.date && (
                <span style={{ color: '#888', fontSize: 12, marginLeft: 8 }}>
                  {new Date(task.date).toLocaleDateString()}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList; 