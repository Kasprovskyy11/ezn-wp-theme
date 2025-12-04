import FooterSocialMediaBox from "./FooterSocialMediaBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-[150px] w-screen flex flex-col items-center text-white relative left-1/2 -translate-x-1/2">
      <div className="flex w-full bg-(--prospects-bg-color) p-10 justify-center items-center ">
        <div className="flex justify-center w-full items-center">
          <div className="max-w-[1400px] w-full flex flex-col gap-10 lg:gap-0 lg:flex-row items-center md:items-start justify-between h-full">
            <div className="flex flex-col gap-10 lg:gap-5">
              <div className="flex flex-col sm:flex-row  gap-10">
                <img
                  className="h-20"
                  src="/wp-content/uploads/2025/12/logo-ezn.png"
                  alt="Logo EZN"
                />
                <div className="h-full w-px sm:bg-white hidden sm:block">
                  <br />
                  <br />
                  <br />
                  <br />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-(--default-light-blue) text-lg">
                    Elektroniczne Zakłady Naukowe
                  </h3>
                  <p>ul. Braniborska 57,</p>
                  <p>53-680 Wrocław</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-(--default-light-blue)">Obserwuj nas!</p>
                <div className="flex gap-2">
                  <FooterSocialMediaBox
                    path="https://www.tiktok.com/@ezn.wroclaw"
                    icon={<FontAwesomeIcon icon={faTiktok} />}
                  />
                  <FooterSocialMediaBox
                    path="https://www.youtube.com/channel/UCTLu6tcAMEC3klwnRRoj0vg"
                    icon={<FontAwesomeIcon icon={faYoutube} />}
                  />
                  <FooterSocialMediaBox
                    path="https://www.facebook.com/ezn.wroclaw"
                    icon={<FontAwesomeIcon icon={faFacebook} />}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-10">
              <div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-(--default-light-blue) ">
                    Dane kontaktowe
                  </h3>
                  <p>Adres email: sekretariat@ezn.edu.pl</p>
                  <p>Numer telefonu: +48 71 798 67 02</p>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-(--default-light-blue)">Mapa witryny</h3>
                  <div className="flex gap-5">
                    <ul className="flex flex-col gap-2">
                      <a
                        href="/o-szkole"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        O szkole
                      </a>

                      <a
                        href="/dla-uczniow"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        Dla uczniów
                      </a>

                      <a
                        href="/dla-rodzicow"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        Dla rodziców
                      </a>
                      <a
                        href="/biblioteka"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        Biblioteka
                      </a>
                    </ul>

                    <ul className="flex flex-col gap-2">
                      <a
                        href="/projekty"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        Projekty
                      </a>
                      <a
                        href="/dla-uczniow"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        Akademia CISCO
                      </a>
                      <a
                        href="/o-szkole"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        Aktualności
                      </a>
                      <a
                        href="/kontakt"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        Kontakt
                      </a>
                      <a
                        href="/dla-kandydatow"
                        className="hover:text-(--default-light-blue) transition duration-300 ease-in-out"
                      >
                        Dla kandydatów
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-(--default-light-blue) p-5 justify-center">
        <div className="text-sm md:text-md lg:text-lg flex flex-col items-center sm:flex-row sm:gap-1">
          <span>Elektroniczne Zakłady Naukowe 2025</span>{" "}
          <span className="hidden sm:block">|</span>{" "}
          <span>&copy; Wszystkie prawa zastrzeżone</span>
        </div>
      </div>
      <div className="flex w-full p-5 justify-center">
        <p className="text-sm flex flex-col sm:flex-row sm:gap-1">
          <span>Projekt i wykonanie: Mikołaj Sajewicz,</span>{" "}
          <span>Kacper Banucha</span>
        </p>
      </div>
    </footer>
  );
}
