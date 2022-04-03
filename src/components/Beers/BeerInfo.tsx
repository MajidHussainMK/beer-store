import { useParams } from "react-router-dom";
import { useBeer } from "../../api/beer";
import { Link } from "react-router-dom";

export const BeerInfo = () => {
  const { beerId } = useParams<{ beerId: string }>();
  const { data, isLoading, error } = useBeer(beerId);

  if (isLoading) {
    return <div className="loader" />;
  }

  if (!data) {
    return (
      <div className="no-beer-info">
        <BackToListings />
        {error ? error : "No Record found!"}
      </div>
    );
  }

  return (
    <div style={{ marginTop: "5vh" }}>
      <BackToListings />
      <div className="beer-info">
        <div style={{ flex: 1 }}>
          <img
            className="beer-info-img"
            src={data.image_url}
            alt={`Beer ${data.name}`}
          />
        </div>
        <div className="beer-column">
          <h2 className="title">{data.name}</h2>
          <LabelWithValue label="Brewed in" value={data.first_brewed} />
          <LabelWithValue
            label="Yeast"
            value={data.ingredients.yeast as string}
          />
          <p className="description">
            <em>{data.description}</em>
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>PH</b>
                </td>
                <td>
                  <b>ABV</b>
                </td>
                <td>
                  <b>IBU</b>
                </td>
                <td>
                  <b>EBC</b>
                </td>
                <td>
                  <b>SRM</b>
                </td>
              </tr>
              <tr>
                <td>{data.ph}</td>
                <td>{data.abv}</td>
                <td>{data.ibu}</td>
                <td>{data.ebc}</td>
                <td>{data.srm}</td>
              </tr>
            </tbody>
          </table>
          <LabelWithValue
            label="Food Pairing"
            value={data.food_pairing.join(", ")}
          />
          <LabelWithValue label="Food Pairing" value={data.brewers_tips} />
          <LabelWithValue label="Contributed by" value={data.contributed_by} />
        </div>
      </div>
    </div>
  );
};

const BackToListings = () => <Link to="/">Back to Listings</Link>;

const LabelWithValue = ({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) => {
  if (!value) return null;

  return (
    <p>
      <b>{label}:</b> {value}
    </p>
  );
};
