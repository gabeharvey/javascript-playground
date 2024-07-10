let pets = ['Blackberry', 'Frost', 'Henrietta'];
for(let i=0; i < pets.length; i++) {
    console.log(pets[i] + ' is my pet!')
}

function helloWorld () {
    let pets = 'Jellybean';
    console.log('We miss ' + pets);
    return;
}

helloWorld ();

const family = ['Gabe', 'Laura', 'MJ', 'Cora', 'Henry'];
for (let i=0; i < family.length; i++) {
    console.log(family[i] + ' is in the Harvey Family!');
}

for (let i=2; i < family.length; i++) {
    console.log(family[i] + ' is in the Harvey Family too!')
}

let cat = {
    name: 'Blackberry',
    age: 2,
    gender: 'male',
    isHome: false,
}

console.log(cat);

cat = {
    name: 'Frost',
    age: 2,
    gender: 'male',
    isHome: false,
}

console.log(cat);

if (cat.isHome) {
    console.log( cat.name + ' is home!');
} else {
    console.log( cat.name + ' is not home!');
}