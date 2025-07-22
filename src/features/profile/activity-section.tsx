import { FC } from "react";
import { Icon, Section, MenuButton, Divider } from "@/shared";

const ActivitySection: FC = () => {
  return (
    <Section>
      <MenuButton
        rightElement={
          <div className="flex items-center gap-5">
            <span className="rounded-full h-7 w-7 bg-gray-300 text-gray-darken flex items-center justify-center font-bold text-2xlarge-size">
              2
            </span>
            <Icon src="icons/arrow.svg" size={30} />
          </div>
        }
      >
        <span className="rounded bg-green-500 w-2.5 h-2.5"></span>
        <p className="font-bold text-xlarge-size text-gray-darken">ЗОВЫ</p>
      </MenuButton>
      <Divider />
      <MenuButton
        rightElement={
          <div className="flex items-center gap-5">
            <span className="rounded-full h-7 w-7 bg-gray-300 text-gray-darken flex items-center justify-center font-bold text-2xlarge-size">
              3
            </span>
            <Icon src="icons/arrow.svg" size={30} />
          </div>
        }
      >
        <span className="rounded bg-orange-500 w-2.5 h-2.5"></span>
        <p className="font-bold text-xlarge-size text-gray-darken">ИДУ</p>
      </MenuButton>
    </Section>
  );
};

export default ActivitySection;