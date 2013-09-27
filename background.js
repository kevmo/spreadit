//=======================================|
//                                       |
//helper fn for form data grabber 
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
//
// FORM DATA GRABBER
//=======================================|


$(function() {
    //THIS NEEDS TO BE TURNED INTO AN EVENT HANDLER
    $('form').submit(function() {
        //use helper function
        var jsonified = JSON.stringify($('form').serializeObject());
        //display JSON obj (should be removed)
        $('#result').text(jsonified);
        //testing: send to localstorage 
        chrome.storage.sync.set({"testing": jsonified}, function(){
          console.log("form data saved");
        });

        // prevent submission
        return false;
    });
});


//script that checks localstorage, publishes t

function checkAndPostMessages(){
  //... 
}

//check every minute
setInterval(checkAndPostMessages, 60000);
