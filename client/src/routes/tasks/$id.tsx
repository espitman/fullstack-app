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
  if (error) return <div style={{ color: 'red' }}>{error.message}</div>;
  if (!task) return <div>Task not found</div>;

  return (
    <div className="max-w-xl mx-auto my-8 font-sans">
      <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
      <p className="mb-2"><span className="font-semibold">Description:</span> {task.description || <span className="text-gray-400">No description</span>}</p>
      <p className="text-sm text-gray-600"><span className="font-semibold">Date:</span> {task.date ? new Date(task.date).toLocaleDateString() : <span className="text-gray-400">No date</span>}</p>
      {task.priority && (
        <p className="text-sm text-gray-600"><span className="font-semibold">Priority:</span> {task.priority}</p>
      )}
    </div>
  );
}

export default TaskDetail;
