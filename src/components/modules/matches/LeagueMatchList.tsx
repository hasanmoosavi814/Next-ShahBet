"use client";

import { useGetFixturesByLeagueQuery } from "@/services/footballApi";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useParams } from "next/navigation";
import { useState } from "react";

import LeagueSeasonSelect from "./LeagueSeasonSelect";
import LeagueMatchCard from "./LeaguMatchCard";

const LeagueMatchList = () => {
  const { id } = useParams();
  const leagueId = Number(id);
  const [season, setSeason] = useState<number>(2023);

  const {
    data: fixtures,
    isLoading,
    error,
  } = useGetFixturesByLeagueQuery({ leagueId, season });

  return (
    <TooltipProvider>
      <section className="p-6 max-w-5xl mx-auto space-y-6">
        {/* Header & Season Selector */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">⚽ League Matches</h1>
          <LeagueSeasonSelect value={season} onChange={setSeason} />
        </div>

        {/* Loading & Error States */}
        {isLoading && (
          <p className="text-muted-foreground">Loading fixtures...</p>
        )}
        {error && <p className="text-red-500">Failed to load fixtures.</p>}
        {!fixtures?.length && !isLoading && !error && (
          <p className="text-muted-foreground">No fixtures available.</p>
        )}

        {/* Match Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fixtures?.slice(0, 20).map((match, i) => (
            <LeagueMatchCard key={match.fixture.id} match={match} index={i} />
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
};

export default LeagueMatchList;
