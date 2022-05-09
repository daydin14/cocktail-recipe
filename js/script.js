const url = "www.thecocktaildb.com/api/json/v1/1/random.php";

const $form = $("form");
const $drinkName = $("#drink");
const $instructions = $("#instructions");
const $image = $("#image");
// const $input = $(`input[type="text"]`);

$form.on("submit", getData);

function getData(event) {
  event.preventDefault();

  $.ajax(url).then(
    function (data) {
      console.log("Drinks!");
      $drinkName.text(data.strDrink);
      $instructions.text(data.strInstructions);
      $image.attr("src", data.strDrinkThumb);
      console.log(data);
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
}
