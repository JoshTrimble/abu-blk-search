document.querySelector('#compact > div.wholeDeck > b').innerHTML += '<button onclick="copyDeck()" id="copyButton" style="margin-left: 5px;border-radius: 15px;border: none;color: #b5c3da;background-color: #393b3e;">Copy Deck</button>'

let deck = Array.from(document.getElementsByClassName('number'))
let decklist = []
deck.forEach((i) => {
  decklist.push(i.innerText.trim() + '\n')
})

function copyDeck() {
  document.getElementById('copyButton').textContent = 'Copied!'
  navigator.clipboard.writeText(decklist.join("")).then(res => {
    setTimeout(() => {
      document.getElementById('copyButton').textContent = 'Copy Deck'
    }, 2000);


  })
}
document.querySelector('#sticky > div:nth-child(1) > div').innerHTML += `<span><a href="https://abugames.com/magic-the-gathering/singles#${btoa(decklist.join(', ').replace(/\n, /g,'\n'))}" class="btn btn-sm btn-primary cardhoarder col-xs-12 trackable-affiliate linker" id="abu" rel="nofollow" style="
    background: #014f9f;
    height: 27px;
    border-radius: 0;
"><img src="https://abugames.com/assets/images/abuLogo_mob.png" class="pull-left" height="20px" style="padding: 0 2.5px;" alt=""><span class="price pull-left" style="font-size:14px;padding-left: 5px;">$N/A</span> <span class="pull-right" style="
    position: absolute;
    right: 2.5px;
">@abugames <span class="glyphicon glyphicon-chevron-right"></span>&nbsp; </span></a></span>`
