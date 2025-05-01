import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ILeagueCardProps } from "@/types";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";

const LeagueCard = ({ id, name, country }: ILeagueCardProps) => (
  <Link href={`/leagues/${id}`}>
    <Card className="rounded-xl border border-slate-800 bg-gradient-to-br from-[#1e293b] to-[#0f172a] hover:scale-[1.02] hover:shadow-lg transition-all text-white cursor-pointer">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-tight">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Country:</span>
        <Badge variant="secondary" className="text-xs px-2 py-1">
          {country}
        </Badge>
      </CardContent>
    </Card>
  </Link>
);

export default LeagueCard;
