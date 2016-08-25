/* function to extract parameters from URL */
function turkGetParam( name ) { 
  var regexS = "[\?&]"+name+"=([^&#]*)"; 
  var regex = new RegExp( regexS ); 
  var tmpURL = fullurl; 
  var results = regex.exec( tmpURL ); 
  if( results == null ) { 
    return ""; 
  } else { 
    return results[1];    
  } 
}

/* THIS IS THE LINE TO CAPTURE THE ACTUAL URL: */
var fullurl = window.location.href;

/* ASSIGNS THE URL PARAMETERS TO JAVASCRIPT VARIABLES */
var assign = turkGetParam('assignmentId');
var hit = turkGetParam('hitId');
var worker = turkGetParam('workerId');

/* CREATE A HYPERLINK URL TO BE DISPLAYED */
var surveylink = new String("?" + "assignmentId=" + assign + "&hitId=" + hit + "&workerId=" + worker);
var homelink = new String("<a class='navbar-brand' href='index.html?assignmentId=" + assign + "&hitId=" + hit + "&workerId=" + worker + "'>Survey Test</a>");
document.getElementById('homelink').innerHTML = homelink;

/* YOU MAY WANT TO CONDITIONALLY HANDLE ASSIGNMENTS THAT ARE IN "PREVIEW MODE" */
if(assign=="ASSIGNMENT_ID_NOT_AVAILABLE") {
    /* DO SOMETHING */
}
else {
    /* SHOW THE ACTUAL LINK */
    /* the `surveylink` variable can then be displayed to the worker using any method */
}