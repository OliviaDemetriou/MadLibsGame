// Mad Lib with JavaScript

// Event Listeners
document.getElementById("btn").addEventListener("click", buildMadLib);

// Event function
function buildMadLib() {
  // Input
  let name1 = document.getElementById("name").value;
  let country = document.getElementById("country").value;
  let jobOppucation = document.getElementById("job-occupation").value;
  let drink = document.getElementById("drink").value;
  let musicGenre = document.getElementById("music-genre").value;
  let adjective = document.getElementById("adjective").value;
  let houseType = document.getElementById("house-type").value;
  let number = document.getElementById("number").value;
  let animal = document.getElementById("animal").value;
  let foodIngredient = document.getElementById("food-ingredient").value;
  let foodIngredient2 = document.getElementById("food-ingredient-2").value;
  let meal = document.getElementById("meal").value;

  //Process
  let result =
    "My name is " +
    name1 +
    " and I live in " +
    country +
    " and I work as a " +
    jobOppucation +
    "." +
    " By night I like to sip on " +
    drink +
    " and listen to " +
    musicGenre +
    " music." +
    " I live in a " +
    adjective +
    " " +
    houseType +
    " with my " +
    number +
    " " +
    animal +
    "." +
    " For breakfast I like to eat " +
    foodIngredient +
    " and I pack myself " +
    foodIngredient2 +
    " sandwiches for lunch." +
    " For dinner my favourite meal is " +
    meal +
    ".";

  // Output
  document.getElementById("result").innerHTML = result;
}
