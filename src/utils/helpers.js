export const truncateText = (text, length = 50) => {
  return text.length > length
    ? text.substring(0, length) + "..."
    : text;
};