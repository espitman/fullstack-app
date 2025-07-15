import { useEffect, useState } from 'react';
import { TaskDto, CreateTaskDto } from '@my-fullstack-app/shared-dtos';
import { apiService, ApiError } from '../lib/apiService';

export function App() {
  const [tasks, setTasks] = useState<TaskDto[]>([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiService<TaskDto[]>('/tasks')
      .then(setTasks)
      .catch((err) => setError(err.message));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const newTask: CreateTaskDto = { title };
    if (date) newTask.date = date;
    try {
      const created = await apiService<TaskDto, CreateTaskDto>('/tasks', {
        method: 'POST',
        body: newTask,
      });
      setTasks((prev) => [...prev, created]);
      setTitle('');
      setDate('');
    } catch (err: any) {
      setError(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Task List</h1>
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
        <button type="submit" disabled={loading} style={{ padding: 8, marginLeft: 8 }}>
          Add Task
        </button>
      </form>
      {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.isDone ? 'line-through' : 'none', marginBottom: 8 }}
          >
            <a href={`#/tasks/${task.id}`} style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>
              {task.title}
            </a>
            {task.date && (
              <span style={{ color: '#888', fontSize: 12, marginLeft: 8 }}>
                {new Date(task.date).toLocaleDateString()}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
