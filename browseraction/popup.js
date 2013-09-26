
// BOOTLEG TESTING 

function checkSubmitting(){
  console.log("The onsubmit event is running");
}

function checkOnClick(){
  console.log("onclick is working");
}

// Serializing to JSON helper function (jquery)

$.fn.serializeObject = function()
{
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

// Create and display that JSON object 

$(function() {
    $('form').submit(function() {
        $('#result').text(JSON.stringify($('form').serializeObject()));
        // prevent submission
        return false;
    });
});


// Send JSON Object to local Storage 










$( "#plz" ).click(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});

function store(formObj){
  console.log("formObj", formObj);
  var message = JSON.stringify(formObj);
  window.localStorage.setItem("testing", message);
  console.log("JSON? --->", message);
}


$.fn.serializeObject = function()
{
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

function toLS(){
}