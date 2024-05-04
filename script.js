//When the Window Loads Call the Function
window.onload = init;

//Function to Initialize the Page
function init() {
    //Get the Button Element
    const button = document.getElementById("convert-button");

    //When the Button is Clicked, Call the buttonClicked Function
	button.onclick = buttonClicked;
}

//Function to Display the results
function buttonClicked() {
    //Get the Input Added
    const inputValue = document.getElementById("temperature").value;

    //Convert the Fahrenheit to Celsius
    const celsiusValue = (inputValue - 32) * 5/9;

    //Message
    let message = `Output Temperature: ${celsiusValue.toFixed(2)} Celsius`;

    //Get the Output Element
    let output = document.getElementById("outputTemperature");

    //Add the value to the element (with the InnerHTML)
    output.innerHTML = message;

}