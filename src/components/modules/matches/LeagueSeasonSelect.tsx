"use client";

import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@/components/ui/select";
import { ISeasonProps } from "@/types";

const LeagueSeasonSelect = ({
  value,
  onChange,
  options = [2024, 2023, 2022, 2021],
}: ISeasonProps) => (
  <Select
    onValueChange={(val) => onChange(Number(val))}
    defaultValue={value.toString()}
  >
    <SelectTrigger className="w-[130px] bg-slate-800 border-none text-white">
      <SelectValue placeholder="Season" />
    </SelectTrigger>
    <SelectContent className="bg-slate-800 text-white">
      {options.map((year) => (
        <SelectItem key={year} value={year.toString()}>
          {year}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default LeagueSeasonSelect;
