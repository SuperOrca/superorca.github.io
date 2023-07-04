const greetings = ["Hello", "Hi", "Hey", "Howdy", "Hey there", "Hiya"];
const title = document.getElementsByClassName("title")[0];

title.innerHTML = `${greetings[Math.floor(Math.random() * greetings.length)]}, my name is SuperOrca!`