"use client";

import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectTrigger, SelectValue } from "@/components/ui/select";
import { IMatchHeaderProps } from "@/types";

const MatchHeader = ({
  season,
  onSeasonChange,
  seasons,
}: IMatchHeaderProps) => (
  <div className="flex justify-between items-center">
    <h1 className="text-2xl font-bold text-white">⚽ League Matches</h1>
    <Select
      onValueChange={(val) => onSeasonChange(Number(val))}
      defaultValue={season.toString()}
    >
      <SelectTrigger className="w-[130px] bg-slate-800 border-none text-white">
        <SelectValue placeholder="Season" />
      </SelectTrigger>
      <SelectContent className="bg-slate-800 text-white">
        {seasons.map((s) => (
          <SelectItem key={s} value={s.toString()}>
            {s}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default MatchHeader;
