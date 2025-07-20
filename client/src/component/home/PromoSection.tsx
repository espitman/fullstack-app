import nerexjsImg from '../../assets/images/nerexjs.jpg';

const PromoSection = () => (
  <section className="bg-yellow-400 py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
      <img
        src={nerexjsImg}
        alt="NerexJS"
        className="w-40 h-40 rounded-xl object-cover mb-6 md:mb-0 md:mr-8 shadow-lg border-4 border-yellow-300"
      />
      <div className="flex-1 text-black">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Build modern, scalable fullstack apps with ease</h3>
        <p className="mb-6">NerexJS is a fullstack monorepo boilerplate based on NestJS (backend) and React (frontend). Enjoy type-safe API contracts, shared code, automated build & deploy, and a ready-to-deploy output—all in one place. Perfect for scalable, maintainable, and production-ready applications.</p>
        <button className="bg-black text-yellow-400 font-semibold px-6 py-2 rounded-full hover:bg-gray-900">Get Started</button>
      </div>
    </div>
  </section>
);

export default PromoSection; 