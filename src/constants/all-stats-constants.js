import { getLastSixMonths } from "../utils/get-last-six-month";

const lastSixMonths = getLastSixMonths()

export const chartData = [
  {
    name: lastSixMonths[0],
  },
  {
    name: lastSixMonths[1],
  },
  {
    name: lastSixMonths[2],
  },
  {
    name: lastSixMonths[3],
  },
  {
    name: lastSixMonths[4],
  },
  {
    name: lastSixMonths[5],
  },
];
