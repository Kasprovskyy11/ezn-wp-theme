import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getPageBySlug } from "../lib/wordpress";
import NotFoundSite from "../components/notFoundSite/NotFoundSite";
import { useLocation } from "@tanstack/react-router";
import SubpageView from "../components/subpages-view/SubpagesView";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Route = createFileRoute("/$")({
  component: PageComponent,
});

function PageComponent() {
  const location = useLocation();
  const slug = location.pathname.replace(/\/$/, "").slice(1);

  const {
    data: page,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["page", slug],
    queryFn: () => getPageBySlug(slug),
  });

  if (isLoading)
    return (
      <div className="absolute left-1/2 top-1/4 text-5xl">
        <FontAwesomeIcon icon={faSpinner} className="text-white animate-spin" />
      </div>
    );

  if (error || !page) {
    return <NotFoundSite queryName={slug} />;
  }

  return <SubpageView page={page} />;
}