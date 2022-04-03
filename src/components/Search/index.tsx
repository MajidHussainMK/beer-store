import React from "react";

export const Search = (props: {
  value?: string;
  setValue?: (value: string) => void;
  placeholder?: string;
}) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue?.(target.value);
  };

  return (
    <div className="searchBox">
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
