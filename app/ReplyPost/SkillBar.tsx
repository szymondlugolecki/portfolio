import { SkillBarColors } from "../types";

export default function SkillBar({
  skillLabel,
  skillValue,
  skillColor,
}: {
  skillLabel: string;
  skillValue: number;
  skillColor: SkillBarColors;
}) {
  const skillBarColors: Record<
    SkillBarColors,
    `bg-${SkillBarColors}-500` | "bg-white"
  > = {
    red: "bg-red-500",
    green: "bg-green-500",
    sky: "bg-sky-500",
    teal: "bg-teal-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-500",
    white: "bg-white",
  };

  const skillBarWidth: Record<number, string> = {
    0: "w-0",
    25: "w-1/4",
    30: "w-[30%]",
    35: "w-[35%]",
    45: "w-[45%]",
    50: "w-1/2",
    55: "w-[55%]",
    60: "w-[60%]",
    70: "w-[70%]",
    75: "w-3/4",
    80: "w-[80%]",
    85: "w-[85%]",
    90: "w-[90%]",
    100: "w-full",
  };

  return (
    <div className="flex items-center justify-between h-6 gap-3">
      <span className="font-semibold">
        {">"} {skillLabel}
      </span>
      <div className="w-3/4 h-4 duration-200 bg-gray-600 rounded-2xl group hover:bg-opacity-80">
        <div
          className={`h-full ${skillBarWidth[skillValue]} ${skillBarColors[skillColor]} rounded-2xl group-hover:bg-opacity-80 duration-200`}
        />
      </div>
    </div>
  );
}
