import { Link } from "@tanstack/react-router";

interface PostProps {
  id: number;
  date?: Date;
  title: string;
  content: string;
  author: number;
  icon: React.ReactNode;
  path: string
}

export default function PostCard({ title, content, author, icon, path }: PostProps) {
  return (
    <Link to={path} className="grid grid-cols-1 grid-rows-[1fr,2fr, 3fr, 1fr] p-6 h-64 bg-[#06122A] hover:bg-[#071738] hover:cursor-pointer rounded-[20px] text-white transition-colors duration-150">
      <div
        className="flex justify-center items-center w-32 h-6 rounded-xl 
      bg-(--default-light-blue) mb-2"
      >
        <p>Aktualności</p>
      </div>
      <h4 className="text-[#0CBDBD] text-xl">{title}</h4>
      <span>
        <p className="">
          {content.length > 50 ? content.substring(0, 50) + "..." : content}
        </p>
      </span>
      <span className="flex justify-start items-center">
        <p className="text-xs ">
          <span className="text-[#0CBDBD]">{icon}</span> Opublikowano przez:{" "}
          {author}
        </p>
      </span>

      {/* <p className="text-xs">{date?.toString()}</p> */}
    </Link>
  );
}
