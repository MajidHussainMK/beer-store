export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: React.ReactNode;
  onAction?: (value: boolean) => void;
}

export const Checkbox = ({ onAction, label, name, ...rest }: Props) => {
  return (
    <div className="checkbox">
      <input
        {...rest}
        id={name}
        type="checkbox"
        onChange={(e) => onAction?.(e.target.checked)}
      />
      {label && <label htmlFor={name}>{label}</label>}
      <br />
    </div>
  );
};
