const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let db = firebase.database().ref(); 

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    let userinfo = {
        "name" : username,
        "myMessage" : message
    };

    

    db.push(userinfo);



    //Update database here

}
db.on("child_added", addToBoard);
let messageBox = document.querySelector(".allMessages");


function addToBoard(rowData){

    let userData = rowData.val();

    let myName = userData.name;
    
    let theMessage = userData.myMessage;

    let pElement = document.createElement("p");
    
    pElement.innerText = myName + " : " + theMessage;

    messageBox.appendChild(pElement);



}


// Set database "child_added" event listener here