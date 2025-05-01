"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetLastMatchesByTeamQuery } from "@/services/footballApi";
import { ITeamMatchesListProps } from "@/types";

import TeamMatchesSkeleton from "./TeamMatchesSkeleton";
import TeamLastMatchRow from "./TeamLastMatchRow";

const TeamLastMatchesList = ({ teamId, teamName }: ITeamMatchesListProps) => {
  const { data: matches, isLoading } = useGetLastMatchesByTeamQuery(teamId);

  if (isLoading) return <TeamMatchesSkeleton />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">
          Last 10 Matches – {teamName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {matches?.map((match) => (
          <TeamLastMatchRow
            key={match.fixture.id}
            match={match}
            teamId={teamId}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamLastMatchesList;
