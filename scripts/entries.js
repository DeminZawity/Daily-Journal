const journalEntries = [
  {
    id: 1,
    date: "07/05/2022",
    concept: "Orientation",
    entry: "Today was the first day of my NSS bootcamp. We had orientation today and got to know everyone. Everyone seems really nice and sweet! I am very excited to get started!",
    mood: "Happy",
  },
  {
    id: 2,
    date: "07/12/2022",
    concept: "Tools",
    entry: "This week I met with my team to go over certain tools like Github and Terminal. I am having a hard time understanding them BUT I am VERY determined to figure them out!",
    mood: "Fine",
  },
  {
    id: 3,
    date: "07/16/2022",
    concept: "Starting HTML and CSS",
    entry: "Today Lynn started showing us HTML and CSS. It was a little but confusing, but I think I will be ok!",
    mood: "Fine",
  },
  {
    id: 4,
    date: "07/19/2022",
    concept: "Yin Yang Pt. 1",
    entry:
      "Today I met with my team to complete the first part of our Yin Yang project! Mariana designed our home page, and, of course, it looks amazing! I am done with my page, but I think it still needs some modifications to look better.",
    mood: "Happy",
  },
  {
    id: 5,
    date: "07/26/2022",
    concept: "Yin Yang Pt. 2",
    entry: "I got my website to look SO much better! This week, Mariana and I decided to tackle the home page. I added a Nav Bar and she added a Footer. Our website is looking awesome!",
    mood: "Happy",
  },
  {
    id: 6,
    date: "07/30/2022",
    concept: "New Group",
    entry: "Today I got a new group! Everyone seems really smart and nice! I am so excited to work with them even though I miss my old group!",
    mood: "Happy",
  },
  {
    id: 7,
    date: "08/02/2022",
    concept: "For Loops",
    entry: "for loops suck and they give me headaches",
    mood: "Sad",
  },
];

const getNewEntryId = () => {
  let highestOrderId = journalEntries.sort((a, b) => b.id - a.id)[0].id;
  return highestOrderId + 1;
};

export const getQuotes = () => {
  return journalEntries.map((entries) => ({ ...entries }));
};

export const addNewJournalEntry = (order) => {
  const newId = getNewEntryId();
  order.id = newId;
  // need to add logic
  journalEntries.push(order);
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
