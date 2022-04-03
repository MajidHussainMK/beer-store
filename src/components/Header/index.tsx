export const Header = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="header">
      <span>{title}</span>
      <div className="overlay"/>
    </div>
  );
};
