"use client";

import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent } from "@/components/ui/card";
import { IMatchCardProps } from "@/types";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

const LeagueMatchCard = ({ match, index }: IMatchCardProps) => (
  <motion.div
    custom={index}
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
  >
    <Link href={`/fixtures/${match.fixture.id}`}>
      <Card className="bg-slate-800 hover:bg-slate-700 transition border border-slate-700 cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="text-base text-white flex justify-between items-center">
            {/* Home Team */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2">
                  <Image
                    src={match.teams.home.logo}
                    alt={match.teams.home.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                    unoptimized
                  />
                  {match.teams.home.name}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>

            <span className="text-muted-foreground">vs</span>

            {/* Away Team */}
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2">
                  <Image
                    src={match.teams.away.logo}
                    alt={match.teams.away.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                    unoptimized
                  />
                  {match.teams.away.name}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Away</p>
              </TooltipContent>
            </Tooltip>
          </CardTitle>
        </CardHeader>

        <CardContent className="text-xs text-muted-foreground flex justify-between items-center">
          <span>{new Date(match.fixture.date).toLocaleString()}</span>
          <Badge
            variant={match.fixture.status.elapsed ? "destructive" : "secondary"}
            className="text-[10px]"
          >
            {match.fixture.status.elapsed
              ? `${match.fixture.status.elapsed}’`
              : "Upcoming"}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
);

export default LeagueMatchCard;
