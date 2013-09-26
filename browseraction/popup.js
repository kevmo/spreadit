
// BOOTLEG TESTING 

//not working when attached to onsubmit, not important right now
function checkSubmitting(){
  console.log("The onsubmit event is running");
}

//working
function checkOnClick(){
  console.log("onclick is working");
}

// HELPER FN: Serializing to JSON name-val pairs (jquery)

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

// CREATE AND DISPLAY that JSON object (jquery)
// SEND TO LOCALSTORAGE

$(function() {
    $('form').submit(function() {
        //use helper function
        var jsonified = JSON.stringify($('form').serializeObject());
        //display JSON obj (should be removed)
        $('#result').text(jsonified);
        //testing: send to localstorage 
        window.localStorage.setItem("testing", jsonified);
        // prevent submission
        return false;
    });
});




