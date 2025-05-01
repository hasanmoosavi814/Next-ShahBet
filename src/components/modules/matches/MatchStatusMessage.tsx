import { IMatchStatusMessageProps } from "@/types";

const MatchStatusMessage = ({ isLoading, error }: IMatchStatusMessageProps) => {
  if (isLoading)
    return <p className="text-muted-foreground">Loading fixtures...</p>;
  if (error) return <p className="text-red-500">Failed to load fixtures.</p>;
  return null;
};

export default MatchStatusMessage;
