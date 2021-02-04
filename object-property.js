const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Maannaaaaaa' },
    { id: 41, name: 'Moyouri' },
    { id: 71, name: 'DeepJol' }
];
// const allName = [];
// for (let i = 0; i < students.length; i++) {
//     allName.push(students[i].name);

// }
// console.log(allName);

const names = students.map(s => s.name);
console.log(names);
// const ids = students.map(s => s.id);

const ids = students.filter(s => s.id > 41);
console.log(ids);

const names = students.map(s => s.name);
const idS = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);

console.log(biggerOne);