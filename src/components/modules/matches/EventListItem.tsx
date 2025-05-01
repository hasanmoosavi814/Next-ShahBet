import { IEventListItemProps } from "@/types";
import { Badge } from "@/components/ui/badge";

const EventListItem = ({
  minute,
  player,
  team,
  detail,
  assist,
}: IEventListItemProps) => (
  <li className="flex justify-between bg-slate-800 p-2 rounded-md text-sm">
    <span className="font-medium text-white">{minute}'</span>
    <span className="text-white">
      {player} ({team})
    </span>
    {assist && (
      <span className="text-xs text-muted-foreground">assist: {assist}</span>
    )}
    {detail && <Badge variant="secondary">{detail}</Badge>}
  </li>
);

export default EventListItem;
