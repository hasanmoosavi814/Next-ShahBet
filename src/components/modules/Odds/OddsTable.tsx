"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useGetOddsByFixtureIdQuery } from "@/services/footballApi";

import OddsTableSkeleton from "./OddsTableSkeleton";
import OddsTableEmpty from "./OddsTableEmtpy";
import OddsTableBody from "./OddsTableBody";

const OddsTable = ({ fixtureId }: { fixtureId: number }) => {
  const { data: bookmakers, isLoading } = useGetOddsByFixtureIdQuery(fixtureId);

  if (isLoading) return <OddsTableSkeleton />;
  if (!bookmakers || bookmakers.length === 0) return <OddsTableEmpty />;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Game Odds (Bookmakers)</CardTitle>
      </CardHeader>
      <CardContent>
        <OddsTableBody bookmakers={bookmakers} />
      </CardContent>
    </Card>
  );
};

export default OddsTable;
