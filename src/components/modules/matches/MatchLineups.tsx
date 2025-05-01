const MatchLineups = ({ lineups }: { lineups: any[] }) => {
  if (!lineups?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {lineups.map((team, idx) => (
        <div key={idx} className="bg-slate-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-white">
            {team.team.name} Lineup
          </h3>
          <ul className="space-y-1 text-sm">
            {team.startXI.map((item, i) => (
              <li key={i} className="flex justify-between">
                <span className="text-white">
                  {item.player.number}. {item.player.name}
                </span>
                <span className="text-muted-foreground">{item.player.pos}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MatchLineups;
