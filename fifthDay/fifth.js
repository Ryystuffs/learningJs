class Rectangle {
    constructor (width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if (newWidth > 0){
            this._width = newWidth;
        }else {
            console.error ("width must be a positive number");
        }
    }
    get width(){
        return this._width;
    }

    set height(newHeight){
        if (newHeight > 0){
            this._height = newHeight;
        }else {
            console.error ("width must be a positive number");
        }
    }
    get height(){
        return this._height;
    }
}

const rectangle1 = new Rectangle (70, 65);
console.log(rectangle1.width);
console.log(rectangle1.height);


class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName (newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }else{
            console.error("First name must be a non-empty string");
        }
    }

    get firstName (){
        return this._firstName;
    }

    set lastName (newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }else{
            console.error("Last name must be a non-empty string");
        }
    }

    get lastName () {
        return this._lastName;
    }

    set age (newAge){
        if (typeof newAge === "number" && newAge >= 0 ){
            this._age = newAge;
        }else{
            console.error("Age must be a non negative number");
        }
    }
    get age (){
        return this._age;
    }

    get fullName (){
        return this._firstName + " " + this._lastName;
    }
}


const person1 = new Person ("Paul", "Trinidad", 5);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName);