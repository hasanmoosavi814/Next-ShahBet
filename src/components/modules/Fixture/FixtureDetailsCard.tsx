"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IFixtureDetailsCardProps } from "@/types";
import { useGetFixtureByIdQuery } from "@/services/footballApi";
import { Skeleton } from "@/components/ui/skeleton";

import FixtureStatusBadge from "./FixtureStatusBadge";
import FixtureCountdown from "./FixtureCountdown";
import FixtureScoreRow from "./FixtureScoreRow";

const FixtureDetailsCard = ({ fixtureId }: IFixtureDetailsCardProps) => {
  const { data: fixture, isLoading } = useGetFixtureByIdQuery(fixtureId);

  if (isLoading || !fixture) {
    return <Skeleton className="h-32 w-full rounded-xl" />;
  }

  const matchStarted = fixture.fixture.status.elapsed !== null;
  const score = matchStarted
    ? `${fixture.goals.home} - ${fixture.goals.away}`
    : undefined;

  return (
    <Card className="rounded-xl shadow-sm">
      <CardHeader>
        <CardTitle>
          <FixtureScoreRow
            homeTeam={fixture.teams.home}
            awayTeam={fixture.teams.away}
            score={
              matchStarted ? (
                score
              ) : (
                <FixtureCountdown matchStart={fixture.fixture.date} />
              )
            }
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <FixtureStatusBadge status={fixture.fixture.status.long} />
      </CardContent>
    </Card>
  );
};

export default FixtureDetailsCard;
