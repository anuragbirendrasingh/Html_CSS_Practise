

function user(name,age){
    return{
       name,
       age,

       // shorter syntax
       sayHello(){
        console.log(`hello ${this.name}`);
        
       } 

    // sayHello : function(){
    //     console.log(`hello ${this.name}`);
        
    // }
    }
}

const user1 = user("anurag",27);
user1.sayHello() ;