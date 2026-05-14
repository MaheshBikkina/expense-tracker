import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { chartData } from "../../config/chartConfig";

function MonthlySpendingChart() {
  return (
    <div
      className="
        rounded-3xl border border-gray-200
        bg-white p-8 min-h-10 transition-all duration-200 hover:shadow-lg"
    >
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-lg font-medium text-gray-900">
          Monthly Spending Distribution
        </h2>

        <p className="mt-1 text-gray-500 text-sm">
          Percentage breakdown of expenses by category each month
        </p>
      </div>

      {/* Chart */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barCategoryGap={0}>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />

            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #E5E7EB",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                padding: "12px",
              }}
            />

            <Bar dataKey="food" stackId="a" fill="#ff6b6b" />

            <Bar dataKey="transportation" stackId="a" fill="#4ecdc4" />

            <Bar dataKey="entertainment" stackId="a" fill="#45b7d1" />

            <Bar dataKey="shopping" stackId="a" fill="#8fc0a9" />

            <Bar dataKey="utilities" stackId="a" fill="#f6e58d" />

            <Bar dataKey="health" stackId="a" fill="#d291e4" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legends */}
      <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-700">
        <div className="flex items-center gap-2 font-medium">
          <div className="h-3 w-3 rounded-full bg-[#ff6b6b] text-sm" />
          Food
        </div>

        <div className="flex items-center gap-2 font-medium">
          <div className="h-3 w-3 rounded-full bg-[#4ecdc4]" />
          Transportation
        </div>

        <div className="flex items-center gap-2 font-medium">
          <div className="h-3 w-3 rounded-full bg-[#45b7d1]" />
          Entertainment
        </div>

        <div className="flex items-center gap-2 font-medium">
          <div className="h-3 w-3 rounded-full bg-[#8fc0a9]" />
          Shopping
        </div>

        <div className="flex items-center gap-2 font-medium">
          <div className="h-3 w-3 rounded-full bg-[#f6e58d]" />
          Utilities
        </div>

        <div className="flex items-center gap-2 font-medium">
          <div className="h-3 w-3 rounded-full bg-[#d291e4]" />
          Health
        </div>
      </div>
    </div>
  );
}

export default MonthlySpendingChart;
