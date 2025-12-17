"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Combobox = ({
  label,
  htmlFor,
  dataLists,
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  htmlFor: string;
  dataLists: { label: string; value: string }[];
}) => {
  const [Open, setOpen] = useState(false);
//   const [value, setValue] = useState("all");
  return (
    <div className="space-y-2">
      <Label
        htmlFor={htmlFor}
        className="text-sm font-medium text-foreground"
      >
        {label}
      </Label>
      <Popover open={Open} onOpenChange={setOpen}>
        <PopoverTrigger id={htmlFor} asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={Open}
            className="h-10 w-full border-input bg-background justify-between"
          >
            {dataLists
              ? dataLists.find((dataList) => dataList.value === value)?.label
              : "เลือกแผนก..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
          <Command>
            <CommandInput placeholder="เลือกแผนก..." className="h-9" />
            <CommandList>
              <CommandEmpty>ไม่พบข้อมูล</CommandEmpty>
              <CommandGroup>
                {dataLists.map((list) => (
                  <CommandItem
                    key={list.value}
                    value={list.label}
                    onSelect={(currentValue) => {
                      setValue(
                        currentValue === value
                          ? ""
                          : dataLists.find(
                              (dataList) => dataList.label === currentValue
                            )?.value ?? ""
                      );
                      setOpen(false);
                    }}
                  >
                    {list.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === list.value ? "opacity-100" : "opacity-0"
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
  );
};
export default Combobox;
