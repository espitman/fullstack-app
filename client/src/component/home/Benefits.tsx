import { PuzzlePieceIcon, ChartBarIcon, BeakerIcon, ShieldCheckIcon, GlobeAltIcon, BuildingOffice2Icon, Squares2X2Icon, BoltIcon } from '@heroicons/react/24/outline';

const benefits = [
  { icon: <PuzzlePieceIcon className="w-8 h-8 text-yellow-500" />, title: 'MODULARITY', desc: 'Streamline upkeep by organizing applications into self-contained modules.' },
  { icon: <ChartBarIcon className="w-8 h-8 text-yellow-500" />, title: 'SCALABILITY', desc: 'Scale seamlessly with an efficient, battle-tested components.' },
  { icon: <BeakerIcon className="w-8 h-8 text-yellow-500" />, title: 'DEPENDENCY INJECTION', desc: 'Elevate testability with a sophisticated dependency injection system.' },
  { icon: <ShieldCheckIcon className="w-8 h-8 text-yellow-500" />, title: 'TYPE SAFETY', desc: 'Mitigate errors through the robust type safety features of TypeScript.' },
  { icon: <GlobeAltIcon className="w-8 h-8 text-yellow-500" />, title: 'RICH ECOSYSTEM', desc: 'Explore a rich ecosystem offering versatile tools to craft solutions tailored to your needs.' },
  { icon: <BuildingOffice2Icon className="w-8 h-8 text-yellow-500" />, title: 'ENTERPRISE-READY', desc: 'Trusted by thousands of leading companies and organizations worldwide.' },
  { icon: <Squares2X2Icon className="w-8 h-8 text-yellow-500" />, title: 'MICROSERVICES', desc: 'Create loosely coupled, independently deployable services for increased agility and scalability.' },
  { icon: <BoltIcon className="w-8 h-8 text-yellow-500" />, title: 'WEB APPS', desc: 'Build REST APIs, GraphQL APIs, Queues, and real-time & event-driven applications in no time.' },
];

const Benefits = () => (
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Everything you need..</h2>
      <p className="text-center text-gray-600 mb-12">Build robust, powerful, and scalable server-side applications and stop reinventing the wheel.</p>
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