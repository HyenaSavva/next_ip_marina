import Image from "next/image";

import { FOOTER_ICONS } from "./lib/footer-constants";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center h-16 border-t-1 border-gray-300">
      <ul className="flex justify-around items-center w-full max-w-4xl">
        {FOOTER_ICONS.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center cursor-pointer w-10 h-10"
          >
            <Image
              src={item.icon}
              alt="footer-icon"
              width={32}
              height={32}
              className="object-contain w-8 h-8"
            />
          </li>
        ))}
      </ul>
    </footer>
  );
};
