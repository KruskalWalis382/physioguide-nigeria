import { describe, expect, it } from "vitest";
import { buildPlan } from "@/lib/workout";

describe("home workout planner", () => {
  it("3 training days gives 3 workouts and 4 rest days", () => {
    const p = buildPlan("beginner", 3);
    expect(p.days.filter((d) => !d.rest)).toHaveLength(3);
    expect(p.days.filter((d) => d.rest)).toHaveLength(4);
  });
  it("never schedules training on consecutive days for 2 or 3 days", () => {
    for (const d of [2, 3] as const) {
      const days = buildPlan("beginner", d).days;
      for (let i = 1; i < 7; i++) expect(!days[i]!.rest && !days[i - 1]!.rest).toBe(false);
    }
  });
  it("changing level changes sets", () => {
    expect(buildPlan("beginner", 3).sets).toBe("2 sets");
    expect(buildPlan("intermediate", 3).sets).toBe("3 sets");
  });
  it("4 days alternates upper and lower body", () => {
    const focus = buildPlan("intermediate", 4).days.filter((d) => !d.rest).map((d) => d.focus);
    expect(focus).toEqual(["Upper body", "Lower body", "Upper body", "Lower body"]);
  });
});
