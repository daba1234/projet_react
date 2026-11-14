
import type { Task } from '../api/types';
import { isOverdue } from '../utils/isOverdue';
import { PriorityBadge } from './PriorityBadge';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const overdue = isOverdue(task);

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-slate-900">{task.title}</h3>
        <PriorityBadge priority={task.priority} />
      </div>
      <p className="mt-1 text-sm text-slate-600">{task.description}</p>
      {task.dueDate !== null && (
        <p className="mt-2 text-xs text-slate-500">Échéance : {task.dueDate}</p>
      )}
      {overdue && (
        <span className="mt-2 inline-block rounded bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
          En retard
        </span>
      )}
    </article>
  );
}