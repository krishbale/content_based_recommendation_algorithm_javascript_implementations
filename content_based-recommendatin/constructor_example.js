class User {
    constructor(name,year) {
        this.name = name
        this.year = year
        
    }
    age(){
        let date = new Date();
        
        return date.getFullYear() - this.year
    }
    
}
var user1 = new User("Bob",2014)

console.log(`My name is ${user1.name} 
and my age is ${user1.age()}`);
