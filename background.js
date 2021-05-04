// Automaticaly try to delete cookie imposer when opening extention by calling deleteModal()
let extention = document.querySelector("body");
extention.addEventListener("click", deletedModal());

// Function which calls the foreground script to attempt to delete cookie
function deletedModal(){
    chrome.tabs.executeScript( {file: "./foreground.js"}, () =>
    console.log("We're in guys"))
}

// Create button
let problemButton = document.createElement("button");
let anchor = document.createElement("a");
anchor.innerText = "Test"

problemButton.appendChild(anchor);
anchor.addEventListener("click", notYetSite);
extention.append(problemButton);

function sendEmail(desireUrl){
anchor.setAttribute("href", "mailto:maxrw1995@gmail.com?subject=This%20site%20is%20not%20working%20dumba$$!&body=The site not working is " + desireUrl);
anchor.innerText = "Report site"
}

function notYetSite(){
chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    let currentUrl = url;
    sendEmail(currentUrl);

});
};
