import type { Task } from '../api/types';

export const mockTasks: Task[] = [
  { id: 1, projectId: 1, title: 'Créer la page de connexion', description: 'Formulaire email et mot de passe.', status: 'TODO', priority: 'HIGH', assigneeId: 1, dueDate: '2026-10-30', createdAt: '2026-10-20T09:00:00Z' },
  { id: 2, projectId: 1, title: 'Rédiger le README', description: 'Installation et captures.', status: 'TODO', priority: 'LOW', assigneeId: null, dueDate: null, createdAt: '2026-10-21T09:00:00Z' },
  { id: 3, projectId: 1, title: 'Prévoir les filtres', description: 'Statut et recherche par titre.', status: 'TODO', priority: 'MEDIUM', assigneeId: 2, dueDate: '2026-12-15', createdAt: '2026-10-22T09:00:00Z' },
  { id: 4, projectId: 1, title: 'Composant Column', description: 'Avec compteur et état vide.', status: 'DOING', priority: 'HIGH', assigneeId: 1, dueDate: '2026-11-01', createdAt: '2026-10-23T09:00:00Z' },
  { id: 5, projectId: 1, title: 'Badge de priorité', description: 'Trois couleurs selon la priorité.', status: 'DOING', priority: 'MEDIUM', assigneeId: 3, dueDate: '2026-12-01', createdAt: '2026-10-24T09:00:00Z' },
  { id: 6, projectId: 1, title: 'Style Tailwind du header', description: 'Titre et logo.', status: 'DOING', priority: 'LOW', assigneeId: null, dueDate: null, createdAt: '2026-10-25T09:00:00Z' },
  { id: 7, projectId: 1, title: 'Initialiser le projet', description: 'Vite, React, TypeScript.', status: 'DONE', priority: 'HIGH', assigneeId: 1, dueDate: '2026-10-15', createdAt: '2026-10-10T09:00:00Z' },
  { id: 8, projectId: 1, title: 'Installer Tailwind v4', description: 'Plugin Vite.', status: 'DONE', priority: 'MEDIUM', assigneeId: 2, dueDate: '2026-10-16', createdAt: '2026-10-11T09:00:00Z' },
];