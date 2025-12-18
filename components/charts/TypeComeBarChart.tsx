"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const chartData = [
  { month: "ม.ค.", appoint: 85, walkIn: 120 },
  { month: "ก.พ.", appoint: 70, walkIn: 98 },
  { month: "มี.ค.", appoint: 92, walkIn: 140 },
  { month: "เม.ย.", appoint: 60, walkIn: 80 },
  { month: "พ.ค.", appoint: 78, walkIn: 110 },
  { month: "มิ.ย.", appoint: 85, walkIn: 120 },
  { month: "ก.ค.", appoint: 70, walkIn: 98 },
  { month: "ส.ค.", appoint: 92, walkIn: 140 },
  { month: "ก.ย.", appoint: 60, walkIn: 80 },
  { month: "ต.ค.", appoint: 78, walkIn: 110 },
  { month: "พ.ย.", appoint: 60, walkIn: 80 },
  { month: "ธ.ค.", appoint: 78, walkIn: 110 },
];

const totalAppoint = chartData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.appoint;
}, 0);

const totalWalkIn = chartData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.walkIn;
}, 0);

const chartConfig = {
  appoint: {
    label: "นัดมา",
    color: "var(--chart-3)",
  },
  walkIn: {
    label: "Walk In",
    color: "var(--chart-4)",
  },
};

const TypeComeBarChart = () => {
  const isMobile = useIsMobile();
  return (
    <Card className="pt-0">
      <CardHeader className="bg-secondary lg:pt-6 lg:pb-4 pt-4 pb-2 rounded-t-xl">
        <CardTitle className="flex flex-col lg:flex-row lg:justify-between gap-1">
          <div>ประเภทการมาผู้ป่วย</div>
          <div className="text-muted-foreground font-medium text-sm">
            มีนัด {totalAppoint} คน | Walk-in {totalWalkIn} คน
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className={isMobile ? "h-55 w-full" : "h-80 w-full"}
        >
          <BarChart
            data={chartData}
            // margin={{
            //   top: 10,
            //   right: isMobile ? 8 : 20,
            //   left: isMobile ? 0 : 0,
            //   bottom: isMobile ? 40 : 20,
            // }}
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
            <Bar
              dataKey="appoint"
              fill="var(--color-appoint)"
              radius={isMobile ? [4, 4, 0, 0] : [6, 6, 0, 0]}
              //   barSize={isMobile ? 18 : 28}
            />
            <Bar
              dataKey="walkIn"
              fill="var(--color-walkIn)"
              radius={isMobile ? [4, 4, 0, 0] : [6, 6, 0, 0]}
              //   barSize={isMobile ? 18 : 28}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default TypeComeBarChart;
