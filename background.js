//copypast - trying to listen to submit button

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "form-submit-click":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "contentscript.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);




//=======================================|
//        STATUS: done copypasta         |
//helper fn for form data grabber, i.e. submission event handler below
//=======================================|

//helper function to serialize form data
$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

//=======================================|
//   form data grabber
//  SUBMISSION EVENT LISTENER/HANDLER 
//    
//   on submit event --> take form object 
//   passed?
//   serialize --> stick in chrome.storage
//  
//   ON SUBMISSION EVENT, PUT THE 
//   FORM DATA INTO chrome.storage
// 
//   
// 
// 
//=======================================|







chrome.browserAction.onClicked.addListener(function() {
    document.forms.newLink.addEventListener("submit", function(){
        console.log("submitting");
        return false;
    });
};


// $(function() {
//     //THIS NEEDS TO BE TURNED INTO AN EVENT LISTENER-HANDLER or added to hack-y "onsubmit=""" attached to the submit button 
//     $('form').submit(function() {
//         //use helper function - TURN INTO JSON OBJECT
//         var jsonified = JSON.stringify($('form').serializeObject());
//         //display JSON obj (should be removed)
//         $('#result').text(jsonified);
//         //testing: send to localstorage 
//         chrome.storage.sync.set({"testing": jsonified}, function(){
//           console.log("form data saved");
//         });

//         // prevent submission
//         return false;
//     });
// });


//=======================================|
//
//script that checks chrome.storage
//   if date < data --> SEND TO CONTENT.JS 
//=======================================|



function checkAndPostMessages(){
  //... 
}


//======================================|
//
//  RUN THIS SHIT ALL THE TIME 
//
//=======================================|


setInterval(checkAndPostMessages, 60000);














