import { Checkbox } from "../Checkbox";

export const Filters = ({
  onAction,
}: {
  onAction?: {
    filterByPH?: (value: boolean) => void;
    filterByABV?: (value: boolean) => void;
  };
}) => {
  return (
    <div className="filters">
      <Checkbox name="ph" label="PH (>4)" onAction={onAction?.filterByPH} />
      <Checkbox name="abv" label="ABV (<5)" onAction={onAction?.filterByABV} />
    </div>
  );
};
