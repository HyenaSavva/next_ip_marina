import { FC } from "react";
import { Section, MenuButton, Divider } from "@/shared";

const InfoSection: FC = () => {
  return (
    <Section>
      <MenuButton leftIcon="icons/dot.svg" iconSize={10}>
        Возможности ИГРУМА
      </MenuButton>
      <Divider />
      <MenuButton leftIcon="icons/dot.svg" iconSize={10}>
        Правила ИГРУМА
      </MenuButton>
      <Divider />
      <MenuButton leftIcon="icons/dot.svg" iconSize={10}>
        Инструкция РУМЕРА
      </MenuButton>
      <Divider />
      <MenuButton leftIcon="icons/dot.svg" iconSize={10}>
        Инструкция МАСТЕРА
      </MenuButton>
      <Divider />
      <MenuButton leftIcon="icons/dot.svg" iconSize={10}>
        Инструкция МЕСТА
      </MenuButton>
      <Divider />
      <MenuButton leftIcon="icons/dot.svg" iconSize={10}>
        Пользовательское соглашение
      </MenuButton>
    </Section>
  );
};

export default InfoSection;
