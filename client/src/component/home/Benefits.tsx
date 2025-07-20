import { PuzzlePieceIcon, ChartBarIcon, BeakerIcon, ShieldCheckIcon, GlobeAltIcon, CubeTransparentIcon, Squares2X2Icon, BoltIcon } from '@heroicons/react/24/outline';

const benefits = [
  { icon: <PuzzlePieceIcon className="w-8 h-8 text-yellow-500" />, title: 'MODULARITY', desc: 'Organize your fullstack app into self-contained modules for both backend and frontend.' },
  { icon: <ChartBarIcon className="w-8 h-8 text-yellow-500" />, title: 'SCALABILITY', desc: 'Scale your fullstack project seamlessly with shared code and efficient architecture.' },
  { icon: <BeakerIcon className="w-8 h-8 text-yellow-500" />, title: 'DEPENDENCY INJECTION', desc: 'Benefit from advanced DI patterns in backend and share logic with frontend easily.' },
  { icon: <ShieldCheckIcon className="w-8 h-8 text-yellow-500" />, title: 'TYPE SAFETY', desc: 'TypeScript everywhere: shared types for safe, robust fullstack development.' },
  { icon: <GlobeAltIcon className="w-8 h-8 text-yellow-500" />, title: 'RICH ECOSYSTEM', desc: 'Leverage a fullstack ecosystem with modern tools for both client and server.' },
  { icon: <Squares2X2Icon className="w-8 h-8 text-yellow-500" />, title: 'MICROSERVICES', desc: 'Build and connect microservices in a unified fullstack codebase.' },
  { icon: <BoltIcon className="w-8 h-8 text-yellow-500" />, title: 'WEB APPS', desc: 'Create powerful fullstack web apps with React frontend and NestJS backend.' },
  { icon: <CubeTransparentIcon className="w-8 h-8 text-yellow-500" />, title: 'Ready-to-Deploy Output', desc: 'Final build output is production-ready and easy to deploy anywhere for your fullstack app.' },
];

const Benefits = () => (
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Everything you need..</h2>
      <p className="text-center text-gray-600 mb-12">Build robust, powerful, and scalable fullstack applications and stop reinventing the wheel.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="mb-3">{b.icon}</div>
            <h4 className="font-semibold mb-2">{b.title}</h4>
            <p className="text-gray-600 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits; 