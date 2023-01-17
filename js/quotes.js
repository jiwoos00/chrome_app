const quotes=[
    {
        quote:"Well, maybe I don't need your money. Wait, wait, I said maybe!",
        author:"Rachel",
    },
    {
        quote:"We were on a break!",
        author:"Ross"
    },
    {
        quote:"They don't know that we know they know we know",
        author:"Phoebe and Joey"
    },
    {
        quote:"And I have to live with a boy!",
        author:"Monica"
    },
    {
        quote:"What's not to like? Custard:good. Jam:good. Meat:good!",
        author:"Joey"
    },
    {
        quote:"Hi, I'm Chandler. I make jokes when I'm uncomfortable.",
        author:"Chandler"
    },
    {
        quote:"I wish I could, but I don't want to.",
        author:"Phoebe"
    }
];

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText="-"+todaysQuote.author;
