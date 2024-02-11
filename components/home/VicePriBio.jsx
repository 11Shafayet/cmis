import Image from 'next/image';
import user from '/public/assets/teachers/user.png';

const VicePriBio = () => {
  return (
    <div className="bg-white shadow-light rounded-md p-4 md:p-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <Image src={user} alt="" className="w-20 h-20 object-cover" />
        <div>
          <h5 className="text-xl font-semibold">
            The Name Of the Vice Principle
          </h5>
          <h5 className="text-lg font-medium">Vice Principle</h5>
          <p className="opacity-75">2013-On Going</p>
        </div>
      </div>
    </div>
  );
};

export default VicePriBio;
