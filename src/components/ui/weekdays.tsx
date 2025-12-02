import { useEffect, useState } from "react";

const days = [
  { key: 1, label: "Mon" },
  { key: 2, label: "Tue" },
  { key: 3, label: "Wed" },
  { key: 4, label: "Thu" },
  { key: 5, label: "Fri" },
  { key: 6, label: "Sat" },
  { key: 0, label: "Sun" },
];

type Props = {
  onChange?: (day: number) => void;
};

export default function Weekdays({ onChange }: Props) {
  const [daySelected, setDaySelected] = useState<number>(0);

  useEffect(() => {
    const today = new Date().getDay();
    setDaySelected(today);
    onChange?.(today);
  }, []);

  function handleClick(day: number) {
    setDaySelected(day);
    onChange?.(day);
  }

  return (
    <div className="flex justify-between gap-2 bg-card border border-border rounded-xl p-2">
      {days.map((d) => {
        const isActive = d.key === daySelected;
        return (
          <button
            key={d.key}
            onClick={() => handleClick(d.key)}
            className={[
              "flex-1 text-center py-2 rounded-lg transition",
              isActive
                ? "bg-primary/10 text-primary font-semibold"
                : "text-muted-foreground hover:bg-muted",
            ].join(" ")}
          >
            {d.label}
          </button>
        );
      })}
    </div>
  );
}
