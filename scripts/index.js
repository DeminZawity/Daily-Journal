import { getQuotes, addNewJournalEntry } from "./entries.js";

const project = () => {
  let html = "";
  const journalEntries = getQuotes();
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

document.addEventListener("click", (e) => {
  if (e.target.id === "button") {
    console.log("submitting order");
    const date = document.getElementById("input")?.value;
    const concept = document.getElementById("conceptInput")?.value;
    const mood = document.getElementById("moodInput")?.value;
    const entry = document.getElementById("entryTxtArea")?.value;

    const newOrder = {
      concept: concept,
      date: date,
      mood: mood,
      entry: entry,
    };

    addNewJournalEntry(newOrder);
  }
});

document.addEventListener("stateChanged", (event) => {
  // One line of code should do it.
  project();
});

project();
