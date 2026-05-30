/*  //ternary 
const age = 18;
const result=age>=18 ? "you are an adult" : "you are a minor";     //condition ? 
console.log(result);

const isLoggedIn=true;
const message=isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

const app = () => {                                    //react me ternary operator
    const isLoggedIn=true;
    return (
        <div>
            {isLoggedIn ? "Welcome back!" : "Please log in."}
        </div>
    );
}

// Short-circuit 


//And   dono sahi hone chahiye           true && true = true
const isLoggedIn=true;
const hasSubscription=true;
const message=isLoggedIn && hasSubscription ? "Welcome back, subscriber!" : "Please log in or subscribe.";
console.log(message);


//OR  dono me se koi ek sahi hona chahiye      false || true = true
const isLoggedIn=false;
const hasSubscription=true;
const message=isLoggedIn || hasSubscription ? "Welcome back, subscriber!" : "Please log in or subscribe.";
console.log(message);
*/

//optional chaining

const user={
    name:"ayush",
    address:{
        city:"mirzapur",
        state:"up"
    }
};
console.log(user.address?.city);

const user1={
    name:"ayush"
};
console.log(user1.address?.city);