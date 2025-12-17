"use client";

import th from "antd/es/date-picker/locale/th_TH";
import dayTh from "dayjs/locale/th";
import dayjs from "dayjs";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { DatePicker, ConfigProvider, Grid } from "antd";
import { format } from "date-fns";
import { Dispatch, SetStateAction } from "react";

const { useBreakpoint } = Grid;

dayjs.extend(buddhistEra);
dayjs.locale(dayTh);

const buddhistLocale: typeof th = {
  ...th,
  lang: {
    ...th.lang,
    fieldDateFormat: "DD MMM BBBB",
    fieldDateTimeFormat: "BBBB-MM-DD HH:mm:ss",
    yearFormat: "BBBB",
    cellYearFormat: "BBBB",
  },
};

const { RangePicker } = DatePicker;
const DateRangePicker = ({
  id,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: {
  id: string;
  startDate: string | null;
  endDate: string | null;
  onStartDateChange: Dispatch<SetStateAction<string | null>>;
  onEndDateChange: Dispatch<SetStateAction<string | null>>;
}) => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  return (
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            // ใช้ design token ปรับขนาดให้เหมาะกับ mobile
            controlHeight: isMobile ? 40 : 32,
          },
        },
      }}
    >
      <RangePicker
        id={id}
        locale={buddhistLocale}
        size="large"
        className="w-full"
        classNames={{
          popup: {
            root: isMobile ? "mobile-datepicker-popup" : "",
          },
        }}
        separator=" ถึง "
        onChange={(date, dateString) => {
          onStartDateChange(format(date?.[0]?.toDate() ?? "", "yyyy-MM-dd"));
          onEndDateChange(format(date?.[1]?.toDate() ?? "", "yyyy-MM-dd"));
        }}
        defaultValue={[
          dayjs(startDate, "YYYY-MM-DD"),
          dayjs(endDate, "YYYY-MM-DD"),
        ]}
      />
    </ConfigProvider>
  );
};
export default DateRangePicker;
