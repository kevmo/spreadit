// 2ndary importance: use this page to make the popup more flashy



// BOOTLEG TESTING 

//not working when attached to onsubmit, not important right now
function checkSubmitting(){
  console.log("The onsubmit event is running");
}

//working
function checkOnClick(){
  console.log("onclick is working");
}


//DEALING WITH FORM SUBMISSION EVENT: 

//helper function

function clickHandler(e) {
    chrome.extension.sendMessage({directive: "form-submit-click"}, function(response) {
        console.log("listening for submit!"); //testing
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').addEventListener('submit', clickHandler);
});