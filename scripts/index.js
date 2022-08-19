import { getQuotes } from "./entries.js";

const project = () => {
  let html = "";
  const journalEntries = getQuotes();
  for (let i = 0; i < journalEntries.length; i++) {
    html += `<div class = "jEntry">
            <h3 class= "cardHeader">${journalEntries[i].concept}</h3>
            <p class= "cardDate">${journalEntries[i].date}</p>
            <p class= "cardMood">${journalEntries[i].mood}</p>
            <p class= "cardEntry">${journalEntries[i].entry}</p>
        </div>`;
  }

  document.getElementById("entries").innerHTML = html;
};

project();
