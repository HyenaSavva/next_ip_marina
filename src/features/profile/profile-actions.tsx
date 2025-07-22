import { FC } from "react";
import { Icon, Button } from "@/shared";

interface ProfileActionsProps {
  cityName: string;
}
const ProfileActions: FC<ProfileActionsProps> = ({ cityName }) => {
  return (
    <section className="flex justify-center items-center gap-2.5">
      <Button className="flex-1 bg-white text-gray-darken text-2xlarge-size py-3 px-4 rounded-2xl">
        {cityName}
      </Button>
      <Button className="border-3 bg-white border-gray-border text-gray font-semibold text-[16px] py-3 px-4 rounded-2xl flex items-center gap-2 hover:bg-gray-200">
        <Icon src="icons/cog.svg" size={30} />
        РЕДАКТ
      </Button>
    </section>
  );
};

export default ProfileActions;
