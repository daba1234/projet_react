import type { Task } from '../api/types';

export function isOverdue(task: Task): boolean {
  if (task.dueDate === null || task.status === 'DONE') return false;
  const today = new Date().toISOString().slice(0, 10); // "2026-11-13"
  return task.dueDate < today;
}