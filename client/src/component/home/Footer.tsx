import React from 'react';
import { GlobeAltIcon, ChatBubbleLeftRightIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const Footer = () => (
  <footer className="bg-gray-100 pt-10 pb-4 mt-auto">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <div className="text-lg font-semibold">Join our Newsletter</div>
        <form className="flex gap-2">
          <input type="email" placeholder="Email address.." className="px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none" />
          <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-r-full font-semibold">Subscribe</button>
        </form>
      </div>
      <div className="flex items-center justify-center gap-4 mb-2">
        <GlobeAltIcon className="w-6 h-6 text-yellow-500" />
        <ChatBubbleLeftRightIcon className="w-6 h-6 text-yellow-500" />
        <BriefcaseIcon className="w-6 h-6 text-yellow-500" />
      </div>
      <div className="text-center text-gray-500 text-xs">
        Released under the MIT License &copy; 2024 NerexJS
      </div>
    </div>
  </footer>
);

export default Footer; 