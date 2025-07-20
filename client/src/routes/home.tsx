import nerexjsImg from '../assets/images/nerexjs.jpg';

const Home = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <img
      src={nerexjsImg}
      alt="NerexJS"
      className="w-[512px] h-[512px] rounded-2xl shadow-2xl object-cover"
    />
  </div>
);

export default Home; 