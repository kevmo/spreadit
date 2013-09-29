// 2ndary importance: use this page to make the popup more flashy


//listen for form submit/click, send form data to background.js


function clickHandler(e) {
  console.log("clickhandler is being triggered");
  //build object out of form data:
    if (chrome.storage)
    chrome.runtime.sendMessage({directive: "submit-form", title: document.forms.newLink.title.value}, function(response) {
        console.log("background.js is listening!"); //testing
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log("Heard the DOM load");
  document.getElementById('submit').addEventListener('click', clickHandler); //or pass clickHandler
});


