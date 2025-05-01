import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Clock, Newspaper } from "lucide-react";
import { IFixtureTabsProps } from "@/types";

import TeamLastMatchesList from "../Team/TeamLastMatchesList";
import RelatedArticlesList from "../news/RelatedArticlesList";
import OddsTable from "../Odds/OddsTable";

const FixtureTabs = ({ fixtureId, home, away }: IFixtureTabsProps) => {
  return (
    <Tabs defaultValue="recent" className="w-full">
      <TabsList className="grid grid-cols-3 w-full mb-4">
        <TabsTrigger value="recent" className="flex items-center gap-1">
          <Clock className="w-4 h-4" /> Recent Games
        </TabsTrigger>
        <TabsTrigger value="odds" className="flex items-center gap-1">
          <Trophy className="w-4 h-4" /> Odds
        </TabsTrigger>
        <TabsTrigger value="articles" className="flex items-center gap-1">
          <Newspaper className="w-4 h-4" /> Articles
        </TabsTrigger>
      </TabsList>

      <TabsContent value="recent">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TeamLastMatchesList teamId={home.id} teamName={home.name} />
          <TeamLastMatchesList teamId={away.id} teamName={away.name} />
        </div>
      </TabsContent>

      <TabsContent value="odds">
        <OddsTable fixtureId={fixtureId} />
      </TabsContent>

      <TabsContent value="articles">
        <RelatedArticlesList teamName={`${home.name} ${away.name}`} />
      </TabsContent>
    </Tabs>
  );
};

export default FixtureTabs;
