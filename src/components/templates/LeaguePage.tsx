"use client";

import FootballProvider from "@/providers/FootballProvider";
import LeagueMatchList from "../modules/matches/LeagueMatchList";

const LeaguePage = () => {
  return (
    <FootballProvider>
      <LeagueMatchList />
    </FootballProvider>
  );
};

export default LeaguePage;
