import { Trophy, BarChart3, Newspaper } from "lucide-react";

export const featureCards = [
  {
    title: "All Leagues",
    description:
      "Explore global football leagues, live standings & upcoming matches.",
    icon: <Trophy className="w-8 h-8 text-green-400 mb-3" />,
    href: "/leagues",
  },
  {
    title: "Match Insights",
    description:
      "Analyze recent forms, goals, cards & player lineups in detail.",
    icon: <BarChart3 className="w-8 h-8 text-green-400 mb-3" />,
    href: "/leagues/39",
  },
  {
    title: "Odds & Articles",
    description: "View odds from top bookmakers and related football news.",
    icon: <Newspaper className="w-8 h-8 text-green-400 mb-3" />,
    href: "/fixtures/135",
  },
];
