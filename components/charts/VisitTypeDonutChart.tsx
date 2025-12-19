"use client";

import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useMemo, useState } from "react";

const visitTypeData = [
  { name: "walkin", visitors: 280600 },
  { name: "appointment", visitors: 137023 },
  { name: "refer", visitors: 3281 },
  { name: "other", visitors: 172490 },
];

const chartConfig = {
  visitors: {
    label: "จำนวนคนไข้",
  },
  walkin: {
    label: "มาเอง",
    color: "var(--chart-1)",
  },
  appointment: {
    label: "มาตามนัด",
    color: "var(--chart-2)",
  },
  refer: {
    label: "Refer",
    color: "var(--chart-3)",
  },
  other: {
    label: "อื่น ๆ",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const dataNormalize = visitTypeData.map((item, index) => ({
  ...item,
  fill: `hsl(${(index * 47) % 360} 70% 55%)`,
}));

const VisitTypeDonutChart = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const total = useMemo(
    () => dataNormalize.reduce((sum, d) => sum + d.visitors, 0),
    []
  );

  const activeData = activeIndex !== null ? dataNormalize[activeIndex] : null;

  const percent = activeData
    ? ((activeData.visitors / total) * 100).toFixed(1)
    : null;
  return (
    <Card className="pt-0">
      <CardHeader className="bg-secondary lg:pt-6 lg:pb-4 pt-4 pb-2 rounded-t-xl">
        <CardTitle className="flex flex-col lg:flex-row lg:justify-between gap-1">
          <div>ประเภทการมา</div>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex justify-center">
        <ChartContainer
          config={chartConfig}
          className={isMobile ? "h-70 w-full" : "h-80 w-full"}
        >
          <PieChart>
            <Pie
              data={dataNormalize}
              dataKey="visitors"
              nameKey="name"
              legendType="circle"
              label
              innerRadius={isMobile ? 40 : 60}
              outerRadius={isMobile ? 100 : 120}
              paddingAngle={2}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground lg:text-3xl text-xl font-bold"
                        >
                          {activeData
                            ? activeData.visitors.toLocaleString()
                            : total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground max-md:text-xs"
                        >
                          {activeData ? `${percent} %` : "ทั้งหมด"}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />

            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              verticalAlign="top"
              className="lg:text-xl"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default VisitTypeDonutChart;
