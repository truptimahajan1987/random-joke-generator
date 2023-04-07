const jokecontainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
// const url = "https://dad-jokes.p.rapidapi.com/random/joke";

let getJoke = () => {
fetch(url)
.then(data => data.json())
.then(item => {
    jokecontainer.textContent = `${item.joke}`;

});
}
btn.addEventListener('click',getJoke);
 getJoke();


