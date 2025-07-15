import { createFileRoute } from '@tanstack/react-router';
import { useApiQuery } from '../../hook/useApiService';
import { TaskDto } from '@my-fullstack-app/shared-dtos';

export const Route = createFileRoute()({
  component: TaskDetail,
});

function TaskDetail() {
  const { id } = Route.useParams();
  // Fetch a single task by ID
  const { data: task, isLoading, error } = useApiQuery<TaskDto>(`/tasks/${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{(error as any).message}</div>;
  if (!task) return <div>Task not found</div>;

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>{task.title}</h2>
      <p><strong>Description:</strong> {task.description || 'No description'}</p>
      <p><strong>Date:</strong> {task.date ? new Date(task.date).toLocaleDateString() : 'No date'}</p>
    </div>
  );
}

export default TaskDetail;
