class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
}
class Rabbit extends Animal {
    
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed; 
    }
}

class Fish extends Animal {
    constructor (name, age, swimSpeed){
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

class Hawks extends Animal {
    constructor (name, age, flySpeed){
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed; 
    }
}

const rabbit = new Rabbit("Ryan", 45, 45);