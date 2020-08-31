// Write your JavaScript code//
/*breakfast menu*/
function breakfast() {
    document.getElementById("breakfast").innerHTML = "Eggs, bacon, potatoes, toast for $12.99";
}


/*brunch menu*/
function brunch() {
    document.getElementById("brunch").innerHTML = "Sandwhiches, soups, salads for $10.49";
}


/*lunch menu*/
function lunch() {
    document.getElementById("lunch").innerHTML = "Sandwhiches, chips, chicken for $11.50";
}


/*dinner menu*/
function dinner() {
    document.getElementById("dinner").innerHTML = "Steaks, ribs, sausages for $14.37";
}



/*Google JS*/
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}