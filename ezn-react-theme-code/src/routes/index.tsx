import { createFileRoute } from "@tanstack/react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import Posts from "../components/posts/Posts";
import OurValues from "../components/values/OurValues";
import Informations from "../components/informations/Informations";
import Prospects from "../components/prospects/Prospects";
import Header from "../components/header/Header";
import FaqLayer from "../components/faq/FaqLayer";
import ProfilesLayer from "../components/profiles/ProfilesLayer";

library.add();

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col gap-[125px]">
      <Header />
      <Informations />
      <ProfilesLayer />
      <OurValues />
      <Prospects />
      <Posts />
      <FaqLayer />
    </div>
  );
}
