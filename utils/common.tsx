export const addZero = (date: number) => {
  if (date < 10) {
    const zeroDate = ('00' + date).slice(-2);
    return zeroDate;
  }
  return date;
};
