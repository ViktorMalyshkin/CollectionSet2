// Картель имеет в собственности территорию и пытается посадить свои фермы планктации с марихуаной,
// на территории имеется засушлевые участки земли и участки земли там где у растений будет более влажная средя для их роста.
// Какие-то участки территории имеют как пустынную часть (desert) так и землю с источником воды (earth).
// Имеем список координат территорий, где есть пустыня на территории.
// Имеем список координат территорий, где есть земля на территории.
// Необходимо узнать всю территорию Картеля.

let text = 'Картель имеет в собственности территорию и пытается посадить свои фермы планктации с марихуаной,\n' +
    'на территории имеется засушлевые участки земли и участки земли там где у растений будет более влажная средя для их роста.\n' +
    'Какие-то участки территории имеют как пустынную часть (desert) так и землю с источником воды (earth).\n' +
    'Имеем список координат территорий, где есть пустыня на территории.\n' +
    'Имеем список координат территорий, где есть земля на территории.\n' +
    'Необходимо узнать всю территорию Картеля.'
const div = 'div'
addElement(text, div)
addElement('Дано:', div)
const desertArray = [123, 122, 121, 124, 135, 146, 197, 213]
addElement(desertArray.toString(), div)
const earthArray = [121, 124, 135, 112, 142]
addElement(earthArray.toString(), div)

// Array
addElement('Вывод Array:', div)
array = [...desertArray, ...earthArray]
const territoryArrayFilter = array.filter((item, index) =>
    array.indexOf(item) === index)
console.log('territoryArrayFilter ==>>', territoryArrayFilter)
addElement(territoryArrayFilter.toString(), div)

const territoryArrayReduce = array.reduce((itemPrevious, itemCurrent) =>
    itemPrevious.includes(itemCurrent) ? itemPrevious : [...itemPrevious, itemCurrent], [])
console.log('territoryArrayReduce ==>>', territoryArrayReduce)
addElement(territoryArrayReduce.toString(), div)

// Set
addElement('Вывод Set:', div)
const territorySet = new Set([...desertArray, ...earthArray].sort())
console.log('territorySet ==>>', territorySet)
addElement([...territorySet].toString(), div)

function addElement(text, nameElement) {
    const newElement = document.createElement(nameElement);
    newElement.innerText = text;
    const mainElement = document.getElementById("content");
    document.body.insertBefore(newElement, mainElement);
}
