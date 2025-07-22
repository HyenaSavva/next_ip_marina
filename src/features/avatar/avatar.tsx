import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="relative">
      <Image
        src="/avatar/ping.png"
        alt="Ping"
        width={40}
        height={40}
        className="absolute top-0 left-0"
      />
      <Image
        src="/avatar/default-avatar.png" // Изображение из ссылки не работает, используем дефолтное
        alt="Avatar"
        width={180}
        height={180}
        className="rounded-full"
      />
    </div>
  );
};
