// 2ndary importance: use this page to make the popup more flashy


//DEALING WITH FORM SUBMISSION EVENT: 

//clickhandler helper function

function clickHandler(e) {
    chrome.extension.sendMessage({directive: "submit-form"}, function(response) {
        debugger;
        //console.log("listening for submit in popup.js!"); //testing
    });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', clickHandler);
});
