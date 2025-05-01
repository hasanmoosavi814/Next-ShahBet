import { ReactNode } from "react";

export interface IFeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  index: number;
}

export interface ILeagueCardProps {
  id: number;
  name: string;
  country: string;
}

export interface ILeagueGridProps {
  leagues: {
    league: { id: number; name: string };
    country: { name: string };
  }[];
}

export interface IMatchCardProps {
  match: any;
  index: number;
}

export interface ISeasonProps {
  value: number;
  onChange: (season: number) => void;
  options?: number[];
}

export interface IFixtureScroRowProps {
  homeTeam: { name: string; logo: string };
  awayTeam: { name: string; logo: string };
  score?: ReactNode;
}

export interface IFixtureCountDownProps {
  matchStart: string;
}

export interface IFixtureDetailsCardProps {
  fixtureId: number;
}

export interface IFixtureSidebarProps {
  home: { name: string; logo: string };
  away: { name: string; logo: string };
  status: string;
  date: string;
}

export interface IFixtureTabsProps {
  fixtureId: number;
  home: { id: number; name: string };
  away: { id: number; name: string };
}

export interface IEventListItemProps {
  minute: number;
  player: string;
  team: string;
  detail?: string;
  assist?: string | null;
}

export interface IEventSectionProps {
  title: string;
  icon: string;
  events: any[];
  type: "goal" | "card" | "subst";
}

export interface IMatchEventProps {
  time: { elapsed: number };
  type: string;
  detail: string;
  team: { name: string };
  player: { name: string };
  assist?: { name: string | null };
}

export interface IOddsTableBodyProps {
  bookmakers: any[];
}

export interface ITeamLastMatchRowProps {
  match: any;
  teamId: number;
}

export interface ITeamMatchesListProps {
  teamId: number;
  teamName: string;
}
