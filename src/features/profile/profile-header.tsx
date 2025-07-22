import { FC } from "react";
import { Icon } from "@/shared";
import { Avatar } from "@/features";
import { SIDE_ICONS } from "../../pages/profile/lib/profile-constants";

interface ProfileHeaderProps {
  userName: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = ({ userName }) => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-12">
      <Icon
        src="icons/back.svg"
        className="absolute h-8 left-2 top-2 cursor-pointer hidden ss:flex"
      />
      <Avatar />
      <ul className="absolute right-6 flex-col gap-[20px] hidden ss:flex">
        {SIDE_ICONS.map((item, index) => (
          <li key={index} className="flex flex-col items-center cursor-pointer">
            <Icon src={item.icon} alt="Icon" size={32} />
            {item.text && (
              <span className="text-gray text-[14px]">{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileHeader;
