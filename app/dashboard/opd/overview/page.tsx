import { SiteHeader } from "@/components/site-header";
import CardFilter from "@/components/opd/overview/card-filter";
import ChartJs from "@/components/opd/overview/chart-js";

const OpdOverviewPage = () => {
  return (
    <>
      <SiteHeader headerName="ผู้ป่วยนอก - Overview" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <h1 className="text-2xl font-semibold gap-4">
                {new Date().toLocaleString("th-TH", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </h1>
            </div>
            {/* Card Filter */}
            <div className="px-4 lg:px-6">
              <CardFilter />
            </div>
            {/* Chart */}
            <div className="grid grid-cols-2 gap-4">
              <div className="px-4 lg:px-6">
                <ChartJs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OpdOverviewPage;
