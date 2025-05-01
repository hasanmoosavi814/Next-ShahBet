"use client";

import FootballProvider from "@/providers/FootballProvider";
import HomeLeague from "@/components/templates/HomeLeague";

export default function Page() {
  return (
    <FootballProvider>
      <HomeLeague />
    </FootballProvider>
  );
}
