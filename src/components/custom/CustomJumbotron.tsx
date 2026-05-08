interface Props {
  title: string;
  subtitle: string;
}

export const CustomJumbotron = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold text-zinc-700 bg-clip-text mb-4">{title}</h1>
      <p className="text-gray-600 text-lg">{subtitle}</p>
    </div>
  );
};
