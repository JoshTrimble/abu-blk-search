//functions to set session stores to persist data past webpage changes
function setStore(item, val) { window.sessionStorage.setItem(item, JSON.stringify(val)) }
function getStore(item) { return JSON.parse(window.sessionStorage.getItem(item)) }

//replaces side search with text area for entry
document.getElementById('cardName-collapsable').innerHTML = '<textarea id="decklist" style="width: 100%;height: 350px;resize: vertical;border: none;padding-left: 7px;padding-top: 5px;"></textarea> <button onclick="subForm()" style="width: 100%; height: 30px; background-color: #194f8f; border: none; border-radius: 7px; color: white; font-size: 1.5rem; font-family: Open Sans,sans-serif;">Search</button>'
//Set filter to price low to high
document.querySelector('#results-change-view > div:nth-child(3) > select > option:nth-child(2)').selected = true

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
