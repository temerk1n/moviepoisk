export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  return (
    dateObj.toLocaleDateString("ru") +
    " в " +
    dateObj.getHours() +
    ":" +
    dateObj.getMinutes()
  );
};
