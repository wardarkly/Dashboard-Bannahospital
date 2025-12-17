"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import Combobox from "@/components/combobox";
import DateRangePicker from "@/components/daterange-picker";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { format, subDays } from "date-fns";

// Data for Combobox
const departments = [
  { value: "all", label: "แผนกทั้งหมด" },
  { value: "cardiology", label: "แผนกหัวใจ" },
  { value: "orthopedics", label: "แผนกกระดูก" },
  { value: "pediatrics", label: "แผนกเด็ก" },
  { value: "emergency", label: "แผนกฉุกเฉิน" },
];
const rooms = [
  { value: "all", label: "ห้องตรวจทั้งหมด" },
  { value: "room-1", label: "ห้องตรวจ 1" },
  { value: "room-2", label: "ห้องตรวจ 2" },
  { value: "room-3", label: "ห้องตรวจ 3" },
  { value: "room-4", label: "ห้องตรวจ 4" },
];
const clinics = [
  { value: "all", label: "คลินิกทั้งหมด" },
  { value: "general", label: "คลินิกทั่วไป" },
  { value: "specialist", label: "คลินิกเฉพาะทาง" },
  { value: "dental", label: "คลินิกทันตกรรม" },
];
const pttypes = [
  { value: "all", label: "สิทธิการรักษาทั้งหมด" },
  { value: "social-security", label: "ประกันสังคม" },
  { value: "universal-coverage", label: "บัตรทอง (UC)" },
  { value: "government", label: "สิทธิข้าราชการ" },
  { value: "private", label: "ประกันเอกชน" },
  { value: "self-pay", label: "จ่ายเอง" },
];

const CardFilter = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [startDate, setStartDate] = useState<string | null>(
    format(new Date(), "yyyy-MM-dd")
  );
  const [endDate, setEndDate] = useState<string | null>(
    format(new Date(), "yyyy-MM-dd")
  );
  const [department, setDepartment] = useState("all");
  const [room, setRoom] = useState("all");
  const [clinic, setClinic] = useState("all");
  const [pttype, setPttype] = useState("all");
  const handleSearch = () => {
    console.log("Searching with filters:", {
      startDate,
      endDate,
      department,
      room,
      clinic,
      pttype,
    });
  };

  return (
    <Card className="w-full border-border bg-card pt-0">
      <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
        {/* Header */}
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size={"lg"}
            className="flex w-full items-center justify-between border-b border-border bg-muted/30 px-6 py-4 text-left transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <h2 className="text-sm font-medium text-foreground">
                Filter / กรองข้อมูล
              </h2>
            </div>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4">
          {/* Filter Content */}
          <div className="p-6 py-0">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Date Range */}
              <div className="space-y-2">
                <Label
                  htmlFor="date-range"
                  className="text-sm font-medium text-foreground"
                >
                  ช่วงวันที่
                </Label>
                <DateRangePicker
                  id="date-range"
                  startDate={startDate}
                  endDate={endDate}
                  onStartDateChange={setStartDate}
                  onEndDateChange={setEndDate}
                />
              </div>

              {/* Department */}
              <div className="">
                <Combobox
                  label="แผนก"
                  htmlFor="department"
                  dataLists={departments}
                  value={department}
                  setValue={setDepartment}
                />
              </div>

              {/* Examination Room */}
              <div className="">
                <Combobox
                  label="ห้องตรวจ"
                  htmlFor="room"
                  dataLists={rooms}
                  value={room}
                  setValue={setRoom}
                />
              </div>

              {/* Clinic */}
              <div className="">
                <Combobox
                  label="คลินิก"
                  htmlFor="clinic"
                  dataLists={clinics}
                  value={clinic}
                  setValue={setClinic}
                />
              </div>

              {/* Treatment Rights - Full Width */}
              <div className="">
                <Combobox
                  label="สิทธิการรักษา"
                  htmlFor="pttype"
                  dataLists={pttypes}
                  value={pttype}
                  setValue={setPttype}
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-4 flex justify-center">
              <Button
                onClick={handleSearch}
                className="h-11 w-full gap-2 md:w-auto md:px-16"
              >
                <Search className="h-4 w-4" />
                ค้นหา
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
export default CardFilter;
