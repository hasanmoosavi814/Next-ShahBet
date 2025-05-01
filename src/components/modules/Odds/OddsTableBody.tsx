import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { IOddsTableBodyProps } from "@/types";
import { Table, TableHeader } from "@/components/ui/table";

const OddsTableBody = ({ bookmakers }: IOddsTableBodyProps) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableCell>Bookmaker</TableCell>
        <TableCell className="text-center">Home Win</TableCell>
        <TableCell className="text-center">Draw</TableCell>
        <TableCell className="text-center">Away Win</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      {bookmakers.map((bk) => {
        const matchWinner = bk.bets.find((b: any) => b.name === "Match Winner");
        if (!matchWinner) return null;

        const odds = matchWinner.values;
        const home = odds.find((o: any) => o.value === "Home");
        const draw = odds.find((o: any) => o.value === "Draw");
        const away = odds.find((o: any) => o.value === "Away");

        return (
          <TableRow key={bk.id}>
            <TableCell>{bk.name}</TableCell>
            <TableCell className="text-center">{home?.odd ?? "-"}</TableCell>
            <TableCell className="text-center">{draw?.odd ?? "-"}</TableCell>
            <TableCell className="text-center">{away?.odd ?? "-"}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export default OddsTableBody;
