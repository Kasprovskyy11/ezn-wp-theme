import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
