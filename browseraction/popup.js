// 2ndary importance: use this page to make the popup more flashy


//DEALING WITH FORM SUBMISSION EVENT: 

//clickhandler helper function

function clickHandler(e) {
    chrome.extension.sendMessage({directive: "submit-form"}, function(response) {
        console.log("listening for submit in popup.js!"); //testing
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').addEventListener('submit', clickHandler);
});



// BOOTLEG TESTING 

//not working when attached to onsubmit, not important right now
function checkSubmitting(){
  console.log("The onsubmit event is running");
}

//working
function checkOnClick(){
  console.log("onclick is working");
}
