"use client";

import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const MatchStatistics = ({ stats }: { stats: any[] }) => {
  if (!stats || stats.length < 2) return null;

  const [teamA, teamB] = stats;

  return (
    <Card className="bg-slate-800 text-white">
      <CardHeader>
        <CardTitle className="text-xl">📊 Match Statistics</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-muted-foreground">
              <th className="py-2 text-left">{teamA.team.name}</th>
              <th className="py-2 text-center text-muted-foreground">Stat</th>
              <th className="py-2 text-right">{teamB.team.name}</th>
            </tr>
          </thead>
          <tbody>
            {teamA.statistics.map((stat, i) => {
              const b = teamB.statistics.find((s) => s.type === stat.type);
              return (
                <tr key={i} className="border-t border-slate-700">
                  <td className="py-1">{stat.value ?? "-"}</td>
                  <td className="text-center">{stat.type}</td>
                  <td className="text-right">{b?.value ?? "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default MatchStatistics;
