import { SiteHeader } from "@/components/site-header";
import CardFilter from "@/components/opd/overview/card-filter";
import PatientBarChart from "@/components/charts/PatientBarChart";
import TypeComeBarChart from "@/components/charts/TypeComeBarChart";
import PatientDischargeBarChart from "@/components/charts/PatientDischargeBarChart";
import Top10DiseaseChart from "@/components/charts/Top10DiseaseChart";

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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4 lg:px-6">
              <div className="lg:col-span-2">
                <PatientBarChart />
              </div>
              <div className="lg:col-span-2">
                <TypeComeBarChart />
              </div>
              <div className="lg:col-span-3">
                <PatientDischargeBarChart />
              </div>
              <div className="lg:col-span-1">
                <Top10DiseaseChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OpdOverviewPage;
