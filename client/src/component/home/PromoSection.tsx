import React from 'react';

const PromoSection = () => (
  <section className="bg-yellow-400 py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
      <div className="w-40 h-40 rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-500 mb-6 md:mb-0 md:mr-8" />
      <div className="flex-1 text-black">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">The open source platform designed for the future. Build enterprise.</h3>
        <p className="mb-6">A complete development kit for building scalable server-side apps. Contact us to find out more about expertise consulting, on-site enterprise support, trainings, and private sessions.</p>
        <button className="bg-black text-yellow-400 font-semibold px-6 py-2 rounded-full hover:bg-gray-900">Learn more about support offerings</button>
      </div>
    </div>
  </section>
);

export default PromoSection; 