import Image from "next/image";

import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ socialImg }) => {
  return (
    <div className="relative group overflow-hidden">
      <Image
        src={socialImg}
        className="w-full h-full group-hover:scale-125 ease-in duration-300"
        layout="responsive"
        alt="insta img"
      />

      {/* overlay */}
      <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-black/30 hover:bg-transparent group cursor-pointer ease-in duration-150">
        <p className="text-white hidden group-hover:block ease-in duration-150">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
