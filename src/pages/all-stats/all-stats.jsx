import { Space, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CustomBarChart from "../../components/custom-bar-chart/custom-bar-chart";
import {
  getAllClientsChartData,
  getAllIncomeChartData,
} from "../../utils/get-chart-data";
import styles from "./index.module.scss";

export default function AllStats() {
  const allClients = useSelector((state) => state.clients);

  const allClientsChartData = getAllClientsChartData(allClients);
  const allIncomeChartData = getAllIncomeChartData(allClients);

  return (
    <Space direction="vertical" className={styles.allStatsBlock}>
      <Typography.Title>Profit statistics</Typography.Title>
      <CustomBarChart dataKey={"income"} data={allIncomeChartData} />
      <Typography.Title>Client statistics</Typography.Title>
      <CustomBarChart dataKey={"count"} data={allClientsChartData} />
    </Space>
  );
}
