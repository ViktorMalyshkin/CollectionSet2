// Set
// Есть земля. Она состоит где-то из очень плодородной почвы, где-то из пустыни.
// В определенный момент пустыня может появится где угодно и без внешнего вмешательства Аэраторов земля не сможет стать снова плодородной.
// Участники:
// На каждом участке есть датчик, который срабатывает когда участок превращается в пустыню (реализуйте как получаемый event с адресом участка)
// Есть Колхоз, который умеет и хочет садить и собирать урожай, но делать это он хочет и может только на плодородной почве.
// Есть Аэраторы, работа которых восстанавливать плодородную почву на пустынных участках.
// Участок считается плодородным сразу после работы на нем Аэраторов
// Напишите программу, которая поможет колхозу безошибочно выбирать участок для посадки,
// а аэраторам безошибочно находить и восстанавливать пустынные участки.

let text = 'Кwартель имеет в собственности территорию и пытается посадить свои фермы планктации с марихуаной,\n' +
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

// Arrayw
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
