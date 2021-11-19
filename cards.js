let base_url = "http://deckofcardsapi.com/api/deck";

$btn = $("button");
$cards = $("#cards");
deck_id = 0;

async function getDeck() {
    resp = await axios.get(`${base_url}/new/shuffle`);
    console.log(resp.data.deck_id);
    return resp.data.deck_id;
};

async function drawCard(deck_id) {
    resp = await axios.get(`${base_url}/${deck_id}/draw/`);
    return resp;
};

$btn.on('click', async function() {
    if(deck_id == 0) {
        deck_id = await getDeck();
    };
    card = await drawCard(deck_id);
    $cards.append(`<img src="${card.data.cards[0].image}">`);
    if(card.data.remaining == 0) {
        $btn.remove();
    };
})
