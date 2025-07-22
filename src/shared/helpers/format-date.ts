export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const now = new Date();

  const dateOnly = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const nowOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffTime = nowOnly.getTime() - dateOnly.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours}.${minutes}`;

  if (diffDays === 0) {
    return `Сегодня ${timeString}`;
  }

  if (diffDays === 1) {
    return `Вчера ${timeString}`;
  }

  if (diffDays >= 2 && diffDays <= 6) {
    return `${diffDays} дня назад ${timeString}`;
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year} ${timeString}`;
};
