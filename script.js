const skillList = [
  "Python",
  "Java",
  "Kotlin",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "Git",
];
const greetings = ["Hello", "Hi", "Hey", "Howdy", "Hey there", "Hiya"];

const title = document.getElementById("title");
const skills = document.getElementById("skills");

title.innerHTML = `${
  greetings[Math.floor(Math.random() * greetings.length)]
}, my name is SuperOrca!`;

skillList.forEach(function (value, index) {
  console.log(value);
  const item = document.createElement("li");
  const img = document.createElement("img");
  img.src = `assets/icons/skills/${value.toLowerCase()}.svg`;

  item.appendChild(img);
  item.appendChild(document.createElement("br"));
  item.appendChild(document.createTextNode(value));

  skills.appendChild(item);
});
