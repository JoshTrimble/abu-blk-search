//functions to set session stores to persist data past webpage changes
function setStore(item, val) { window.sessionStorage.setItem(item, JSON.stringify(val)) }
function getStore(item) { return JSON.parse(window.sessionStorage.getItem(item)) }

//replaces side search with text area for entry
document.getElementById('cardName-collapsable').innerHTML = '<textarea id="decklist" style="width: 100%; height: 300px;"></textarea> <button style="width:100%" onclick="subForm()">Search</button>';

document.getElementById('decklist').value = getStore('currentList')

const nextCard = getStore('cardArr') != getStore('cardsToSearch').length-1 ? `href="/magic-the-gathering/singles?search=${getStore('cardsToSearch')[getStore('cardArr')+1]}"` : 'href="https://abugames.com/cartview/shop"'
const prevCard = getStore('cardArr') == 0 ?  `href="/magic-the-gathering/singles?search=${getStore('cardsToSearch')[getStore('cardArr')]}"` : `href="/magic-the-gathering/singles?search=${getStore('cardsToSearch')[getStore('cardArr')-1]}"` 

function subForm() {

    //stores cards without numbers to pass through the url to search
    setStore('cardsToSearch', [])

    //store the most recently entered decklist
    setStore('currentList', document.getElementById('decklist').value)

    //splits cards by line and adds only names to "cardsToSearch"
    setStore('cardQty', document.getElementById('decklist').value.split('\n'))
    setStore('cardsToSearch', getStore('cardQty').map(x => x.replace(/[0-9]/g, '').trim()))

    setStore('cardArr', 0)
    window.location.href = `https://abugames.com/magic-the-gathering/singles?search=${getStore('cardsToSearch')[getStore('cardArr')]}`
}

//Adds previous and next card tabs if search has innitialized 
if (getStore('cardArr') >= 0) {
    document.getElementsByClassName('main-nav')[0].innerHTML = `<ul _ngcontent-xpd-c138="" class="mainHere" style="width:715px"><li _ngcontent-xpd-c138="" style="width: 50%; text-align: center"><a _ngcontent-xpd-c138="" onclick="previous()" ${prevCard}>&lt; Previous Card</a></li><li _ngcontent-xpd-c138="" style="width: 50%; text-align: center"><a _ngcontent-xpd-c138="" onclick="next()" ${nextCard}>Next Card &gt;</a></li></ul>`
    document.querySelector('h3[class="block-title"]').textContent = getStore('cardQty')[getStore('cardArr')]

}

function next() {
    setStore('cardArr', getStore('cardArr') + 1) }

function previous() {
    getStore('cardArr') == 0 ? null: setStore('cardArr', getStore('cardArr') - 1) }
