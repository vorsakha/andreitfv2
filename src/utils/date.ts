export function formatDate(rawDate: string) {
  const dateObj = new Date(rawDate);
  const month =
    dateObj.getUTCMonth() + 1 <= 9
      ? '0' + (dateObj.getUTCMonth() + 1)
      : dateObj.getUTCMonth() + 1;
  const day =
    dateObj.getUTCDate() <= 9
      ? '0' + dateObj.getUTCDate()
      : dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const date = year + '-' + month + '-' + day;

  return date;
}
