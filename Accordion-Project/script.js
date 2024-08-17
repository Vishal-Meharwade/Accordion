const data = [
  {
    id: "1",
    question: "What is Object-Oriented Programming (OOP)?",
    answer:
      "Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to design and structure software. It emphasizes the concepts of encapsulation, inheritance, polymorphism, and abstraction.",
  },
  {
    id: "2",
    question: "Explain the difference between TCP and UDP.",
    answer:
      "TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures reliable data transmission, while UDP (User Datagram Protocol) is a connectionless protocol that prioritizes speed over reliability, making it suitable for streaming and gaming.",
  },
  {
    id: "3",
    question: "What is the purpose of a database index?",
    answer:
      "A database index is used to improve the speed of data retrieval operations on a database table by providing quick access to rows. Indexes are created on columns that are frequently searched or used in WHERE clauses.",
  },
  {
    id: "4",
    question: "What is the difference between a process and a thread?",
    answer:
      "A process is an independent execution unit containing its own memory space, while a thread is a smaller execution unit that runs within a process and shares the process's memory and resources.",
  },

];

const accordionWrapper = document.querySelector('.accordion');

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `
        <div class="accordion_item">
            <div class="accordion_title">
                <h3>${dataItem.question}</h3>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div class="accordion_content">
                <p>${dataItem.answer}</p>
            </div>
        </div>
    `
    )
    .join("");
}


createAccordionData();

const getAccordionTitles = document.querySelectorAll(".accordion_title");

console.log(getAccordionTitles);

getAccordionTitles.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});