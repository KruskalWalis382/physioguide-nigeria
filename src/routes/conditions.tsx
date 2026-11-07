import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/conditions")({
  component: ConditionsLayout,
});

function ConditionsLayout() {
  return <Outlet />;
}
