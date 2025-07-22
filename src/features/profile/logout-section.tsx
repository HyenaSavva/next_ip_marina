import { FC } from "react";
import { Icon, Button, Section } from "@/shared";

const LogoutSection: FC = () => {
  return (
    <Section className="mb-8">
      <Button className="justify-start hover:bg-gray-200">
        <Icon src="icons/leave.svg" size={20} />
        Выйти из профиля
      </Button>
    </Section>
  );
};

export default LogoutSection;
