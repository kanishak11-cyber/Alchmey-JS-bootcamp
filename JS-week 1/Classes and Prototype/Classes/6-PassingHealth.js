
// Configurable Health
// Final Task! Let's make both the Hero and Warrior classes have configurable health.

// When creating a warrior/hero, we'll pass a number which should be stored as their health:

// const warrior1 = new Warrior(50);
// const warrior2 = new Warrior(25);
// const hero1 = new Hero(10);

// console.log(warrior1.health); // 50
// console.log(warrior2.health); // 25
// console.log(hero1.health); // 10
// Arguments that are passed when calling a class with new will be passed directly to the constructor.

// You'll need to change the constructor of both the Hero and Warrior for this one!


class Hero {
    constructor(health) {
        this.health = health; // initialize the health property with the value of the health parameter
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}

class Warrior extends Hero {
    constructor(health) {
        super(health); // pass the health parameter to the constructor of the Hero class
        this.rage = 0;
    }

    takeDamage(damage) {
        super.takeDamage(damage); // call the takeDamage method on the Hero class
        this.rage++;
    }
}
