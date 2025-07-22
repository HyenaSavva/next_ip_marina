import { FC } from "react";
import { formatDate } from "@/shared";
import { INFO } from "../../pages/profile/lib/profile-constants";

interface ProfileInfoProps {
  userName: string;
  userNickname: string;
  createdAt: string;
}

const ProfileInfo: FC<ProfileInfoProps> = ({
  userName,
  userNickname,
  createdAt,
}) => {
  return (
    <>
      <div className="flex w-full h-14 justify-center items-center">
        <span className="text-2xl mr-2 select-none">румер:</span>
        <h1
          className="text-nowrap text-ellipsis text-[28px] overflow-hidden w-52 cursor-pointer font-bold"
          title={userName}
        >
          {userName}
        </h1>
      </div>

      <ul className="flex justify-around items-center h-10 mb-1.5 text-gray-darken">
        <li>@{userNickname}</li>
        <li>{formatDate(createdAt)}</li>
      </ul>

      <ul className="flex justify-center items-center h-12 gap-8">
        {INFO.map((info, index) => (
          <li
            key={index}
            className="flex flex-col items-center text-gray-darken"
          >
            <span className="ml-2 text-2xlarge-size font-bold">{info.value}</span>
            <span className="text-gray text-2xlarge-size mt-[-8px]">
              {info.lable}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfileInfo;
