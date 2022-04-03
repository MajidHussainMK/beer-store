import { Beer } from "../../api/types";
import { BeerCard } from "./BeerCard";

export const BeersList = ({
  beers,
  isLoading,
}: {
  beers: Beer[] | undefined;
  isLoading: boolean;
}) => {

  if (isLoading) {
    return <div className="loader" />;
  }

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
