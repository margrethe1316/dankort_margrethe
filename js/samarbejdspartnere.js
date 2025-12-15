import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabase = createClient(
  "https://ybukjrunegrgimscoahw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlidWtqcnVuZWdyZ2ltc2NvYWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTczNDQsImV4cCI6MjA4MDgzMzM0NH0.C2NLegMt6TZTCaZfxDl3_Ww73uCNJLqYWhRB2w76mKA"
);

// Sørg for at scriptet først kører, når DOM'en er klar
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("samarbejdspartnere_container");

  async function getData() {
    const { data, error } = await supabase
      .from("samarbejdspartnere")
      .select("*");

    if (error) {
      console.error("Supabase fejl:", error);
      return;
    }

    console.log("DATA:", data);
    showData(data);
  }

  function showData(data) {
    data.forEach((id) => {
      container.innerHTML += `
        <div class = "sam_blok">
        <h1>${id.titel}</h1>
        </div>
      `;
    });
  }

  getData();
});