"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Mar",
    uv: 0,
    pv: 0,
  },
  {
    name: "Apr",
    uv: 50,
    pv: 0,
  },
  {
    name: "May",
    uv: 150,
    pv: 0,
  },
  {
    name: "Jun",
    uv: 300,
    pv: 0,
  },
  {
    name: "Jul",
    uv: 500,
    pv: 0,
  },
  {
    name: "Aug",
    uv: 750,
    pv: 0,
  },
  // {
  //   name: "Sep",
  //   uv: 1100,
  //   pv: 300,
  // },
];

export function MonthlyRequests() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
        <XAxis tick={{ fontSize: "14px", fill: "#a3a3a3" }} dataKey="name" />
        <YAxis tick={{ fontSize: "14px", fill: "#a3a3a3" }} />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="pv"
          stroke="#f7b32b"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
