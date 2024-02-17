export function createDateSequence(from: Date, to: Date): Date[] {
  let dateList: Date[] = [];
  let date = new Date(from);
  while (date < to) {
    const dateToPush = new Date(date);
    dateList.push(dateToPush);
    date.setDate(date.getDate() + 1);
  }
  return dateList;
}

export function addDay(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
