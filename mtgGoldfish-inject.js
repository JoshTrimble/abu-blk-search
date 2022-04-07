function copyDeck() {

  let cards = document.getElementById('deck_input_deck')
  
  navigator.clipboard.writeText(cards.value.replace(/sideboard/g, '')).then(res => {

    document.getElementById('copyDeck').innerHTML = '<div style="text-align: center;">Copied!</div>'
    setTimeout(() => {
      document.getElementById('copyDeck').innerHTML = '<div class="tool-btn-icon"><span class="fa fa-clipboard"></span></div>Copy Decklist'
    }, 2000);
  
  })
}

//Adds "Copy Decklist" button 
document.getElementsByClassName('tools-container')[0].innerHTML += `<a onclick="copyDeck()" id="copyDeck" class="btn btn-secondary deck-tools-btn"><div class="tool-btn-icon"><span class="fa fa-clipboard"></span></div>Copy Decklist</a>`

//Adds "Buy from ABU Games" button
document.querySelector('#tab-paper > div.deck-purchase-buttons-container > div:nth-child(3) > div > div:nth-child(1)').innerHTML = `<a class="btn btn-shop btn-online-muted deck-view-purchase-button " data-track="1" data-category="affiliate" data-action="mtgotraders" data-label="deck" data-value="4700750" target="_blank" href="https://abugames.com/magic-the-gathering/singles#${btoa(document.getElementById('deck_input_deck').value.replace(/sideboard/g, ''))}" style="
    border-color: #0065dc;
"><div class="btn-shop-label">
<img alt="Shopping Cart Icon" src="https://assets1.mtggoldfish.com/assets/shopping-cart-online-319d97cdcf9870c7be230c7675cfabd3b719b36a4dee049e1d7ce6ac5162eb27.svg" style="
    filter: hue-rotate(310deg);
">
Buy from ABU Games
</div>
<span class="btn-shop-price">
&nbsp;
</span>
</a>
</div>`
