import React from 'react';
import SearchCard from './SearchCard';
const Hero = () => {
  return (
    <>
      <div className="p-6">
        <div className="heroSection p-4 h-[85vh] ">
          <p className="text-[36px] mt-14 md:mt-8 md:text-[45px] text-[rgba(4,72,108,0.94)] py-4 font-semibold">
            Get Your Ticket Online,
            <br />
            Easy and Safely.
          </p>
          <p className="text-[16px] md:text-[20px] md:mt-3 text-gray-800">
            Choose Your Ticket
          </p>
          <SearchCard />
        </div>
      </div>
    </>
  );
}

export default Hero