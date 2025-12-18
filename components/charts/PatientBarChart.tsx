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
  { month: "ม.ค.", people: 85, visits: 120 },
  { month: "ก.พ.", people: 70, visits: 98 },
  { month: "มี.ค.", people: 92, visits: 140 },
  { month: "เม.ย.", people: 60, visits: 80 },
  { month: "พ.ค.", people: 78, visits: 110 },
  { month: "มิ.ย.", people: 85, visits: 120 },
  { month: "ก.ค.", people: 70, visits: 98 },
  { month: "ส.ค.", people: 92, visits: 140 },
  { month: "ก.ย.", people: 60, visits: 80 },
  { month: "ต.ค.", people: 78, visits: 110 },
  { month: "พ.ย.", people: 60, visits: 80 },
  { month: "ธ.ค.", people: 78, visits: 110 },
];
const totalPeople = chartData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.people;
}, 0);

const totalVisits = chartData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.visits;
}, 0);

const chartConfig = {
  people: {
    label: "จํานวนผู้ป่วย",
    color: "var(--chart-1)",
  },
  visits: {
    label: "จำนวนครั้ง",
    color: "var(--chart-2)",
  },
};

const PatientBarChart = () => {
  const isMobile = useIsMobile();
  return (
    <Card className="pt-0">
      <CardHeader className="bg-secondary lg:pt-6 lg:pb-4 pt-4 pb-2 rounded-t-xl">
        <CardTitle className="flex flex-col lg:flex-row lg:justify-between gap-1">
          <div>จำนวนผู้ป่วย</div>
          <div className="text-muted-foreground font-medium text-sm">
            {totalPeople} คน | {totalVisits} ครั้ง
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
              dataKey="people"
              fill="var(--color-people)"
              radius={isMobile ? [4, 4, 0, 0] : [6, 6, 0, 0]}
              //   barSize={isMobile ? 18 : 28}
            />
            <Bar
              dataKey="visits"
              fill="var(--color-visits)"
              radius={isMobile ? [4, 4, 0, 0] : [6, 6, 0, 0]}
              //   barSize={isMobile ? 18 : 28}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default PatientBarChart;
