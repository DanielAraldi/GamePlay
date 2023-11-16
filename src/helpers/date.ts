import { DateHelpersProps } from '../@types';

export const DateHelper: DateHelpersProps = {
  formatNumbersOfDate(value: string): string {
    return value.length === 1 ? `0${value}` : value;
  },

  getCurrentDate(): Date {
    const currentDate = new Date();
    const currentPtBrHours = currentDate.getHours() - 3;
    return new Date(currentDate.setHours(currentPtBrHours));
  },
};
