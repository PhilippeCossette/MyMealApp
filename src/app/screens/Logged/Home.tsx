// src/pages/Home.tsx
import { useState } from "react";
import WeekDays from "@/components/ui/weekdays";

export default function Home() {
  const [currentDay, setCurrentDay] = useState<number>(0);

  const messages: { [key: number]: string } = {
    1: "Tes repas du lundi 🍽️",
    2: "Tes repas du mardi 🍲",
    3: "Tes repas du mercredi 🥗",
    4: "Tes repas du jeudi 🥘",
    5: "Tes repas du vendredi 🍕",
    6: "Tes repas du samedi 🍱",
    0: "Tes repas du dimanche 🍰",
  };

  return (
    <div className="px-4 pb-32 max-w-xl mx-auto">
      <WeekDays onChange={(day: number) => setCurrentDay(day)} />

      <div className="mt-6 text-xl font-semibold">{messages[currentDay]}</div>

      {/* Ici tu peux afficher tes cartes de recettes */}
      <p className="text-muted-foreground mt-2 text-sm">
        Affiche les repas générés pour cette journée.
      </p>
    </div>
  );
}
