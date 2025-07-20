import nestLogo from '../../assets/images/nestjs.svg';
import reactLogo from '../../assets/images/react.svg';
import nxLogo from '../../assets/images/nx.svg';

const TechLogos = () => (
  <section className="bg-white py-8">
    <div className="container mx-auto flex flex-col items-center justify-center gap-6">
      <div className="flex flex-row items-center justify-center gap-12">
        <img src={nestLogo} alt="NestJS Logo" className="h-14 w-auto" />
        <img src={reactLogo} alt="ReactJS Logo" className="h-14 w-auto" />
        <img src={nxLogo} alt="Nx Logo" className="h-14 w-auto" />
      </div>
    </div>
  </section>
);

export default TechLogos; 