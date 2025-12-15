import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

import data from "./data.json";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader headerName="Overview" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              {/* <h1 className="text-2xl font-semibold">Overview</h1> */}
              <h1 className="text-2xl font-semibold">วันจันทร์ที่ 15 ธันวาคม 2568</h1>
              {/* <p className="text-muted-foreground">วันจันทร์ที่ 15 ธันวาคม 2568</p> */}
            </div>
            <SectionCards />
            {/* <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
