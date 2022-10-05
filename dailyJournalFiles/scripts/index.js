import { getEntries, fetchEntries, sendEntries } from "./entries.js";
const mainContainer = document.querySelector("#container");

const project = async () => {
  let html = "";
  await fetchEntries();
  const journalEntries = getEntries();
  for (let i = 0; i < journalEntries.length; i++) {
    html += `<div id = "jEntry">
            <h3 id= "cardHeader">${journalEntries[i].concept}</h3>
            <p id= "cardDate">${journalEntries[i].date}</p>
            <p id= "cardMood">${journalEntries[i].mood}</p>
            <p id= "cardEntry">${journalEntries[i].entry}</p>
        </div>`;
  }
  document.getElementById("entries").innerHTML = html;
};

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "button") {
    const date = document.querySelector("input[name='entryDate']").value;
    const concept = document.querySelector("input[name='Concepts Covered']").value;
    const mood = document.querySelector("select[name='moodForTheDay']").value;
    const entry = document.querySelector("textarea[name='Journal Entry']").value;

    const newEntry = {
      concept: concept,
      date: date,
      mood: mood,
      entry: entry,
    };

    sendEntries(newEntry);
  }
});

document.addEventListener("stateChanged", (event) => {
  project();
});

project();
