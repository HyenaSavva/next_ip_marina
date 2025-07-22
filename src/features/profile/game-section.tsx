import { FC } from "react";
import { Button, Section } from "@/shared";

const GameSection: FC = () => {
  return (
    <Section
      variant="transparent"
      className="border-purple border-3 rounded-3xl"
    >
      <Button className="bg-purple text-white font-bold text-2xlarge-size py-3 px-4 hover:bg-purple-700">
        СОЗДАТЬ ИГРУМ
      </Button>
      <Button className="bg-white text-purple font-bold text-2xlarge-size py-3 px-4 hover:bg-purple-400 hover:text-white">
        МОИ ИГРУМЫ
      </Button>
    </Section>
  );
};

export default GameSection;
