import { FC } from "react";
import { Section, MenuButton, Divider } from "@/shared";

const MenuSections: FC = () => {
  return (
    <>
      <Section>
        <MenuButton leftIcon="icons/story.svg">ИСТОРИЯ ВСТРЕЧ</MenuButton>
      </Section>

      <Section>
        <MenuButton leftIcon="icons/eye.svg">Публичный аккаунт</MenuButton>
        <Divider />
        <MenuButton leftIcon="icons/grown.svg">Взрослый</MenuButton>
      </Section>

      <Section>
        <MenuButton leftIcon="icons/ok.svg">Мои подписки</MenuButton>
        <Divider />
        <MenuButton leftIcon="icons/denied.svg">Черный список</MenuButton>
        <Divider />
        <MenuButton leftIcon="icons/note.svg">Закладки</MenuButton>
      </Section>
    </>
  );
};

export default MenuSections;
