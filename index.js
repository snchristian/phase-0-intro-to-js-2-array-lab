
const cats = ['Milo','Otis','Garfield']

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const catscopy = [...cats, 'Broom'];
    return catscopy;
}
function prependCat(name){
    const catscopy = ['Arnold', ...cats];
    return catscopy;
}
function removeLastCat(){
    cats.slice (0, cats.length-1);
    return cats.slice(0, cats.length-1);
}
function removeFirstCat(){
    cats.slice(1);
    return cats.slice(1);
}