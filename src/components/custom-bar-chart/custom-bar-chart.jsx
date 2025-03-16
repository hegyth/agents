import { Tooltip } from "antd";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";

export default function CustomBarChart({ dataKey, data }) {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey={dataKey}
        fill="#1677ff"
        activeBar={<Rectangle fill="#bae0ff" stroke="#1677ff" />}
      />
    </BarChart>
  );
}
