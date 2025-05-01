"use client";

import { useParams } from "next/navigation";
import FootballProvider from "@/providers/FootballProvider";
import FixtureDetails from "../modules/Fixture/FixtureDetails";

export default function FixturePage() {
  const { id } = useParams();
  const fixtureId = Number(id);

  return (
    <FootballProvider>
      <FixtureDetails fixtureId={fixtureId} />
    </FootballProvider>
  );
}
