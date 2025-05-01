import { Badge } from "@/components/ui/badge";

const FixtureStatusBadge = ({ status }: { status: string }) => (
  <Badge variant="secondary">Status: {status}</Badge>
);

export default FixtureStatusBadge;
