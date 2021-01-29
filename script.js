//learning again. Congratulations!!

var name = 'Chris';
var question = alert(`Welcome to my site ${name}. Check out all my cool features`)
 var number = NaN;
addTwo = (number) => {
 var newNumber = number + 2;
 var devideByTwo = newNumber/2;
var timesTen = devideByTwo*10;
return timesTen
};

var newNumberTwo = addTwo(3);

// shows that i can create a new element with two old ones
var number = 1;
var secondNumber = 2;
var thirdNumber = number + secondNumber;


// // successful dom manipulation
// var message = prompt("Put a message here!!!");
// //grab the element
// var element = document.getElementById("manipulation");
// //set the inner html of the element with the message variable
// element.innerHTML = "<h4>" + message + "</h4>";


// //Properties can be used to set the value of an object
// element.textContent = "Goodbye"
// console.log(element)


//asks a question using the prompt method, then converts the string into a number using the parseInt() method
var question1 = parseInt( prompt("Pick a random number and I will guess a number between 1 and your number.") )

if (question1) {

            //using math.floor() and math.random() to find a random between whatever they picked plus one
        var randomGuess = Math.floor( Math.random() * question1 ) + 1;

        // take the data in question1 and randomGuess and put them in a template literal
        alert(`The number I have picked is ${randomGuess} and it is between 1 and ${question1}.`)

}

else {
    alert("You have not picked a number.")

}



/*

Function practice

*/

//a return statement will cause the javascript engine to emmmediatly exit the function and return the piece of data, so the alert box will not appear.
function dayOfWeek() {
return "Monday";
alert("what is today?")
}
// you can store this piece of data in a variable which you can use for later.
let today = dayOfWeek()