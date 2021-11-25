console.log("It's Kanye time...");

let h1 = document.querySelector('#kanye-quote');
async function getQuote() {
    const response = await fetch('https://api.kanye.rest/');
    const data = await response.json();
    console.log(response);
    console.log(data);
    h1.innerText = data.quote;
    addQuoteToList(data.quote);

}

getQuote();

const button = document.querySelector('#new-quote-button');

button.addEventListener('click', getQuote);

 function addQuoteToList(quote) {

    //const response = await fetch('https://api.kanye.rest/');
    //const data = await response.json();
    let li = document.createElement('li');
    li.innerText = quote;
    let ol = document.querySelector('#kanye-quote-history');
    //ol.innerText = h1.innerText;
    ol.appendChild(li);
}

addQuoteToList(data.quote);