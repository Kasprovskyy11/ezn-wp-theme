// import HeaderMovie from "../../assets/Header-movie.mp4";
import { createPortal } from "react-dom";
import Button from "../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";

export default function Header() {
  function scrollToContent() {
    const footer = document.getElementById("info-scroll");
    footer?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  AOS.init({
    duration: 500,
  });
  AOS.refresh();

  return (
    <>
      <header className="relative h-screen flex flex-col top-0 justify-center">
        <div className="text-white flex flex-col gap-2 z-20 items-start">
          <div className="uppercase flex flex-col gap-2">
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-md lg:text-lg xl:text-xl"
            >
              wiedza <span className="text-(--default-light-blue)">rozwój</span>{" "}
              pasja
            </p>
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-2xl md:text-4xl lg:text-5xl font-bold"
            >
              elektroniczne zakłady naukowe
            </h1>
          </div>
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            className="w-3/4 xl:w-1/2 text-md lg:text-lg xl:text-xl"
          >
            Dołącz do naszej szkoły, gdzie wiedza spotyka się z praktyką, a
            każdy dzień to krok ku rozwojowi. Razem kształtujemy Twoją drogę do
            sukcesu!
          </p>
          <div data-aos="fade-right" data-aos-delay="400" className="py-4">
            <Button text="Dowiedz się więcej" link="/o-szkole/historia-ezn" />
          </div>

          <div className="absolute bottom-0 left-1/2 w-screen flex justify-center items-center h-5 gradient transform -translate-x-1/2 z-20">
            <div className="w-20 h-20 rounded-[50%] bg-[#040c1c] flex justify-center items-start pt-4 ">
              {/* <FontAwesomeIcon
            onClick={scrollToContent}
            className="text-3xl text-white animate-bounce cursor-pointer hover:text-(--default-light-blue) transition-colors"
            icon={faAngleDown}
          /> */}

              <FontAwesomeIcon
                onClick={scrollToContent}
                className="text-3xl text-white animate-bounce cursor-pointer hover:text-(--default-light-blue) transition-colors duration-500"
                icon={faAngleDown}
              />
            </div>
          </div>
        </div>
        {createPortal(
          <div>
            <div className="absolute top-0 left-0 w-screen h-screen z-10 header-shadow"></div>
            <video
              className="absolute top-0 left-0 w-screen h-screen object-cover"
              muted
              autoPlay
              loop
              playsInline
              src="/wp-content/uploads/2025/12/header.webm"
            ></video>
          </div>,

          document.body
        )}
      </header>
    </>
  );
}
