interface Person {
  name: string;
  age: number;
}

class Hero implements Person {
  constructor(public name: string) {}
  age: number;
  powers: string[];
}

function displayHeroInfo(hero: Hero) {
  console.log(`Name: ${hero.name}, age: ${hero.age}`);
}

const superToto = new Hero("SuperToto");
superToto.age = 25
superToto.powers = ['telekinesis', 'laser']

displayHeroInfo(superToto);