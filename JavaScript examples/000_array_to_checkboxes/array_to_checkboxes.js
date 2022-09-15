//from
//https://stackoverflow.com/questions/28678027/create-and-populate-with-dom-a-checkbox-list-with-array-values-in-javascript
//https://www.joshuacolvin.net/selected-checkbox-values/

var animals = ["lion", "tigers", "bears", "squirrels"];
//create an array animals with 4 elements

var myDiv = document.getElementById("cboxes");
var resultDiv = document.getElementById("result");
//create variables for the divs that are created in the .html document
let selected;
let total;
let outputstring;
//create an variable selected for storing selected and total values for later

for (var i = 0; i < animals.length; i++) {
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var br = document.createElement("br");
    
    checkBox.type = "checkbox";
    checkBox.value = animals[i];
    checkBox.className = "checkmark";
    label.className = "container";
    myDiv.appendChild(checkBox);
    myDiv.appendChild(label);
    myDiv.appendChild(br);
    label.appendChild(document.createTextNode(animals[i]));
}


//create a loop that loops until i (starts at 0) is larger than the length of the animals array (aka maximum 4). note that .length is 4 and not 3
//create variables for a checkbox, label and br and assign elements like input and label for those

//set the type of the input element to "checkbox" and the value to the animals array at index i (would be 0 at first loop, 1 at second loop and so on)
//append the elements to myDiv
//append the current animal to the label

myDiv.addEventListener('change', event => {
    if (event.target.type === 'checkbox') {
        var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
        selected = Array.from(checkedBoxes).map(x => x.value); //there is also x.checked for "true" or "false" outputs
        total = selected.length;
        if (total == 0) {
            outputstring =  "<br>" + "no animals are selected"
        }
        else if (total == 1) {
            outputstring =  "<br>" + total + " animal is selected"
        }
        else if (total > 1) {
            outputstring =  "<br>" + total + " animals are selected"
        }
        resultDiv.innerHTML = selected + outputstring;
    }
})
//add an event listener to myDiv
//if the event target type is a checkbox do something
//create a variable checkedBoxes with all of the checked elements of the type checkbox
//assign the values of the checkboxes to selected
//assign the length of the selected values to the variable total to keep track of checked elements
//if else to format the output string so it looks nicer
//replace the resultDiv with the values in the variable selected (to avoid just adding more text to the page when more checkboxes are selected)





