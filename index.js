// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function  destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const copycat = [...cats, name];
    return copycat;
}
function prependCat(name) {
    const copycat = [name, ...cats];
    return copycat;
}
function removeLastCat() {
    const newCats = cats.slice(0, cats.length -1);
    return newCats;
}
function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}
