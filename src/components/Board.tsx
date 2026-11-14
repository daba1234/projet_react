
import type { TaskStatus } from '../api/types';
import { mockTasks } from '../data/mockTasks';
import { Column } from './Column';
import { TaskCard } from './TaskCard';

const COLUMNS: { status: TaskStatus; title: string }[] = [
  { status: 'TODO', title: 'À faire' },
  { status: 'DOING', title: 'En cours' },
  { status: 'DONE', title: 'Terminé' },
];

export function Board() {
  return (
    <main className="mx-auto grid max-w-6xl gap-4 p-4 md:grid-cols-3">
      {COLUMNS.map(({ status, title }) => {
        const tasks = mockTasks.filter((task) => task.status === status);
        return (
          <Column key={status} title={title} count={tasks.length}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </Column>
        );
      })}
    </main>
  );
}