// javascript code to fetch lambda 

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://sozes4krua7thw2kytx3khsvme0mfwke.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}