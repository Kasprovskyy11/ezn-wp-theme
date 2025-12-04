import { createFileRoute } from "@tanstack/react-router";
import PostView from "../../components/posts/PostView";

export const Route = createFileRoute("/post/$postId")({
	component: RouteComponent,
});

function RouteComponent() {
	return <PostView />;
}
