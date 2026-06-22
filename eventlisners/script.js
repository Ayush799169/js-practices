
  //basics event listener
const h1= document.querySelector("h1");
    h1.addEventListener("click", function(){
        console.log("h1 was clicked");
        alert("h1 was clicked");
        h1.style.color="red";
    });

    //click btn 
    const button= document.querySelector("button");
    button.addEventListener("click", function(){
        console.log("button was clicked");
        alert("button was clicked");
        button.style.backgroundColor="green";
    });
// input
    const input= document.querySelector("input");
    input.addEventListener("input", function(){
        console.log("type",input.value);
    });

    //mouseover
    const div= document.querySelector("div");
    div.addEventListener("mouseover", function(){
        console.log("mouse is over the div");
        div.style.backgroundColor="yellow";
    });
    div.addEventListener("mouseout", function(){
        console.log("mouse is out of the div");
        div.style.backgroundColor="white";
    });

    //submit form
    const form= document.querySelector("form");            //prevent default mot form submit hone se pehle event ko rokta hai
    form.addEventListener("submit", function(event){
        event.preventDefault(); //hta ke dekh satkte ho
        console.log("form submitted");
        alert("form submitted");
    });
//select chnages
    const select= document.querySelector("#sel");
    select.addEventListener("change", function(){
        console.log("Selected option:", select.value);

    });



//event obect e

    const link= document.querySelector("a");
    link.addEventListener("click", function(event){
        event.preventDefault();
        console.log("Link clicked");
    });


    //remove event listener

    const removeBtn= document.querySelector("#removeBtn");
    function handleClick(){
        console.log("Remove button clicked");
    }
    removeBtn.addEventListener("click", handleClick);
    const removeListenerBtn= document.querySelector("#removeListenerBtn");
    removeListenerBtn.addEventListener("click", function(){
        removeBtn.removeEventListener("click", handleClick);
        console.log("Event listener removed from Remove button");
    });