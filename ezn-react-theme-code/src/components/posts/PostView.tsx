import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import SectionHeader from "../section_headers/SectionHeader";

library.add(faUser, faClock);

type PostData = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  author: number;
  link: string;
};

interface PostViewProps {}

export default function PostView({}: PostViewProps) {
  const { postId } = useParams({ from: "/post/$postId" });
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<PostData>(
          `/wp-json/wp/v2/posts/${postId}`
        );
        setPost(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (postId) fetchPost();
  }, [postId]);

  if (loading)
    return (
      <div className="flex justify-center py-8">
        <FontAwesomeIcon icon="spinner" spin />
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center py-8">Error: {error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="w-full mt-[150px] p-8 text-white">
      <div className="mb-8 flex flex-col gap-5">
        <SectionHeader
          page={post}
          isSubpage={true}
          isArticle={true}
          additionalText={["aktualności"]}
        />
        <div className="flex items-center text-md space-x-4">
          <span>
            <FontAwesomeIcon
              icon={faClock}
              className="mr-1 text-(--default-light-blue)"
            />{" "}
            {new Date(post.date).toLocaleDateString("pl-PL")}
          </span>
          <span>
            <FontAwesomeIcon
              icon={faUser}
              className="mr-1 text-(--default-light-blue)"
            />{" "}
            Autor: {post.author}
          </span>
        </div>
      </div>
      <div
        className="prose max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
