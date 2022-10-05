const API = "http://localhost:8088";

let journalEntries = [];

// const getNewEntryId = () => {
//   let highestOrderId = journalEntries.sort((a, b) => b.id - a.id)[0].id;
//   return highestOrderId + 1;
// };

export const fetchEntries = async () => {
  const dataFetch = await fetch(`${API}/entries`);
  const serviceEntries = await dataFetch.json();
  journalEntries = serviceEntries;
};

export const getEntries = () => {
  return journalEntries.map((entries) => ({ ...entries }));
};

export const sendEntries = async (entriesBeingUsed) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entriesBeingUsed),
  };

  const mainContainer = document.querySelector("#container");
  const response = await fetch(`${API}/entries`, fetchOptions);
  const responseJson = await response.json();
  mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  return responseJson;
};

// export const addNewJournalEntry = (order) => {
//   const newId = getNewEntryId();
//   order.id = newId;
//   journalEntries.push(order);
//   document.dispatchEvent(new CustomEvent("stateChanged"));
// };
