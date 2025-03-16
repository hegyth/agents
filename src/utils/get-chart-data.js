import { chartData } from "../constants/all-stats-constants";
import { splitNumber } from "./split-number-for-chart";

export const getAllClientsChartData = (allClients) => {
  const allClientsData = splitNumber(allClients.length);

  const allClientsChartData = chartData.map((month, index) => {
    return { ...month, count: Math.floor(allClientsData[index]) };
  });

  return allClientsChartData;
};

export const getAllIncomeChartData = (allClients) => {
  const allIncomeData = splitNumber(
    allClients.reduce((acc, client) => {
      acc += Math.abs(client.income);
      return acc;
    }, 0)
  );

  const allIncomeChartData = chartData.map((month, index) => {
    return { ...month, income: allIncomeData[index] };
  });

  return allIncomeChartData;
};

export const getclientChartData = (currentClient) => {
  const clientIncomeData = splitNumber(currentClient.income);
  const clientChartData = chartData.map((month, index) => {
    return { ...month, income: clientIncomeData[index] };
  });

  return clientChartData;
};
