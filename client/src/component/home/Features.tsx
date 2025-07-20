import { Squares2X2Icon, DocumentCheckIcon, RocketLaunchIcon, CodeBracketIcon, ServerStackIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <Squares2X2Icon className="w-10 h-10 text-yellow-500" />,
    title: 'Monorepo Architecture',
    desc: 'Manage frontend, backend, and shared code in a single, organized repository.'
  },
  {
    icon: <DocumentCheckIcon className="w-10 h-10 text-yellow-500" />,
    title: 'Type-Safe API Contracts',
    desc: 'Share DTOs and types between backend and frontend for reliable, bug-free communication.'
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-yellow-500" />,
    title: 'Automated Build & Deploy',
    desc: 'Clean build process and scripts for easy development, build, and deployment.'
  },
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-yellow-500" />,
    title: 'Modern Frontend (React)',
    desc: 'Powerful, maintainable frontend built with React and modern tooling.'
  },
  {
    icon: <ServerStackIcon className="w-10 h-10 text-yellow-500" />,
    title: 'Scalable Backend (NestJS)',
    desc: 'Robust, scalable backend using NestJS and best practices.'
  },
  {
    icon: <CubeTransparentIcon className="w-10 h-10 text-yellow-500" />,
    title: 'Ready-to-Deploy Output',
    desc: 'Final build output is production-ready and easy to deploy anywhere.'
  },
];

const Features = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="mb-4">{f.icon}</div>
          <h3 className="text-lg font-bold text-yellow-500 mb-2">{f.title}</h3>
          <p className="text-gray-700 text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features; 