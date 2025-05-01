import { IFixtureScroRowProps } from "@/types";

import Image from "next/image";

const FixtureScoreRow = ({
  homeTeam,
  awayTeam,
  score,
}: IFixtureScroRowProps) => {
  return (
    <div className="text-lg flex justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Image
          src={homeTeam.logo}
          alt={homeTeam.name}
          width={24}
          height={24}
          className="rounded-full"
        />
        {homeTeam.name}
      </div>
      <span>{score}</span>
      <div className="flex items-center gap-2">
        <Image
          src={awayTeam.logo}
          alt={awayTeam.name}
          width={24}
          height={24}
          className="rounded-full"
        />
        {awayTeam.name}
      </div>
    </div>
  );
};

export default FixtureScoreRow;
