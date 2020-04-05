const tester = require('../person_sources/randName');

console.log("Men:");
for (let i = 0; i < 10; i++) {
    console.log("Name " + i + ": " + tester.randMale(), tester.randSurname());
}
console.log("Women:");
for (let i = 0; i < 10; i++) {
    console.log("Name " + i + ": " + tester.randFemale(), tester.randSurname());
}