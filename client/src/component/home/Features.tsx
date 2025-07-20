import { CubeIcon, PencilSquareIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <CubeIcon className="w-10 h-10 text-yellow-500" />,
    title: 'EXTENSIBLE',
    desc: 'Provides unparalleled flexibility through its meticulously crafted modular architecture.'
  },
  {
    icon: <PencilSquareIcon className="w-10 h-10 text-yellow-500" />,
    title: 'VERSATILE',
    desc: 'Serves as a robust, elegant, and well-structured foundation for all kinds of server-side applications.'
  },
  {
    icon: <SparklesIcon className="w-10 h-10 text-yellow-500" />,
    title: 'PROGRESSIVE',
    desc: 'Introduces design patterns and well-established solutions to the Node.js landscape.'
  }
];

const Features = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center gap-12">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col items-center text-center max-w-xs">
          <div className="mb-4">{f.icon}</div>
          <h3 className="text-lg font-bold text-yellow-500 mb-2">{f.title}</h3>
          <p className="text-gray-700 text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features; 