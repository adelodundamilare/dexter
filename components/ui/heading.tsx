interface HeadingProps {
  title: string;
  description?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-2xl text-primary font-bold tracking-tight">
        {title}
      </h2>
      {description && <p className="text-sm ">{description}</p>}
    </div>
  );
};
