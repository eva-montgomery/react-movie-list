class Hero {
    // properties or attributes
    // "variables that belong to each instance"
    constructor(health=18, power=5) {
        this.health = health;
        this.power = power;
        
        // behaviors or methods 
        // "functions that beolong to each instance"
    }
    
    hug(otherHero) {
        // otherHero.health += this.power;
        otherHero.receiveHealth(this.power);
        // console.log(`otherHero has ${otherHero.health}`);
    }
    
    receiveHealth(healthPoints) {
        this.health += healthPoints;
        console.log(`Yay, I love hugs, I have ${this.health}`)
    }
}


const aHero = new Hero();
const anotherHero = new Hero();
aHero.hug(anotherHero);
aHero.hug(anotherHero);


class Dog {
    constructor(exercise=20, snuggles=50) {
        this.exercise = exercise;
        this.snuggles = snuggles;
}

    exerciseDog(wally) {
        wally.exercise += this.snuggles;
        console.log(`wally gives ${wally.exercise} snuggle minutes for exercising`);
    }
}


const aDog = new Dog();
const anotherDog= new Dog();
aDog.exerciseDog(anotherDog);
// aDog.exerciseDog(anotherDog);

// console.log(aHero);




