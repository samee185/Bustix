import React from 'react'
import CtaCard from './CtaCard';
import { MagnifyingGlassIcon, TicketIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { Badge } from "@material-tailwind/react";
const Cta = () => {
  return (
    <>
      <div className="py-4 md:py-10 mt-4 ">
        <p className="text-2xl md:text-4xl text-[rgba(4,72,108,0.94)] font-bold text-center uppercase">
          Get your tickets in just <br /> three steps
        </p>
        <p className="text-[16px] text-gray-800 text-center mt-4 mb-8 ">
          Have a look at our popular reason. why you should choose you bus. Just
          a Bus <br /> and get a ticket for your great journey. !
        </p>
        <div className="flex justify-center md:gap-8 flex-wrap lg:flex-nowrap mt-8">
          <Badge
            content={"1"}
            className="bg-gradient-to-tr from-[rgba(4,72,108,0.94)] to-[rgba(4,72,108,0.94)] border-2 border-white shadow-lg shadow-black/20"
          >
            <CtaCard
              icon={<MagnifyingGlassIcon />}
              title={"Search Your Bus"}
              description={
                "Choose your origin, destination,Just choose a Bus journey dates and search for buses"
              }
            />
          </Badge>
          <CtaCard
            icon={<TicketIcon />}
            title={"Choose The Ticket"}
            description={
              "Choose your origin, destination,Just choose a Bus journey dates and search for buses"
            }
          />
          <CtaCard
            icon={<BanknotesIcon />}
            title={"Make Payment"}
            description={
              "Choose your origin, destination,Just choose a Bus journey dates and search for buses"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Cta