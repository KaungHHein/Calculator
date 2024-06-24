const display = document.querySelector(".display");
// console.log(display);



const historybutton = document.querySelectorAll("#bb");
// console.log(historybutton);



const buttons = document.querySelectorAll("#aa");
// console.log(buttons);




const specialChars = ["%", "*", "/", "-", "+", "="];
// console.log(specialChars);




let output = "";

let outputtext;

let finaltext;

let allhistory = [];









// Define function to calculate based on the button clicked

const calculate = (btnValue) => {

    console.log("You clicked " + btnValue);

    console.log("output is now : " + output);

    outputtext = output.toString();

    console.log("Text is : " + outputtext);

    if (btnValue === "=" && output !== "") {

        // if output has '%', replace with '/100' before evaluating

        output = eval(output.replace("%", "/100"));

        finaltext = outputtext + " = " + output;

        console.log("Final text is : " + finaltext);

        allhistory.push(finaltext);

        console.log(allhistory)

    }
    else if (btnValue === "AC") {

        output = "";

        // displayhistory.innerHTML = '' ;

    }
    else if (btnValue === "DEL") {

        // if DEL button is clicked, remove the last character from the output

        output = output.slice(0, -1);

        console.log("You clicked 'DEL' , so output is now : " + output);

    }
    else {
        // if output is empty and button is specialChars then return

        if (output === "" && specialChars.includes(btnValue)) return;

        output += btnValue;

    }

    display.value = output;

}










// Add event listener to buttons , call calculate() on click.

buttons.forEach((allbutton) => {

    // console.log(allbutton);

    // Button click listener calls calculate() with dataset value as argument

    allbutton.addEventListener("pointerdown", (e) => calculate(e.target.dataset.value));

})





const displayhistory = document.getElementById("display-history");
// console.log(displayhistory);




function hide() {
    displayhistory.style.display = "none";
}



hide();





function show() {
    displayhistory.style.display = "block";
}






function history() {

    if (displayhistory.style.display === "none") {
        show();
        displayhistory.innerHTML = allhistory.join('<br>');
    } else {
        hide();
    }


}
