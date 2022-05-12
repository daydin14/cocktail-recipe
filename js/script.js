// Ajax random cocktail drink:
const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const $drinkName = $("#drink");
const $instructions = $("#instructions");
const $image = $("#image");
const $drinkIngredients = $("#ingredients");

const $input = $(`input[type="text"]`);
const $randomButton = $("#rand");

$randomButton.on("click", getData);

// Function to connect to api and get a random drink and display it once a form is submitted
function getData(event) {
  event.preventDefault();
  //   const userInput = $input.val();
  $.ajax(randomUrl).then(
    function (data) {
      $drinkName.text(data.drinks[0].strDrink);
      $instructions.text(data.drinks[0].strInstructions);
      $image.attr("src", data.drinks[0].strDrinkThumb);
      getIngredients(data);
    },
    function (error) {
      console.log("Something is wrong");
      console.log(error);
    }
  );
}

function getIngredients(data) {
  // let ingredients = [];
  // ingredients.push(data.drinks[0].strIngredient1);
  // ingredients.push(data.drinks[0].strIngredient2);
  // ingredients.push(data.drinks[0].strIngredient3);
  // ingredients.push(data.drinks[0].strIngredient4);
  // ingredients.push(data.drinks[0].strIngredient5);
  // ingredients.push(data.drinks[0].strIngredient6);
  // ingredients.push(data.drinks[0].strIngredient7);
  // ingredients.push(data.drinks[0].strIngredient8);
  // ingredients.push(data.drinks[0].strIngredient9);
  // ingredients.push(data.drinks[0].strIngredient10);
  // ingredients.push(data.drinks[0].strIngredient11);
  // ingredients.push(data.drinks[0].strIngredient12);
  // ingredients.push(data.drinks[0].strIngredient13);
  // ingredients.push(data.drinks[0].strIngredient14);
  // ingredients.push(data.drinks[0].strIngredient15);

  // console.log(ingredients);

  // let filteredIngredients = ingredients.map(function(ingredient) {
  //   if (ingredient != null) {
  //     return ingredient;
  //   }
  // });
  // return filteredIngredients;

  // console.log(data);
  $drinkIngredients.empty();
  for (let i = 1; i < 16; i++) {
    // console.log(data.drinks[0][`strIngredient1`]);
    if (data ? data.drinks[0][`strIngredient${i}`] : null != "null") {
      $drinkIngredients.append(data.drinks[0][`strIngredient${i}`] + ", ");
    }
  }
}
