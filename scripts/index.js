import { getQuotes } from "./entries.js";

const project = () => {
  let html = "";
  const journalEntries = getQuotes();
  for (let i = 0; i < journalEntries.length; i++) {
    html += `<div class = "jEntry">
            <p>${journalEntries[i].concept}</p>
            <p>${journalEntries[i].date}</p>
            <p>${journalEntries[i].mood}</p>
            <p>${journalEntries[i].entry}</p>
        </div>`;
  }

  document.getElementById("entries").innerHTML = html;
};

project();
