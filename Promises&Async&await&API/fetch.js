/* 
// fetch  url ko per work karta hai =means hota hai ki hum kisi URL se data ko retrieve karna chahte hain. Yeh ek asynchronous operation hai, jiska matlab hai ki hum is operation ke complete hone ka wait nahi karte, balki aage ke code ko execute karte hain.

// fetch function ek promise return karta hai, jiska matlab hai ki hum .then() method ka use karke uske result ko handle kar sakte hain. Agar fetch successful hota hai, toh hum response object ko JSON format mein convert kar sakte hain aur us data ko console mein log kar sakte hain. Agar koi error aata hai, toh hum .catch() method ka use karke us error ko handle kar sakte hain.

// fetch do method hai .than and catch


fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data.body))
    .catch(error => console.error('Error:', error));

    */

    //HTTP means Hypertext Transfer Protocol, jo web browsers aur servers ke beech data transfer karne ke liye use hota hai. HTTP ek protocol hai jo web pages, images, videos, aur other resources ko internet par transfer karne ke liye use hota hai. HTTP requests aur responses ke format ko define karta hai, jisme headers, status codes, aur body shamil hote hain. HTTP ka use karke hum web applications bana sakte hain jo users ko dynamic content provide karte hain.


    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data.body))
    .catch(error => console.error('Error:', error));

// Fetch API ke response ko handle karne ke liye hum .then() method ka use karte hain. Pehle .then() method mein hum response object ko check karte hain ki kya response successful hai ya nahi. Agar response.ok false hota hai, toh hum ek error throw kar dete hain. Agar response successful hota hai, toh hum usse JSON format mein convert karte hain aur agle .then() method mein us data ko console mein log karte hain. Agar koi error aata hai, toh hum .catch() method ka use karke us error ko handle karte hain.

//GET and POST

const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
