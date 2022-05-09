const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const $form = $("form");
const $drinkName = $("#drink");
const $instructions = $("#instructions");
const $image = $("#image");
// const $input = $(`input[type="text"]`);

$form.on("submit", getData);

function getData(event) {
  event.preventDefault();
//   const userInput = $input.val();
  $.ajax(url).then(
    function (data) {
      console.log("Drinks!");
      $drinkName.text(data.drinks.strDrink);
      console.log($drinkName)
      $instructions.text(data.drinks.strInstructions);
      console.log($instructions)
      $image.attr("src", data.drinks.strDrinkThumb);
      console.log(data);
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
}
