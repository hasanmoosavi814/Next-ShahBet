import { ILeagueGridProps } from "@/types";

import LeagueCard from "./LeagueCard";

const LeagueGrid = ({ leagues }: ILeagueGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {leagues.slice(0, 15).map((item) => (
        <LeagueCard
          key={item.league.id}
          id={item.league.id}
          name={item.league.name}
          country={item.country.name}
        />
      ))}
    </div>
  );
};

export default LeagueGrid;
