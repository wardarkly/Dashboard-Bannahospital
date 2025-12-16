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
import {
  Check,
  ChevronDown,
  ChevronsUpDown,
  ChevronUp,
  Search,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

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
  const [dateRange, setDateRange] = useState("16/12/2025 - 16/12/2025");
  const [depOpen, setDepOpen] = useState(false);
  const [department, setDepartment] = useState("all");
  const [roomOpen, setRoomOpen] = useState(false);
  const [room, setRoom] = useState("all");
  const [clinicOpen, setClinicOpen] = useState(false);
  const [clinic, setClinic] = useState("all");
  const [pttypeOpen, setPttypeOpen] = useState(false);
  const [pttype, setPttype] = useState("all");
  console.log(department);
  const handleSearch = () => {
    console.log("Searching with filters:", {
      dateRange,
      department,
      room,
      clinic,
      pttype,
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
        <div className="p-6 py-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              <Popover open={depOpen} onOpenChange={setDepOpen}>
                <PopoverTrigger id="department" asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={depOpen}
                    className="h-10 w-full border-input bg-background justify-between"
                  >
                    {department
                      ? departments.find((value) => value.value === department)
                          ?.label
                      : "เลือกแผนก..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[100%] p-0">
                  <Command>
                    <CommandInput placeholder="เลือกแผนก..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>ไม่พบข้อมูล</CommandEmpty>
                      <CommandGroup>
                        {departments.map((dep) => (
                          <CommandItem
                            key={dep.value}
                            value={dep.label}
                            onSelect={(currentValue) => {
                              console.log(currentValue);
                              setDepartment(
                                currentValue === department
                                  ? ""
                                  : departments.find(
                                      (depval) => depval.label === currentValue
                                    )?.value ?? ""
                              );
                              setDepOpen(false);
                            }}
                          >
                            {dep.label}
                            <Check
                              className={cn(
                                "ml-auto",
                                department === dep.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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

            {/* Treatment Rights - Full Width */}
            <div className="space-y-2">
              <Label
                htmlFor="treatment-rights"
                className="text-sm font-medium text-foreground"
              >
                สิทธิการรักษา
              </Label>
              <Select value={pttype} onValueChange={setPttype}>
                <SelectTrigger
                  id="treatment-rights"
                  className="h-10 w-full border-input bg-background"
                >
                  <SelectValue placeholder="เลือกสิทธิการรักษา" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">สิทธิการรักษาทั้งหมด</SelectItem>
                  <SelectItem value="social-security">ประกันสังคม</SelectItem>
                  <SelectItem value="universal-coverage">
                    บัตรทอง (UC)
                  </SelectItem>
                  <SelectItem value="government">สิทธิข้าราชการ</SelectItem>
                  <SelectItem value="private">ประกันเอกชน</SelectItem>
                  <SelectItem value="self-pay">จ่ายเอง</SelectItem>
                </SelectContent>
              </Select>
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
      )}
    </Card>
  );
};
export default CardFilter;
