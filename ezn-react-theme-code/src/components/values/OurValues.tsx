import Value from "./Value";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComputer,
  faFaceSmile,
  faGraduationCap,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
library.add(faGraduationCap, faUsers, faFaceSmile, faComputer);

export default function OurValues() {
  const valuesTab = [
    {
      id: 1,
      title: "Wysoki poziom kształcenia",
      text: "Zapewniamy uczniom wysoki poziom kształcenia, który pozwoli im zdać egzaminy zewnętrzne.",
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
    },
    {
      id: 2,
      title: "Wykwalifikowany zespół pedagogów",
      text: "Kadrę EZNu tworzy zespół pedagogów o dużym doświadczeniu i wysokich kompetencjach.",
      icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
      id: 3,
      title: "Przyjazna atmosfera",
      text: "Cieszymy się popularnością ze względu na przyjazną atmosferę i bogatą ofertę zajęć pozalekcyjnych.",
      icon: <FontAwesomeIcon icon={faFaceSmile} />,
    },
    {
      id: 4,
      title: "Projekty i praktyki",
      text: "Nasza szkoła umożliwia uczniom wzięcie udziału w praktykach zawodowych lub uczestniczeniu w programie Erasmus.",
      icon: <FontAwesomeIcon icon={faComputer} />,
    },
  ];
  return (
    <div className="relative flex justify-center left-1/2 z-10 -translate-x-1/2 w-screen p-6 text-white bg-[#0CBDBD]">
      <div className="flex flex-col  gap-[30px]">
        <h2 className="text-center text-2xl lg:text-3xl text-white font-bold pb-6">
          Nasze wartości
        </h2>
        <div className="flex flex-col gap-10 lg:gap-4 items-center lg:flex-row lg:h-[23vh]">
          {valuesTab.map((el) => {
            return (
              <Value
                key={el.id}
                title={el.title}
                text={el.text}
                icon={el.icon}
              ></Value>
            );
          })}
        </div>
        <div></div>
        <div className="h-[2vh] w-full bg-[#0CBDBD]"></div>
      </div>
    </div>
  );
}
