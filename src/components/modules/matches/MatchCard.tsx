"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { IMatchCardProps } from "@/types";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

const MatchCard = ({ match, index }: IMatchCardProps) => (
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
              <TooltipContent>Home</TooltipContent>
            </Tooltip>

            <span className="text-muted-foreground">vs</span>

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
              <TooltipContent>Away</TooltipContent>
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

export default MatchCard;
