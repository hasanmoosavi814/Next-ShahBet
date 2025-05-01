import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IFixtureSidebarProps } from "@/types";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";

const FixtureSidebar = ({ home, away, status, date }: IFixtureSidebarProps) => {
  const isLive = status.toLowerCase().includes("live");

  return (
    <Card className="w-full md:w-64 shrink-0">
      <CardHeader>
        <CardTitle className="text-center text-lg">Match Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <Image
            src={home.logo}
            alt={home.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-sm font-medium">{home.name}</span>
        </div>

        <div className="text-center">vs</div>
        <div className="flex justify-between items-center">
          <Image
            src={away.logo}
            alt={away.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-sm font-medium">{away.name}</span>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          {new Date(date).toLocaleString()}
        </div>

        <Badge
          variant={isLive ? "destructive" : "secondary"}
          className="block text-center w-full"
        >
          {isLive ? "Live Now 🔴" : status}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default FixtureSidebar;
