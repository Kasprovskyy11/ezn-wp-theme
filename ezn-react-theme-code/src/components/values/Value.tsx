interface ValueProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

export default function Value({ title, text, icon }: ValueProps) {
  return (
    <div className="grid grid-rows-[1fr_3fr] justify-center items-center text-center w-full lg:w-[30%] bg-transparent text-white lg:text-md">
      <p className="text-4xl lg:text-5xl">{icon}</p>
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-center text-lg lg:text-xl">{title}</h3>
        <p className="text-center text-sm pt-6">{text}</p>
      </div>
    </div>
  );
}
