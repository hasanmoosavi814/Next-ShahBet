import { IEventSectionProps } from "@/types";

import EventListItem from "./EventListItem";

const EventSection = ({ title, icon, events, type }: IEventSectionProps) => {
  if (events.length === 0) return null;

  return (
    <div>
      <h3 className="text-xl font-bold mb-2 text-white">
        {icon} {title}
      </h3>
      <ul className="space-y-1">
        {events.map((event, i) => (
          <EventListItem
            key={i}
            minute={event.time.elapsed}
            player={event.player.name}
            team={event.team.name}
            assist={type === "goal" ? event.assist?.name : undefined}
            detail={type === "card" ? event.detail : undefined}
          />
        ))}
      </ul>
    </div>
  );
};

export default EventSection;
