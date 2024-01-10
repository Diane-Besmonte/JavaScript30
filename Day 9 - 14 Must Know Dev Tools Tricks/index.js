const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
    p.innerText = 'See? I Told You';
}

// Regular
console.log('Hello World');

// Interpolated
console.log('Hello I am a %s string!', '🤡');

// Styled
console.log('%c I am some great text', 'font-size:1.7em; color: black; background: cyan;')

// warning!
console.warn('Oh noooo!!');

// Error :|
console.error('Uh oh! There might be a problem!');

// Info
console.info('This is just an information');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Wrooong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Gojo');
console.count('Gojo');
console.count('Gojo');
console.count('Gojo');
console.count('Kelsey');
console.count('Kelsey');
console.count('Kelsey');
console.count('Kelsey');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/Diane-Besmonte')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});

console.table(dogs);

