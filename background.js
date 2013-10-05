//=======================================|
//  SUBMISSION EVENT LISTENER/HANDLER    |
//                                       |
//                                       |
//=======================================|

//I KNOW THIS WORKS: 
// chrome.extension.onMessage.addListener(
//     function(request, sender, sendResponse){
//         switch (request.directive){
//             case "submit-form": //set in popup.js
//                 //execute the content script
//                 chrome.tabs.executeScript(
//                     null, // defaults to current tab
//                     {file: "content.js",
//                     allFrames: true}
//                     //optional callback fn([arrayofAny]){}
//                 );
//                 sendResponse({}); // send back empty response
//                 break;
//             default:
//                 //debug when request.directive doesn't match
//                 alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
//         }
//     }
// );




chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        switch (request.directive){
            case "submit-form": //set in popup.js
                //var obj = {"testing": request.title};
                //chrome.storage.sync.set(obj);
                chrome.storage.sync.set({"test":"1, 2"});
                sendResponse({}); // send back empty response
                break;
            default:
                //debug when request.directive doesn't match
                alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);


//=========================================================|
//        STATUS: copypasta, works in regular browser      |
//        This is a helper fn for form data grabber, i.e.  |
//        submission event handler below                   |
//=========================================================|

//helper function to serialize form data
// $.fn.serializeObject = function(){
//     var o = {};
//     var a = this.serializeArray();
//     $.each(a, function() {
//         if (o[this.name] !== undefined) {
//             if (!o[this.name].push) {
//                 o[this.name] = [o[this.name]];
//             }
//             o[this.name].push(this.value || '');
//         } else {
//             o[this.name] = this.value || '';
//         }
//     });
//     return o;
// };

//=======================================|
//   form data grabber
//  SUBMISSION EVENT LISTENER/HANDLER 
//    
//   on submit event --> Callback:
//     take form object passed -->
//     serialize --> stick in 
//     chrome.storage
// 
// 
//=======================================|





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
//  may need to use chrome.alarms API   |
//
//======================================|


setInterval(checkAndPostMessages, 60000);














