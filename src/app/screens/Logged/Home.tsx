// src/pages/Home.tsx
import { useState, useEffect } from "react";
import WeekDays from "@/components/ui/weekdays";
import supabase from "@/config/supabaseClient";

export default function Home() {
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
  console.log("Client:", supabase);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("recipes").select("*");
      if (error) {
        console.error("Erreur de récupération des données :", error);
        setFetchError(error.message);
      } else {
        console.log("Données récupérées :", data);
        setRecipes(data || []);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

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
      {loading ? (
        <p>Loading...</p>
      ) : fetchError ? (
        <p>Error: {fetchError}</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image_url} alt={recipe.title} />
          </div>
        ))
      )}

      {/* Ici tu peux afficher tes cartes de recettes */}
      <p className="text-muted-foreground mt-2 text-sm">
        Affiche les repas générés pour cette journée.
      </p>
    </div>
  );
}
