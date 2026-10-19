export type Level = "beginner" | "intermediate";
export type Days = 2 | 3 | 4;

export interface DayPlan {
  day: string;
  rest: boolean;
  focus: string;
  exercises: string[];
}

export interface Plan {
  sets: string;
  reps: string;
  restBetweenSets: string;
  days: DayPlan[];
}

const WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const TRAINING_DAYS: Record<Days, number[]> = {
  2: [0, 3],
  3: [0, 2, 4],
  4: [0, 1, 3, 4],
};

const fullBody: Record<Level, string[]> = {
  beginner: ["Incline push-up (hands on a table or wall)", "Chair squat (sit to stand)", "Glute bridge", "Table row (knees bent) or backpack row", "Supported split squat"],
  intermediate: ["Push-up (floor)", "Bodyweight or backpack squat", "Single-leg glute bridge", "Table row (legs straight) or backpack row", "Reverse lunge"],
};
const upper: Record<Level, string[]> = {
  beginner: ["Incline push-up", "Table row (knees bent)", "Backpack overhead press (light)", "Forearm plank on knees"],
  intermediate: ["Push-up", "Table row (legs straight)", "Backpack overhead press", "Forearm plank"],
};
const lower: Record<Level, string[]> = {
  beginner: ["Chair squat", "Glute bridge", "Supported split squat", "Calf raises holding a wall"],
  intermediate: ["Backpack squat", "Single-leg glute bridge", "Reverse lunge", "Single-leg calf raises"],
};

export function buildPlan(level: Level, days: Days): Plan {
  const training = TRAINING_DAYS[days];
  let n = 0;
  return {
    sets: level === "beginner" ? "2 sets" : "3 sets",
    reps: level === "beginner" ? "8–12 repetitions" : "10–15 repetitions (or a harder variation)",
    restBetweenSets: level === "beginner" ? "60–90 seconds" : "60–120 seconds",
    days: WEEK.map((day, i) => {
      if (!training.includes(i)) return { day, rest: true, focus: "Rest or easy walk", exercises: [] };
      const idx = n++;
      if (days === 4) {
        const isUpper = idx % 2 === 0;
        return { day, rest: false, focus: isUpper ? "Upper body" : "Lower body", exercises: (isUpper ? upper : lower)[level] };
      }
      return { day, rest: false, focus: "Full body", exercises: fullBody[level] };
    }),
  };
}
