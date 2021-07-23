console.log("Script Running!");

// alert("haha ur joke was submitted. press generate to get a joke at random--if ur lucky you might get ur own...");

const messagesRef = firebase.database().ref();

document.querySelector("#viewPuns").addEventListener("click", ()=> {
    messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    let index = Math.floor(Math.random() * (data.length));
    output.innerHTML = data[index]
    console.log(index)
    console.log(data.length)
    }); 
});

// document.querySelector("#subMssg").addEventListener("click", ()=> {
//     let datalength = data.length
//     messagesRef.push({
//     3:  "This was made with javascript"
//     })
// }); 

// messagesRef.push({
// message:  "This was made with javascript"
// })

