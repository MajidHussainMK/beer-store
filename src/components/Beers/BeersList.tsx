import { Beer } from "../../api/types";
import { BeerCard } from "./BeerCard";

export const BeersList = ({ beers }: { beers: Beer[] | undefined }) => {
  if (!beers || beers.length === 0) {
    return <div className="no-beer-info">No Record found!</div>;
  }

  return (
    <div className="beers-listing">
      {beers?.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
};
