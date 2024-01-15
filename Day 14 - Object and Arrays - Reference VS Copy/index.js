// start with strings, numbers, and booleans
let age = 12;
let age2 = age;
console.log(age, age2);
age = 20;
console.log(age, age2);

let name = 'gojo';
let name2 = name;
console.log(name, name2);
name = 'satoru'
console.log(name, name2);


// array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(players, team);
team[5] = 'Lux';

// make a copy instead of reference to not update the original array
const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
team4[4] = 'Kelsey';
console.log(team4);


// objects
const person = {
    name: 'Blanca',
    age: 25
};

const captain = person;
console.log(captain);

// make a copy instead
const capt2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(capt2);

const capt3 = {...person};
console.log(capt3);

// 1 level deep

const profile = {
    name: 'Gojo',
    age: 22,
    desc: {
        color: 'white',
        role: 'Engineer'
    }
}

console.log(profile);

// note: when you use object.assign it always one level deep
const crewmate = Object.assign({}, profile);

const crew = JSON.parse(JSON.stringify(profile));