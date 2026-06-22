const timer = setTimeout(() => {
    console.log("Timer completed!");
}, 2000);

const interval = setInterval(() => {
    console.log("Interval tick!");
}, 2000);

// To clear the timer and interval after some time
setTimeout(() => {
    clearTimeout(timer);
    clearInterval(interval);
    console.log("Timer and interval cleared!");
}, 10000);

const removeTimer = setTimeout(() => {
    console.log("This timer will be removed before it executes.");
}, 3000);

// Clear the removeTimer before it executes
clearTimeout(removeTimer);
console.log("removeTimer has been cleared before execution.");