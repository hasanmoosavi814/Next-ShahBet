import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const OddsTableEmpty = () => (
  <Card>
    <CardHeader>
      <CardTitle>No odds available for this match.</CardTitle>
    </CardHeader>
  </Card>
);

export default OddsTableEmpty;
