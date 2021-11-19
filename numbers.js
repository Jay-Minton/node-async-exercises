let base_url = "http://numbersapi.com";
let group_nums = [4,6,8,43]


async function numb_trivia() {
    let response = await axios.get(`${base_url}/42?json`);
    $("body").append(`<p>${response.data.text}</p>`);
}
numb_trivia();

async function num_trivia_multiples() {
    let response = await axios.get(`${base_url}/${group_nums}?json`);
    for (let key of group_nums){
        $("body").append(`<p>${response.data[key]}</p>`); 
    }
}
num_trivia_multiples();

async function same_num_multiple() {
    let fact1p = axios.get(`${base_url}/42?json`);
    let fact2p = axios.get(`${base_url}/42?json`);
    let fact3p = axios.get(`${base_url}/42?json`);
    let fact4p = axios.get(`${base_url}/42?json`);

    let fact1 = await fact1p;
    let fact2 = await fact2p;
    let fact3 = await fact3p;
    let fact4 = await fact4p;

    $("body").append(`<p>${fact1.data.text}</p>`);
    $("body").append(`<p>${fact2.data.text}</p>`);
    $("body").append(`<p>${fact3.data.text}</p>`);
    $("body").append(`<p>${fact4.data.text}</p>`);
}
same_num_multiple();