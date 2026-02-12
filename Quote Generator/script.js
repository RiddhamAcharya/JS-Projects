const apiURL = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(apiURL) {
    const response = await fetch(apiURL);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(apiURL);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----- By " + author.innerHTML, "Tweet Window", "width=600, height=300");
}