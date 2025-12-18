import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  "https://ybukjrunegrgimscoahw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlidWtqcnVuZWdyZ2ltc2NvYWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTczNDQsImV4cCI6MjA4MDgzMzM0NH0.C2NLegMt6TZTCaZfxDl3_Ww73uCNJLqYWhRB2w76mKA"
);

const container = document.getElementById("challenges_container");

async function getData() {
  const { data, error } = await supabase.from("challenges").select("*");

  if (error) {
    console.error("Supabase fejl:", error);
    return;
  }

  console.log("DATA:", data);
  showData(data);
}

getData();

function showData(data) {
  data.forEach((id) => {
    container.innerHTML += `
      <article class="mærker_challenges"> 
        <div class="${id.Optjenpoints ? "pointpris" : ""}">
          <div class="pointsbanner">
            ${
              id.Optjenpoints
                ? `<h3 class="point">${id.Optjenpoints} points</h3>`
                : ""
            }
          </div>
        </div>
        <div class="tekstblok">
          <h2>${id.Titel}</h2>
          <h4>${id.Beskrivelse}</h4>
          <!-- Knap der åbner popup -->
          <button 
            class="trigger-btn kobnu_knap" 
            data-title="${id.Titel}" 
            data-description="${id.Beskrivelse}">
            Tilmeld
          </button>
        </div>  
      </article>
    `;
  });
}

// --- Popup ÅBN: via knapper genereret i innerHTML ---
container.addEventListener("click", (e) => {
  const btn = e.target.closest(".kobnu_knap");
  if (!btn) return;

  // Hent tekst fra knappen
  const title = btn.dataset.title || "Titel";
  const description = btn.dataset.description || "";

  // Sæt tekst ind i popup
  document.getElementById("popup-title1").textContent = title;
  document.getElementById("popup-description1").textContent = description;

  // Åbn popup
  document.getElementById("offer-toggle1").checked = true;
});

// --- Popup LUK: via kryds-knap ---
document.getElementById("close-btn1").addEventListener("click", () => {
  document.getElementById("offer-toggle1").checked = false;
});

// --- Popup LUK: klik på overlay udenfor indholdet ---
document.getElementById("popup-overlay1").addEventListener("click", (e) => {
  if (e.target.id === "popup-overlay1") {
    document.getElementById("offer-toggle1").checked = false;
  }
});
