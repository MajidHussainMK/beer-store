import { Link } from "react-router-dom";
import { Beer } from "../../api/types";

export const BeerCard = ({ beer }: { beer: Beer }) => {
  return (
    <Link to={`${beer.id}`}>
      <div className="beer-card" key={beer.id}>
        <img src={beer.image_url} alt={`Beer ${beer.name}`} />
        <h3 className="title">{beer.name}</h3>
        <p className="tagline">{beer.tagline}</p>
        <h4>
          Brewed in: <b>{beer.first_brewed}</b>
        </h4>
        <h5>
          Volume: {beer.volume.value} {beer.volume.unit}
        </h5>
        <h5>ABV: {beer.abv}</h5>
        <h5>PH: {beer.ph}</h5>
      </div>
    </Link>
  );
};
