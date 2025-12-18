"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DiseaseRow = {
  name: string;
  value: number;
};

const DISEASE_COLORS = [
  "bg-violet-500",
  "bg-emerald-400",
  "bg-sky-400",
  "bg-red-400",
  "bg-lime-500",
  "bg-yellow-400",
  "bg-rose-500",
  "bg-emerald-700",
  "bg-blue-500",
  "bg-slate-600",
];

const data: DiseaseRow[] = [
  {
    name: "Essential (primary) hypertension",
    value: 32404,
  },
  {
    name: "Laboratory examination",
    value: 22871,
  },
  {
    name: "Chronic kidney disease, stage 5",
    value: 20556,
  },
  {
    name: "NIDDM Without complications",
    value: 19735,
  },
  {
    name: "Attention to surgical dressings and sutures",
    value: 11734,
  },
  {
    name: "ลมปลายปัตคาดขา",
    value: 10804,
  },
  {
    name: "ลมปลายปัตคาดบ่า",
    value: 8789,
  },
  {
    name: "Acute nasopharyngitis [common cold]",
    value: 7776,
  },
  {
    name: "General medical examination",
    value: 6941,
  },
  {
    name: "ลมปลายปัตคาดสัญญาณ I หลัง",
    value: 6834,
  },
];

const maxValue = Math.max(...data.map((d) => d.value));

const Top10DiseaseChart = () => {
  return (
    <Card className="pt-0">
      <CardHeader className="bg-secondary lg:pt-6 lg:pb-4 pt-4 pb-2 rounded-t-xl">
        <CardTitle className="text-base">โรคผู้ป่วยนอก 10 อันดับ</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 ">
        {data.map((item, index) => {
          const percent = (item.value / maxValue) * 100;

          return (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="text-muted-foreground">
                  {item.value.toLocaleString()}
                </span>
              </div>

              <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    DISEASE_COLORS[index]
                  )}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
export default Top10DiseaseChart;
