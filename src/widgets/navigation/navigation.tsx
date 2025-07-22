import { Icon } from "@/shared";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-1 flex items-center justify-between border-b-1 rounded-t-2xl border-gray-300 bg-gray-light py-2 px-5">
      <h1 className="text-gray text-[28px] select-none">Профиль</h1>
      <Icon src="icons/menu.svg" className="cursor-pointer size-7" />
    </nav>
  );
};
