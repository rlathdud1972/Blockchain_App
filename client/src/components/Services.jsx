import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-2xl sm:text-5xl py-2 text-gradient ">
          Your #1 Online
          <br />
          Shopping Platform
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          eSpace offers a secure, seamless and reliable second-hand shopping experience to millions of users worldwide under a blockchain.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="User Security Gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Highly secure authentication system upon user account creation to validate user. One account per user regulation. "
        />
        <ServiceCard
          color="bg-[#FE9001]"
          title="Secure Transactions"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Integrated third party payment processor to assist with transactions to run securely and smoothly."
        />
          <ServiceCard
          color="bg-[#F84550]"
          title="Review System"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="eSpace provides a rating/review system to prevent fraudulent users from gaining credibility."
        />
      </div>
    </div>
  </div>
);

export default Services;