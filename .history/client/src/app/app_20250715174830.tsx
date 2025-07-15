import { useEffect, useState } from 'react';
import { TaskDto, CreateTaskDto } from '@my-fullstack-app/shared-dtos';

// ApiError و apiService بدون zod

interface ApiServiceOptions<TRequestBody> {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  queryParams?: Record<string, string | number | boolean | undefined>;
  body?: TRequestBody;
  headers?: Record<string, string>;
}

export class ApiError extends Error {
  status: number;
  errorData?: any;

  constructor(message: string, status: number, errorData?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errorData = errorData;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export async function apiService<TResponseData, TRequestBody = unknown>(
  url: string, // e.g., '/tasks'
  options: ApiServiceOptions<TRequestBody> = {}
): Promise<TResponseData> {
  const { method = 'GET', queryParams, body, headers = {} } = options;

  let fullUrl = `/api${url}`;

  if (queryParams) {
    const params = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, String(value));
      }
    });
    if (params.toString()) {
      fullUrl += `?${params.toString()}`;
    }
  }

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(fullUrl, config);

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch (e) {
        errorData = { message: response.statusText };
      }
      throw new ApiError(
        errorData?.message || `API request failed with status ${response.status}`,
        response.status,
        errorData
      );
    }

    if (response.status === 204 || response.headers.get("content-length") === "0") {
      // No content
      return undefined as TResponseData;
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(error instanceof Error ? error.message : 'An unknown network error occurred', 0, error);
  }
}

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
