/* An object can represent a real life thing in code
Create an object that defines you to someone you're meeting for the 
first time. What properties describe you? Name? Hair color? Myers-Briggs
 personality?

After you create the JS object version of you, make one for 
someone else you know using the same keys, but values unique to them.

Bonus: Make one of the properties an action you can take, ie a method.
*/


const object1 = {
    firstName: "Sanjeet",
    lastName: "Prasad",
    age: 39,
    hairColor: "black",
    occupation: "sales manager",
    hobbies: "cooking, reading, travelling, chanting",

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

    
}


const object2 = {
    firstName: "Alice",
    lastName: "Nie",
    age: 34,
    hairColor: "black",
    occupation: "teacher",
    hobbies: "reading, sinding, travelling, dancing",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

}

console.log(`Hi my name is ${object1.fullName()} my hobbies is ${object1.hobbies}`)
console.log(`Hi my name is ${object2.fullName()} my hobbies is ${object2.hobbies}`)
		