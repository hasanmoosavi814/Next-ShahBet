"use client";

import { useGetLeaguesQuery } from "@/services/footballApi";

import LeagueSkeleton from "../modules/League/LeagueSkeleton";
import LeagueGrid from "../modules/League/LeagueGrid";

const HomeLeague = () => {
  const { data, error, isLoading } = useGetLeaguesQuery();

  if (isLoading) return <LeagueSkeleton />;

  if (error)
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        ❌ Failed to load league data.
      </div>
    );

  if (!data) return null;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">
        🌍 Football Leagues
      </h1>
      <LeagueGrid leagues={data} />
    </div>
  );
};

export default HomeLeague;
