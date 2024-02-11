import { FaWhatsapp } from 'react-icons/fa';
import map from '/public/assets/map.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Image src={map} alt="" />
          </div>
          <div>
            <Image src={map} alt="" />
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary mb-6">Contact Us</h4>
            <ul>
              <li>
                <FaWhatsapp />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
