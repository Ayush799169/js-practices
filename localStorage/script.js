//localStorage

localStorage.setItem("name", "Ayush");
let name = localStorage.getItem("name");
console.log(name);





//cokie

document.cookie = "name=Ayush";
let cookie = document.cookie;
console.log(cookie);

const cookies = document.cookie.split("; ");
const cookieObj = {};
cookies.forEach(cookie => {
    const [key, value] = cookie.split("=");
    cookieObj[key] = value;
});
console.log(cookieObj);


//sessionStorage

sessionStorage.setItem("name", "Ayush");
let sessionName = sessionStorage.getItem("name");
console.log(sessionName);

const sessionKeys = Object.keys(sessionStorage);
const sessionObj = {};
sessionKeys.forEach(key => {
    sessionObj[key] = sessionStorage.getItem(key);
});
console.log(sessionObj);