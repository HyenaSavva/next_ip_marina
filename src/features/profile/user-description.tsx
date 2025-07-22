import { FC } from "react";
import { Section, Divider } from "@/shared";

interface UserDescriptionProps {
  description?: string;
  telegram: string;
}

const UserDescription: FC<UserDescriptionProps> = ({
  description,
  telegram,
}) => {
  return (
    <Section className="text-[17px] text-black">
      <div className="text-gray-darken py-4 px-4">
        {description || "Нет описания"}
      </div>
      <Divider />
      <div className="flex justify-between w-full px-4 py-4">
        <span>Мой телеграм</span>
        <span className="font-bold">@{telegram}</span>
      </div>
    </Section>
  );
};

export default UserDescription;