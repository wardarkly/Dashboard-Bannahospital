"use client";

import {
  Bar,
  BarChart,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const chartData = [
  { month: "ม.ค.", home: 85, admit: 120, refer: 120, er: 120, other: 120 },
  { month: "ก.พ.", home: 90, admit: 115, refer: 110, er: 125, other: 118 },
  { month: "มี.ค.", home: 95, admit: 130, refer: 105, er: 140, other: 110 },
  { month: "เม.ย.", home: 110, admit: 140, refer: 115, er: 150, other: 105 },
  { month: "พ.ค.", home: 100, admit: 125, refer: 120, er: 130, other: 115 },
  { month: "มิ.ย.", home: 88, admit: 110, refer: 125, er: 120, other: 122 },
  { month: "ก.ค.", home: 92, admit: 118, refer: 130, er: 125, other: 128 },
  { month: "ส.ค.", home: 98, admit: 122, refer: 128, er: 135, other: 120 },
  { month: "ก.ย.", home: 105, admit: 128, refer: 122, er: 130, other: 118 },
  { month: "ต.ค.", home: 112, admit: 135, refer: 115, er: 145, other: 110 },
  { month: "พ.ย.", home: 95, admit: 120, refer: 110, er: 128, other: 115 },
  { month: "ธ.ค.", home: 85, admit: 115, refer: 105, er: 120, other: 125 },
];

const FILTERS = [
  { key: "all", label: "ทั้งหมด" },
  { key: "home", label: "กลับบ้าน" },
  { key: "admit", label: "admit" },
  { key: "refer", label: "refer" },
  { key: "er", label: "ส่งต่อ ER" },
  { key: "other", label: "อื่นๆ" },
];

const totals = chartData.reduce(
  (acc, curr) => ({
    home: acc.home + curr.home,
    admit: acc.admit + curr.admit,
    refer: acc.refer + curr.refer,
    er: acc.er + curr.er,
    other: acc.other + curr.other,
  }),
  { home: 0, admit: 0, refer: 0, er: 0, other: 0 }
);

const chartConfig = {
  home: { label: "กลับบ้าน", color: "var(--chart-1)" },
  admit: { label: "admit", color: "var(--chart-2)" },
  refer: { label: "refer", color: "var(--chart-3)" },
  er: { label: "ส่งต่อER", color: "var(--chart-4)" },
  other: { label: "อื่นๆ", color: "var(--chart-5)" },
};

const PatientDischargeBarChart = () => {
  const isMobile = useIsMobile();
  const [filter, setFilter] = useState("all");

  const visibleKeys = filter === "all" ? Object.keys(chartConfig) : [filter];

  return (
    <Card className="pt-0">
      <CardHeader className="bg-secondary lg:pt-6 lg:pb-4 pt-4 pb-2 rounded-t-xl">
        <CardTitle className="flex flex-col lg:flex-row lg:justify-between gap-1">
          <div>สถานะการจำหน่าย</div>
          <div className="text-muted-foreground font-medium text-sm">
            กลับบ้าน {totals.home} คน | admit {totals.admit} คน | refer{" "}
            {totals.refer} คน | ส่งต่อER {totals.er} คน | อื่นๆ {totals.other}{" "}
            คน
          </div>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-[180px] py-0">
              <SelectValue placeholder="เลือกประเภท" />
            </SelectTrigger>
            <SelectContent>
              {FILTERS.map((f) => (
                <SelectItem key={f.key} value={f.key}>
                  {f.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className={isMobile ? "h-55 w-full" : "h-123 w-full"}
        >
          <BarChart
            data={chartData}
            // margin={{
            //   top: 10,
            //   right: isMobile ? 8 : 20,
            //   left: isMobile ? 0 : 0,
            //   bottom: isMobile ? 40 : 20,
            // }}
            // layout={isMobile ? "vertical" : "horizontal"}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              angle={isMobile ? -45 : 0}
              //   textAnchor={isMobile ? "end" : "middle"}
              //   height={isMobile ? 50 : 30}
              fontSize={isMobile ? 10 : 12}
            />
            {!isMobile && <YAxis />}
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{ fill: "hsl(var(--muted))" }}
            />
            <ChartLegend content={<ChartLegendContent />} />
            {visibleKeys.map((key, index) => {
              const isTop = index === visibleKeys.length - 1;
              return (
                <Bar
                  key={key}
                  dataKey={key}
                  stackId="a"
                  fill={chartConfig[key as keyof typeof chartConfig].color}
                  radius={isTop ? [4, 4, 0, 0] : [0, 0, 0, 0]}
                  // barSize={isMobile ? 18 : 26}
                />
              );
            })}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default PatientDischargeBarChart;
