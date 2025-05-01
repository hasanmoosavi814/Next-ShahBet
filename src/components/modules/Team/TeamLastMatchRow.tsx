import { ITeamLastMatchRowProps } from "@/types";
import { Badge } from "@/components/ui/badge";

const getResult = (match: any, teamId: number) => {
  const isHome = match.teams.home.id === teamId;
  const goalsFor = isHome ? match.goals.home : match.goals.away;
  const goalsAgainst = isHome ? match.goals.away : match.goals.home;

  if (goalsFor > goalsAgainst) return "Win";
  if (goalsFor < goalsAgainst) return "Loss";
  return "Draw";
};

const TeamLastMatchRow = ({ match, teamId }: ITeamLastMatchRowProps) => {
  const opponent =
    match.teams.home.id === teamId ? match.teams.away : match.teams.home;

  const result = getResult(match, teamId);

  const badgeVariant =
    result === "Win"
      ? "default"
      : result === "Draw"
      ? "secondary"
      : "destructive";

  return (
    <div className="flex justify-between text-sm">
      <span>{opponent.name}</span>
      <span className="text-muted-foreground">
        {new Date(match.fixture.date).toLocaleDateString()}
      </span>
      <Badge variant={badgeVariant}>
        {match.goals.home} - {match.goals.away} ({result})
      </Badge>
    </div>
  );
};

export default TeamLastMatchRow;
