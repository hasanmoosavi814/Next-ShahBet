import { useGetFixtureByIdQuery } from "@/services/footballApi";
import { motion } from "framer-motion";

import MatchStatistics from "../matches/MatchStatistics";
import FixtureSidebar from "@/components/modules/Fixture/FixtureSidebar";
import MatchLineups from "../matches/MatchLineups";
import MatchEvents from "../matches/MatchEvents";
import FixtureTabs from "@/components/modules/Fixture/FixtureTabs";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const FixtureDetails = ({ fixtureId }: { fixtureId: number }) => {
  const { data: fixture, isLoading } = useGetFixtureByIdQuery(fixtureId);

  if (isLoading || !fixture)
    return (
      <p className="text-center p-6 text-muted-foreground">
        Loading fixture details...
      </p>
    );

  const home = fixture.teams.home;
  const away = fixture.teams.away;

  return (
    <section className="p-6 space-y-8 bg-background text-foreground">
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp} custom={0}>
          <FixtureSidebar
            home={home}
            away={away}
            status={fixture.fixture.status.long}
            date={fixture.fixture.date}
          />
        </motion.div>

        <motion.div
          className="flex-1 space-y-6"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} custom={1}>
            <FixtureTabs fixtureId={fixtureId} home={home} away={away} />
          </motion.div>
          <motion.div variants={fadeInUp} custom={2}>
            <MatchStatistics stats={fixture.statistics} />
          </motion.div>
          <motion.div variants={fadeInUp} custom={3}>
            <MatchEvents events={fixture.events} />
          </motion.div>
          <motion.div variants={fadeInUp} custom={4}>
            <MatchLineups lineups={fixture.lineups} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FixtureDetails;
