import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import {
  faUser,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from "../section_headers/SectionHeader";

library.add(faUser, faChevronLeft, faChevronRight);

type Title = {
  rendered: string;
};

type Content = {
  rendered: string;
};

type Post = {
  id: number;
  title: Title;
  excerpt: Content;
  content: Content;
  author: number;
  date?: string;
  icon?: React.ReactNode;
};

const removeHtmlTags = (html: string): string => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
};

const getPlainText = (html: string, maxLength: number = 50): string => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "");
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(`/wp-json/wp/v2/posts`);
        setPosts(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="absolute left-1/2 top-1/4 text-5xl">
        <FontAwesomeIcon icon={faSpinner} className="text-white animate-spin" />
      </div>
    );
  if (error)
    return (
      <div className="text-center py-8 text-red-500">Błąd: {error.message}</div>
    );

  return (
    <div className="posts-carousel-container">
      <div className="posts-carousel">
        <SectionHeader
          title="Co nowego w EZN?"
          additionalText={["aktualności"]}
        />

        <Swiper
          rewind={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            100: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper"
        >
          {posts.map((el: Post) => (
            <SwiperSlide key={el.id}>
              <PostCard
                path={`/post/${el.id}`}
                id={el.id}
                title={removeHtmlTags(el.title.rendered)}
                content={getPlainText(
                  el.excerpt?.rendered || el.content?.rendered || ""
                )}
                author={el.author}
                icon={<FontAwesomeIcon icon={faUser} />}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
