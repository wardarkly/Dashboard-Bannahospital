"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const CardFilter = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [dateRange, setDateRange] = useState("16/12/2025 - 16/12/2025");
  const [department, setDepartment] = useState("all");
  const [room, setRoom] = useState("all");
  const [clinic, setClinic] = useState("all");
  const [treatmentRights, setTreatmentRights] = useState("all");
  const handleSearch = () => {
    console.log("Searching with filters:", {
      dateRange,
      department,
      room,
      clinic,
      treatmentRights,
    });
  };

  return (
    <Card className="w-full border-border bg-card pt-0">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
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
      </button>

      {/* Filter Content */}
      {isExpanded && (
        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Date Range */}
            <div className="space-y-2">
              <Label
                htmlFor="date-range"
                className="text-sm font-medium text-foreground"
              >
                ช่วงวันที่
              </Label>
              <Input
                id="date-range"
                type="text"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                placeholder="เลือกช่วงวันที่"
                className="h-10 border-input bg-background"
              />
            </div>

            {/* Department */}
            <div className="space-y-2">
              <Label
                htmlFor="department"
                className="text-sm font-medium text-foreground"
              >
                แผนก
              </Label>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger
                  id="department"
                  className="h-10 w-full border-input bg-background"
                >
                  <SelectValue placeholder="เลือกแผนก" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">แผนกทั้งหมด</SelectItem>
                  <SelectItem value="cardiology">แผนกหัวใจ</SelectItem>
                  <SelectItem value="orthopedics">แผนกกระดูก</SelectItem>
                  <SelectItem value="pediatrics">แผนกเด็ก</SelectItem>
                  <SelectItem value="emergency">แผนกฉุกเฉิน</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Examination Room */}
            <div className="space-y-2">
              <Label
                htmlFor="room"
                className="text-sm font-medium text-foreground"
              >
                ห้องตรวจ
              </Label>
              <Select value={room} onValueChange={setRoom}>
                <SelectTrigger
                  id="room"
                  className="h-10 w-full border-input bg-background"
                >
                  <SelectValue placeholder="เลือกห้องตรวจ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ห้องตรวจทั้งหมด</SelectItem>
                  <SelectItem value="room-1">ห้องตรวจ 1</SelectItem>
                  <SelectItem value="room-2">ห้องตรวจ 2</SelectItem>
                  <SelectItem value="room-3">ห้องตรวจ 3</SelectItem>
                  <SelectItem value="room-4">ห้องตรวจ 4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clinic */}
            <div className="space-y-2">
              <Label
                htmlFor="clinic"
                className="text-sm font-medium text-foreground"
              >
                คลินิก
              </Label>
              <Select value={clinic} onValueChange={setClinic}>
                <SelectTrigger
                  id="clinic"
                  className="h-10 w-full border-input bg-background"
                >
                  <SelectValue placeholder="เลือกคลินิก" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">คลินิกทั้งหมด</SelectItem>
                  <SelectItem value="general">คลินิกทั่วไป</SelectItem>
                  <SelectItem value="specialist">คลินิกเฉพาะทาง</SelectItem>
                  <SelectItem value="dental">คลินิกทันตกรรม</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Treatment Rights - Full Width */}
          <div className="mt-6 space-y-2">
            <Label
              htmlFor="treatment-rights"
              className="text-sm font-medium text-foreground"
            >
              สิทธิการรักษา
            </Label>
            <Select value={treatmentRights} onValueChange={setTreatmentRights}>
              <SelectTrigger
                id="treatment-rights"
                className="h-10 w-full border-input bg-background md:w-1/2 lg:w-1/4"
              >
                <SelectValue placeholder="เลือกสิทธิการรักษา" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">สิทธิการรักษาทั้งหมด</SelectItem>
                <SelectItem value="social-security">ประกันสังคม</SelectItem>
                <SelectItem value="universal-coverage">บัตรทอง (UC)</SelectItem>
                <SelectItem value="government">สิทธิข้าราชการ</SelectItem>
                <SelectItem value="private">ประกันเอกชน</SelectItem>
                <SelectItem value="self-pay">จ่ายเอง</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleSearch}
              className="h-11 w-full gap-2 md:w-auto md:px-16"
            >
              <Search className="h-4 w-4" />
              ค้นหา
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
export default CardFilter;
