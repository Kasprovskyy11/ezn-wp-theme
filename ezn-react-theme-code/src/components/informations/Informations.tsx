import Button from "../buttons/Button";
import SectionHeader from "../section_headers/SectionHeader";
// import photo1 from "../../assets/Uczniowie_przed_szkola.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUpRightFromSquare);

export default function Informations() {
  return (
    <div className="flex  flex-col lg:items-start gap-4 lg:w-[90vw] 2xl:max-w-[1400px] 2xl:items-start text-white">
      <SectionHeader title="Poznaj nas bliżej" additionalText={["o szkole"]} />
      <div className="flex flex-col gap-4 md:flex-row lg:justify-start lg:gap-6 ">
        <div
          id="info-scroll"
          className="scroll-mt-[-130px] h-full md:w-1/2 w-full"
        >
          <img
            className="rounded-[20px] w-full h-full self-start"
            src="/wp-content/uploads/2025/12/Uczniowie_przed_szkola.png"
            alt="Poznaj nas bliżej"
          />
        </div>
        <div className="flex flex-col items-start gap-4 h-full md:w-1/2 w-full">
          <p className="text-[16px] md:text-md lg:text-lg">
            Podstawowym celem, jaki sobie stawiamy, jest zapewnienie wysokiego
            poziomu kształcenia oraz wyposażenie uczniów w wiedzę i
            umiejętności, które pozwolą im zdać egzaminy zewnętrzne. Równie
            ważne jest dla nas wsparcie młodego człowieka w budowaniu własnej
            osobowości, dlatego też dbamy o kształcenie prawidłowych postaw
            życiowych, wskazywanie dróg samodzielnego rozwoju oraz przygotowanie
            do podejmowania różnorodnych ról i zadań społecznych.
          </p>

          <Button text="Dowiedz się więcej" link="/o-szkole/historia-ezn" />
        </div>
      </div>
    </div>
  );
}
