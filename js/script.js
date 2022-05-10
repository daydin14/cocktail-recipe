const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const $form = $("form");
const $drinkName = $("#drink");
const $instructions = $("#instructions");
const $image = $("#image");
// const $input = $(`input[type="text"]`);

$form.on("submit", getData);

// Function to connect to api and get a random drink and display it once a form is submitted
function getData(event) {
  event.preventDefault();
//   const userInput = $input.val();
  $.ajax(randomUrl).then(
    function (data) {
      $drinkName.text(data.drinks[0].strDrink);
      $instructions.text(data.drinks[0].strInstructions);
      $image.attr("src", data.drinks[0].strDrinkThumb);
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
}

// Top Menu Buttons:
var menu = [
  { text: "Home"},
  { text: "Random Drink"},
  { text: "Liquor Choice"},
  { text: "Search Drink"},
  { text: "All Drinks"},
];

const topMenuEl = document.getElementById("menu-bar");
topMenuEl.style.backgroundColor = "skyblue"
topMenuEl.classList.add("flex-around");

for (let i of menu) {
  let bEl = document.createElement("button");
  bEl.setAttribute("submit", menu);
  bEl.textContent = i.text;
  topMenuEl.append(bEl);
}