"use client";

import { IMatchEventProps } from "@/types";

import EventSection from "./EventSection";

const MatchEvents = ({ events }: { events: IMatchEventProps[] }) => {
  const goals = events.filter((e) => e.type === "Goal");
  const cards = events.filter((e) => e.type === "Card");
  const subs = events.filter((e) => e.type.toLowerCase() === "subst");

  return (
    <div className="space-y-6">
      <EventSection title="Goals" icon="⚽" events={goals} type="goal" />
      <EventSection title="Cards" icon="🟨" events={cards} type="card" />
      <EventSection
        title="Substitutions"
        icon="🔁"
        events={subs}
        type="subst"
      />
    </div>
  );
};

export default MatchEvents;
