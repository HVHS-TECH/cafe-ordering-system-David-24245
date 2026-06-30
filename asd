function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");   
    const OUTPUT = document.getElementById("spaceForJavaScriptOutput");  
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p>Your name is " + userName + "</p>";
}