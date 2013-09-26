//VIEWS - dynamically create 


//functions 



function store(formObj){
  console.log("formObj", formObj);
  var message = JSON.stringify(formObj);
  window.localStorage.setItem("testing", message);
  console.log("JSON? --->", message);
}

function checkSubmitting(){
  console.log("The onsubmit event is running");
}

function checkOnClick(){
  console.log("onclick is working");
}

$( "#plz" ).click(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});
