import { Link } from "@tanstack/react-router";

interface ProfileProps {
  name: string;
  photoUrl: string;
  path: string;
}

export default function Profile({ name, photoUrl, path }: ProfileProps) {
  return (
    <Link
      to={path}
      activeProps={{ className: "text-white" }}
      className="w-full h-42 lg:h-52 lg:w-52 xl:w-64 xl:h-64 rounded-2xl flex justify-center items-center relative overflow-hidden hover:scale-[1.1] transition-all hover:cursor-pointer"
    >
      <img
        src={photoUrl}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#00000086]"></div>
      <p className="text-white font-bold text-xl z-10 text-center px-4">
        {name}
      </p>
    </Link>
  );
}
