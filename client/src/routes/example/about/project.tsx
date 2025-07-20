import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute()({
  component: AboutProject,
});

function AboutProject() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About the Project</h1>
      <p className="text-lg leading-relaxed">
        This project is a full-stack example developed using NestJS for the backend and React for the frontend. The goal of this project is to demonstrate the structure of a modern application with modular architecture, client-side and server-side routing, and the use of up-to-date tools such as Nx and pnpm.
      </p>
    </div>
  );
}

export default AboutProject; 