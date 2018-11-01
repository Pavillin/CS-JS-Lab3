// Step 1 - Select and Store all the card values in the HTML page.
const cardValues = document.querySelectorAll('#example');
console.log(cardValues, cardValues.constructor.name);

// Step 2 - Using "Walk the DOM" select and store all the card values in the first <ul>
const firstVals = document.querySelectorAll('#firstRow:nth-of-type(1) > li');
console.log(firstVals, firstVals.constructor.name);

// Step 3 - Using "Walk the DOM" select and store all the card values in the second <ul>
const secondVals = document.querySelectorAll('#secondRow:nth-of-type(2) > li');
console.log(secondVals, secondVals.constructor.name);

// Step 4 -Select and store the #myFavouriteCard h3 element.
const favCard = document.querySelector('#myFavouriteCard');

// Step 5 - Iterate through the firstRow NodeList and change the background colour of each element to #3498db and the text colour to #fff.
firstVals.forEach(function(card){
    card.style.backgroundColor = "#3498db";
    card.style.color = "#fff";
});

// Step 6 - Iterate through the secondRow NodeList and change the text to uppercase.
secondVals.forEach(function(card){
    card.textContent = card.textContent.toUpperCase();
});

// Step 7 - Create a new object with your first name as the object name. ie: const bob = {}
const dylan = {
    // Step 8 - Add the name and age properties with your name and age as values.
    name: "Dylan",
    age: 20,
    // Step 9 - Add a property called 'favCard' with one of the cards from the first or second row as the value. <strong>NOTE:</strong> You must access the card from the firstRow variable, not just type the value in.
    favCard: secondVals[5].textContent
}
// Step 10 - Add the following as text content to the #myFavouriteCard element: `{name} is {age} years old and their favourite card is {favCard}.` replacing the {variable} with the appropriate values.
favCard.textContent = `${dylan.name} is ${dylan.age} years old and their favourite card is ${dylan.favCard}.`;